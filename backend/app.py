from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import cv2
import base64
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/detect', methods=['POST'])
def detect_face():
    data = request.get_json()
    image_data = data['image']

    # Decode the image
    image_data = image_data.split(',')[1]  # Remove metadata
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))

    # Convert to numpy array for face detection
    open_cv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    # (Your existing face detection logic here)
    # For example, using a face detection model like Haar Cascades
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(open_cv_image, scaleFactor=1.1, minNeighbors=5)

    detected_faces = []
    
    # Iterate over detected faces
    for (x, y, w, h) in faces:
        # Crop the detected face (optional, if you want to send the cropped face image)
        face_image = open_cv_image[y:y+h, x:x+w]
        
        # Convert the cropped face image to base64
        _, buffer = cv2.imencode('.jpg', face_image)
        face_base64 = base64.b64encode(buffer).decode('utf-8')

        # Example of how to get the location (replace with your actual location detection logic)
        location = "Detected Location"  # Replace with actual logic to get the location

        detected_faces.append({
            'name': 'Person',  # Replace with your actual logic to identify the person
            'image': f"data:image/jpeg;base64,{face_base64}",
            'location': location
        })

    return jsonify({'faces': detected_faces})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
