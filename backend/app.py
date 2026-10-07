from flask import Flask, request, jsonify
from flask_cors import CORS
import re
import os
from database import init_db, insert_enquiry, get_all_enquiries, insert_application, insert_subscriber
from data import SERVICES, SOLUTIONS, PROJECTS, INDUSTRIES, INSIGHTS, TIMELINE, VALUES, FOUNDERS, CORPORATE_INFO

app = Flask(__name__)
# Enable CORS for frontend during development and production
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize the SQLite database on startup
init_db()

EMAIL_REGEX = re.compile(r"^[\w\.-]+@[\w\.-]+\.\w+$")

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        "status": "healthy",
        "service": "CrafZio Corporate Backend API",
        "version": "1.0.0"
    }), 200

@app.route('/api/corporate-info', methods=['GET'])
def get_corporate_info():
    return jsonify({
        "status": "success",
        "data": CORPORATE_INFO,
        "timeline": TIMELINE,
        "values": VALUES,
        "founders": FOUNDERS
    }), 200

@app.route('/api/services', methods=['GET'])
def get_services():
    return jsonify({
        "status": "success",
        "count": len(SERVICES),
        "data": SERVICES
    }), 200

@app.route('/api/services/<slug>', methods=['GET'])
def get_service_detail(slug):
    service = next((s for s in SERVICES if s["slug"] == slug), None)
    if not service:
        return jsonify({"status": "error", "message": f"Service with slug '{slug}' not found"}), 404
    return jsonify({"status": "success", "data": service}), 200

@app.route('/api/solutions', methods=['GET'])
def get_solutions():
    return jsonify({
        "status": "success",
        "count": len(SOLUTIONS),
        "data": SOLUTIONS
    }), 200

@app.route('/api/projects', methods=['GET'])
def get_projects():
    category = request.args.get('category')
    if category and category.lower() != 'all':
        filtered = [p for p in PROJECTS if p['category'].lower() == category.lower()]
        return jsonify({"status": "success", "count": len(filtered), "data": filtered}), 200
    return jsonify({"status": "success", "count": len(PROJECTS), "data": PROJECTS}), 200

@app.route('/api/projects/<project_id>', methods=['GET'])
def get_project_detail(project_id):
    project = next((p for p in PROJECTS if p["id"] == project_id), None)
    if not project:
        return jsonify({"status": "error", "message": "Project not found"}), 404
    return jsonify({"status": "success", "data": project}), 200

@app.route('/api/industries', methods=['GET'])
def get_industries():
    return jsonify({
        "status": "success",
        "count": len(INDUSTRIES),
        "data": INDUSTRIES
    }), 200

@app.route('/api/insights', methods=['GET'])
def get_insights():
    category = request.args.get('category')
    if category and category.lower() != 'all':
        filtered = [i for i in INSIGHTS if i['category'].lower() == category.lower()]
        return jsonify({"status": "success", "count": len(filtered), "data": filtered}), 200
    return jsonify({"status": "success", "count": len(INSIGHTS), "data": INSIGHTS}), 200

@app.route('/api/insights/<slug>', methods=['GET'])
def get_insight_detail(slug):
    insight = next((i for i in INSIGHTS if i["slug"] == slug), None)
    if not insight:
        return jsonify({"status": "error", "message": "Article not found"}), 404
    related = [i for i in INSIGHTS if i["slug"] != slug][:2]
    return jsonify({"status": "success", "data": insight, "related": related}), 200

@app.route('/api/contact', methods=['POST'])
def submit_enquiry():
    data = request.get_json() or {}
    
    name = (data.get('name') or '').strip()
    company = (data.get('company') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    service_type = (data.get('service_type') or data.get('looking_for') or 'General Enquiry').strip()
    message = (data.get('message') or data.get('requirement') or '').strip()

    # Validation
    errors = []
    if not name:
        errors.append("Name is required.")
    if not email or not EMAIL_REGEX.match(email):
        errors.append("A valid email address is required.")
    if not message:
        errors.append("Please provide details regarding your requirement.")

    if errors:
        return jsonify({
            "status": "error",
            "message": "Validation failed",
            "errors": errors
        }), 400

    enquiry_id = insert_enquiry(name, company, email, phone, service_type, message)

    return jsonify({
        "status": "success",
        "enquiry_id": enquiry_id,
        "message": "Thank you. Your project enquiry has been received. Our team will review the information and contact you regarding the next steps."
    }), 201

@app.route('/api/careers/apply', methods=['POST'])
def submit_job_application():
    data = request.get_json() or {}
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    role = (data.get('role') or 'General Application').strip()
    experience = (data.get('experience') or '').strip()
    portfolio_url = (data.get('portfolio_url') or '').strip()
    notes = (data.get('notes') or '').strip()

    if not name or not email or not EMAIL_REGEX.match(email):
        return jsonify({
            "status": "error",
            "message": "Name and a valid email are required."
        }), 400

    app_id = insert_application(name, email, phone, role, experience, portfolio_url, notes)

    return jsonify({
        "status": "success",
        "application_id": app_id,
        "message": "Thank you for sharing your profile. Our talent team will review your details for current and future opportunities."
    }), 201

@app.route('/api/newsletter', methods=['POST'])
def subscribe_newsletter():
    data = request.get_json() or {}
    email = (data.get('email') or '').strip()

    if not email or not EMAIL_REGEX.match(email):
        return jsonify({"status": "error", "message": "Please provide a valid email address."}), 400

    success = insert_subscriber(email)
    if success:
        return jsonify({"status": "success", "message": "Thank you for subscribing to CrafZio Insights."}), 201
    else:
        return jsonify({"status": "info", "message": "You are already subscribed to CrafZio Insights."}), 200

@app.route('/api/admin/enquiries', methods=['GET'])
def list_enquiries():
    enquiries = get_all_enquiries()
    return jsonify({
        "status": "success",
        "count": len(enquiries),
        "data": enquiries
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
