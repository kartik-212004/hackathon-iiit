from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import base64
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Define the path to save images
UPLOAD_FOLDER = os.path.join('static', 'images')  # Corrected variable name for clarity
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Dummy face detection function
def detect_faces(image):
    # Here you would implement your face detection logic
    # For demonstration, we'll return a mock response
    return [
        {'name': 'Kartik', 'image': f'static/images/kartik.jpg', 'location': 'Canteen'},
        {'name': 'Devashish', 'image': f'static/images/devashish.jpg', 'location': 'Auditorium'},
        {'name': 'Akshat', 'image': f'static/images/akshat.jpg', 'location': 'Library'},
        {'name': 'Shivansh', 'image': f'static/images/shivansh.jpg', 'location': 'Hallway'}
    ]

@app.route('/api/detect', methods=['POST'])
def detect():
    data = request.json
    image_data = data['image'].split(',')[1]  # Get the base64 part
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))
    
    # Convert to numpy array
    image_np = np.array(image)

    # Perform face detection
    faces = detect_faces(image_np)

    return jsonify({'faces': faces})

@app.route('/api/save', methods=['POST'])
def save_image():
    data = request.json
    name = data.get('name')
    image_data = data['image'].split(',')[1]  # Get the base64 part
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))

    # Save the image with the name provided in the UPLOAD_FOLDER
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], f"{name}.jpg")
    
    # Ensure the upload folder exists
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    image.save(image_path)

    return jsonify({'message': 'Image saved successfully', 'path': image_path})

@app.route('/api/search', methods=['POST'])
def search_person():
    data = request.json
    image_data = data['image'].split(',')[1]  # Get the base64 part
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))
    
    # Convert to numpy array
    image_np = np.array(image)

    # Perform face detection
    faces = detect_faces(image_np)
    
    if not faces:
        return jsonify({'error': 'Person not found'}), 404
    
    # Assuming we found at least one person
    return jsonify({'person': faces[0]})  # Return the first detected face for simplicity

if __name__ == '__main__':
    app.run(debug=True, port=5000)
