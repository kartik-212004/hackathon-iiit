from flask import Flask, jsonify

app = Flask(__name__)

# Dummy data for the four individuals
surveillance_feed = [
    {'name': 'Kartik', 'image_url': '/static/images/kartik.jpg'},
    {'name': 'Shivansh', 'image_url': '/static/images/shivansh.jpg'},
    {'name': 'Akshat', 'image_url': '/static/images/akshat.jpg'},
    {'name': 'Devashish', 'image_url': '/static/images/devashish.jpg'}
]

@app.route('/api/surveillance', methods=['GET'])
def get_surveillance_feed():
    return jsonify({'images': surveillance_feed})

if __name__ == '__main__':
    app.run(debug=True)
