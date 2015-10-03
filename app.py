from flask import Flask, render_template, request, make_response, send_from_directory
from flask.json import jsonify
import requests

from utils.cache import cached

from config import HOMEGATE_AUTH_KEY

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api')
@cached()
def api():
    """
    Basic API proxy handler
    """
    headers = {
        'auth': HOMEGATE_AUTH_KEY
    }
    url = 'https://api-2445581357976.apicast.io:443/rs/real-estates?language=en&chooseType=purchfaofh&sort=p&numberResults=50';
    return jsonify(**requests.get(url, headers=headers).json())

@app.route('/base/<path:filename>')
def base_static(filename):
    return send_from_directory(app.root_path + 'www', filename)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
