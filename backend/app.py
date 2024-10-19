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
IMAGE_FOLDER = 'static/images'
os.makedirs(IMAGE_FOLDER, exist_ok=True)

# Dummy face detection function
def detect_faces(image):
    # Here you would implement your face detection logic
    # For demonstration, we'll return a mock response
    return [{'name': 'Kartik', 'image': f'{IMAGE_FOLDER}/kartik.jpg', 'location': 'Canteen'},
            {'name': 'Devashish', 'image': f'{IMAGE_FOLDER}/devashish.jpg', 'location': 'Auditorium'},
            {'name': 'Akshat', 'image': f'{IMAGE_FOLDER}/akshat.jpg', 'location': 'Library'},
            {'name': 'Shivansh', 'image': f'{IMAGE_FOLDER}/shivansh.jpg', 'location': 'Hallway'}]

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

    # Save the image with the name provided
    image_path = os.path.join(IMAGE_FOLDER, f"{name}.jpg")
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
