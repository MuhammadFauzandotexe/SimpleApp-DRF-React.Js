from django.test import SimpleTestCase
from django.urls import reverse, resolve
from backend.views import users_list

class TestUrls(SimpleTestCase):
    def test_list_url_is_resolved(self):
        url = reverse('user_list')
        self.assertEqual(resolve(url).func, users_list)
