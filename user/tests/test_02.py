from django.test import TestCase, Client
import json


class SignUpTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_signup_works(self):
        credentials = json.dumps(
            {
                "username": "johndoe",
                "password": "hello12345",
                "first_name": "john",
                "last_name": "doe",
                "email": "johndoe@email.com",
            }
        )
        response = self.client.post(
            "/user/signup/",
            credentials,
            "application/json"
        )
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertIn("username", content)
