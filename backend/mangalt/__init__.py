from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.request import Request

def request_factory(environ):
    request = Request(environ)
    if request.is_xhr:
        request.response = Response()
        request.response.headerlist = []
        request.response.headerlist.extend(
            (
                ('Access-Control-Allow-Origin', '*'),
                ('Content-Type', 'application/json'),
                ('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS'),
                ('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization'),
                ('Access-Control-Allow-Credentials', 'true'),
                ('Access-Control-Max-Age', '1728000'),
            )
        )
    return request

def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.include('pyramid_chameleon')
    config.set_request_factory(request_factory)
    config.add_static_view(name='static', path='mangalt:static')
    config.add_route('home', '/')
    config.add_route('hello', '/howdy')
    config.scan('.views')
    return config.make_wsgi_app()
