from django.shortcuts import render

# vercel-django-example/example/views.py
# https://github.com/jayhale/vercel-django-example/blob/main/example/views.py#L6

from datetime import datetime
from django.http import HttpResponse

def index(request):
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
            <p>The current time is { now }.</p>
        </body>
    </html>
    '''
    return HttpResponse(html)