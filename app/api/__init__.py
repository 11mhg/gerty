from flask import Flask, request, session, make_response, Response
from uuid import uuid4
from pprint import pprint

def init_api(app: Flask) -> None:
    
    @app.route('/api/status')
    def status():
        return 'working!'
    
    @app.route('/api/')
    def index() -> str:
        #pprint(request.cookies)
        return session.get('key', 'not-set')
    
    @app.route('/api/login')
    def login() -> str:
        #response: Response = make_response('Logged in.')
        #response.set_cookie('session_id', str(uuid4()))
        session['key'] = str(uuid4())
        return 'ok'

    def infer() -> str:

    

    return 
