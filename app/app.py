import os, glob
from .api import init_api
from flask import Flask
from flask_session import Session


def init_configuration(app: Flask) -> None:
    app.config.from_pyfile(
        'config.py',
        silent=False 
    )


def create_app() -> Flask:
    app: Flask = Flask('gerty-rest', instance_relative_config=True)

    init_configuration(app)
    
    os.makedirs(app.config['SESSION_FILE_DIR'], exist_ok=True)
    if os.path.exists(app.config['SESSION_FILE_DIR']) and not app.config['SESSION_RESTART_PERSIST']:
        for file in glob.glob(os.path.join(app.config['SESSION_FILE_DIR'], '*')):
            os.remove(file)

    Session(app)

    init_api(app)

    return app


