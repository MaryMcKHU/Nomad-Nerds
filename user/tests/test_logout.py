# from django.test import TestCase, Client


# class LogoutTest(TestCase):

#     def setUp(self):
#         self.client = Client()

#     def test_login(self):
#         # Get login page
#         response = self.client.get('admin/')

#         # Check response code
#         self.assertEquals(response.status_code, 200)

#         # Check 'Log in' in response
#         self.assertTrue("Log in" in response.content)

#         # Log the user in
#         self.client.login(username="XXX", password="XXX")

#         # Check response code
#         response = self.client.get('admin/')
#         self.assertTrue('Log out' in response.content)

#     def test_logout(self):
#         # Log in
#         self.client.login(username='XXX', password="XXX")

#         # Check response code
#         response = self.client.get('/admin/')
#         self.assertEquals(response.status_code, 200)

#         # Check 'Log out' in response
#         self.assertTrue('Log out' in response.content)

#         # Log out
#         self.client.logout()

#         # Check response code
#         response = self.client.get('/admin/')
#         self.assertEquals(response.status_code, 200)

#         # Check 'Log in' in response
#         self.assertTrue('Log in' in response.content)
