from flask import Flask, jsonify
import requests
from collections import deque
import time
from flask_cors import CORS

app = Flask(_name_)
CORS(app)  

WINDOW_SIZE = 10
TIMEOUT = 0.5  
numbers_deque = deque(maxlen=WINDOW_SIZE)

THIRD_PARTY_API = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo',
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
}

def fetch_numbers(url):
    try:
        response = requests.get(url, timeout=TIMEOUT)
        response.raise_for_status()
        return response.json().get('numbers', [])
    except requests.RequestException:
        return []

def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

@app.route('/numbers/<numberid>', methods=['GET'])
def get_numbers(numberid):
    if numberid not in THIRD_PARTY_API:
        return jsonify({"error": "Invalid number ID"}), 400

    
    new_numbers = fetch_numbers(THIRD_PARTY_API[numberid])


    window_prev_state = list(numbers_deque)

    for num in new_numbers:
        if num not in numbers_deque:
            numbers_deque.append(num)
            if len(numbers_deque) >= WINDOW_SIZE:
                break

    window_curr_state = list(numbers_deque)

    avg = calculate_average(window_curr_state)

    return jsonify({
        "windowPrevState": window_prev_state,
        "windowCurrState": window_curr_state,
        "numbers": new_numbers,
        "avg": round(avg, 2)
    })

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=9876)