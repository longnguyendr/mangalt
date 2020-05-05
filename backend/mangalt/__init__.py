from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.request import Request

def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.include('pyramid_chameleon')
    config.include('.libs.cors')
    config.add_cors_preflight_handler()
    config.add_static_view(name='static', path='mangalt:static')
    config.add_route('home', '/')
    config.add_route('hello', '/howdy')
    config.scan('.views')
    return config.make_wsgi_app()
