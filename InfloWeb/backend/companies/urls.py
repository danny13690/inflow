# vercel-django-example/example/urls.py
# https://github.com/jayhale/vercel-django-example/blob/main/example/urls.py#L7

from django.urls import path
from companies.views import index

urlpatterns = [
    path('', index),
]