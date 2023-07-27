import os

SECRET_KEY="88dc510fd00d9a0419c6ddbd"
DEBUG=False
KB_DB= os.path.abspath(os.path.join( os.path.dirname( __file__ ), '..', 'test-db' ))
CONTEXT_LENGTH=2048


SESSION_TYPE='filesystem'
SESSION_FILE_DIR = os.path.abspath(os.path.join( os.path.dirname(__file__), '..', 'flask_session' ))
SESSION_RESTART_PERSIST=False
