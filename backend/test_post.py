import urllib.request
import json

payload = {
    "name": "Vikram Malhotra",
    "company": "CrafZio Enterprise Partner",
    "email": "vikram@example.com",
    "phone": "+91 9876543210",
    "service_type": "Web Application Development",
    "message": "We want to build a custom dispatch dashboard with live tracking."
}

req = urllib.request.Request(
    "http://127.0.0.1:5000/api/contact",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

with urllib.request.urlopen(req) as response:
    result = json.loads(response.read().decode("utf-8"))
    print("API Response:", result)
