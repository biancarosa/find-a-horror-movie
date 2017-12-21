# encoding: utf-8
"""Application.

Starts the Flask application
"""

import os
import json
import random

import requests
from flask import Flask, jsonify

api = Flask(__name__)
TMDB_URL = "https://api.themoviedb.org/3/discover/movie?api_key={}&with_genres=27&page={}"


@api.route('/', methods=['GET'])
def health_check():
    """Returns health information"""
    return jsonify({
        "message": "I'm alive and well, thank you very much for caring!"
    })


@api.route('/discover', methods=['GET'])
def discover():
    """Returns a random horror movie"""
    page = random.randint(1, 883)
    url = TMDB_URL.format(os.getenv('API_KEY'), page)
    result = requests.get(url)
    data = json.loads(result.text)
    rand = random.randint(0, len(data["results"])-1)
    movie = data["results"][rand]
    return jsonify({
        "data": [
            movie
        ]
    })