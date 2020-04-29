from pyramid.response import Response
from pyramid.view import view_config

@view_config(route_name='home')
def home(request):
    return Response('<body><h1>This is home</h1> Visit <a href="/howdy">hello</a></body>')

# /howdy
@view_config(route_name='hello')
def hello(request):
     return Response('<body><h1>This is hello</h1> return <a href="/">Home</a></body>')
