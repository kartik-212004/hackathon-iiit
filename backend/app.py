from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Sample locations
locations = ["Garden", "Canteen", "Library", "Classroom", "Playground"]

# To store last seen location for detected persons
last_seen = {}

# Set to track detected persons during the current session
detected_persons = set()

# Initialize webcam
cap = cv2.VideoCapture(0)

@app.route('/detect', methods=['POST'])
def detect_faces():
    global detected_persons  # Ensure we maintain this set across multiple requests
    ret, frame = cap.read()
    if not ret:
        return jsonify({"error": "Failed to capture image"}), 500

    # Your existing face detection logic here
    # Example detected faces, replace with your actual detection logic
    detected_faces = [
        {"name": "Kartik", "location": locations[0]},
        {"name": "Shivansh", "location": locations[1]}
    ]
    
    # List to hold faces to be processed (newly detected faces only)
    new_faces = []

    # Check for duplicate entries
    for face in detected_faces:
        if face["name"] not in detected_persons:
            detected_persons.add(face["name"])  # Mark this person as detected
            new_faces.append(face)  # Add them to the list for further processing
            last_seen[face["name"]] = face["location"]  # Update last seen location

    # Save images and return response
    response_data = []
    for face in new_faces:
        # Save the image only for new faces
        image_path = save_face_image(face["name"], frame)  # Implement this function to save image
        response_data.append({
            "name": face["name"],
            "image": image_path,
            "last_seen": last_seen[face["name"]],
            "timestamp": datetime.now().isoformat()
        })

    return jsonify(response_data)

def save_face_image(name, frame):
    # Create a directory for images if it doesn't exist
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # Save the image with the person's name and timestamp
    image_path = f'images/{name}_{int(datetime.now().timestamp())}.jpg'
    cv2.imwrite(image_path, frame)
    return image_path

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
