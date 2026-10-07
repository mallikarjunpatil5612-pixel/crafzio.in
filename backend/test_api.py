import unittest
import json
import os
import sqlite3
from app import app
import database

class CrafZioBackendTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_health(self):
        response = self.app.get('/api/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data.get('status'), 'healthy')

    def test_corporate_info(self):
        response = self.app.get('/api/corporate-info')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('data', data)
        self.assertEqual(data['data']['brand_name'], 'CrafZio')

    def test_services_list_and_detail(self):
        response = self.app.get('/api/services')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data['data']), 6)

        # Test single service detail
        response_detail = self.app.get('/api/services/website-development')
        self.assertEqual(response_detail.status_code, 200)
        detail_data = json.loads(response_detail.data)
        self.assertEqual(detail_data['data']['slug'], 'website-development')

    def test_solutions_list(self):
        response = self.app.get('/api/solutions')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data['data']), 5)

    def test_projects_list_and_filter(self):
        response = self.app.get('/api/projects')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertGreaterEqual(len(data['data']), 5)

        # Test filter
        filtered_res = self.app.get('/api/projects?category=Websites')
        self.assertEqual(filtered_res.status_code, 200)
        filtered_data = json.loads(filtered_res.data)
        self.assertTrue(all(p['category'] == 'Websites' for p in filtered_data['data']))

    def test_contact_enquiry_submission(self):
        payload = {
            "name": "Arjun Sharma",
            "company": "Apex Corp",
            "email": "arjun@example.com",
            "phone": "+91 9876543210",
            "service_type": "Web Application Development",
            "message": "We need a custom operations portal with inventory synchronization."
        }
        response = self.app.post('/api/contact', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 201)
        data = json.loads(response.data)
        self.assertEqual(data.get('status'), 'success')
        self.assertIn("Your project enquiry has been received", data.get('message'))

        # Check enquiry exists in admin endpoint
        admin_res = self.app.get('/api/admin/enquiries')
        self.assertEqual(admin_res.status_code, 200)
        admin_data = json.loads(admin_res.data)
        self.assertTrue(any(e['email'] == 'arjun@example.com' for e in admin_data['data']))

    def test_contact_validation_failure(self):
        bad_payload = {"name": "", "email": "not-an-email", "message": ""}
        response = self.app.post('/api/contact', data=json.dumps(bad_payload), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data.get('status'), 'error')
        self.assertIn('errors', data)

    def test_career_application_submission(self):
        payload = {
            "name": "Priya Patel",
            "email": "priya@example.com",
            "phone": "+91 9123456780",
            "role": "Frontend Engineer",
            "experience": "3 years",
            "portfolio_url": "https://github.com/priyapatel",
            "notes": "Experienced with React, CSS architecture, and building high-performance SPAs."
        }
        response = self.app.post('/api/careers/apply', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 201)
        data = json.loads(response.data)
        self.assertEqual(data.get('status'), 'success')

if __name__ == '__main__':
    unittest.main()
