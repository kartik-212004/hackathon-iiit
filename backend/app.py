from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import cv2
import base64
import io

app = Flask(__name__)
CORS(app)

@app.route('/api/detect', methods=['POST'])
def detect_face():
    data = request.get_json()
    image_data = data['image']

    image_data = image_data.split(',')[1]
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))

    open_cv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(open_cv_image, scaleFactor=1.1, minNeighbors=5)

    detected_faces = []
    
    for (x, y, w, h) in faces:
        face_image = open_cv_image[y:y+h, x:x+w]
        
        _, buffer = cv2.imencode('.jpg', face_image)
        face_base64 = base64.b64encode(buffer).decode('utf-8')

        location = "Detected Location"  

        detected_faces.append({
            'name': 'Person', 
            'image': f"data:image/jpeg;base64,{face_base64}",
            'location': location
        })

    return jsonify({'faces': detected_faces})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
