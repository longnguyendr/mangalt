from pyramid.response import Response
from pyramid.view import view_config


class Mysite:
    def __init__(self,request):
        self.request = request
    @view_config(route_name='home', renderer="mangalt:templates/home.pt")
    def home(self):
        return {'name': 'Home View'}

    # /howdy
    @view_config(route_name='hello', request_method='POST', renderer='json')
    def hello(self):
        greeting = 'hello {}'.format(self.request.json_body.get('name'))
        return dict(greeting=greeting)
    
    @view_config(route_name='hello', request_method='OPTIONS')
    def foo(self):
        return dict()