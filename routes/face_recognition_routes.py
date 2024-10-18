import os
import face_recognition
from flask import Blueprint, request, jsonify
from models.known_faces import load_known_faces
from werkzeug.utils import secure_filename
from PIL import Image

recognition_bp = Blueprint('recognition', __name__)

# Load known faces when the server starts
known_face_encodings, known_face_names = load_known_faces()

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# Function to check if file is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Endpoint to upload an image for recognition
@recognition_bp.route('/recognize', methods=['POST'])
def recognize_face():
    # Check if an image is included in the request
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({"error": "No image selected"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join('./uploads', filename)
        file.save(filepath)

        # Load the uploaded image
        uploaded_image = face_recognition.load_image_file(filepath)

        # Find face encodings in the uploaded image
        uploaded_face_encodings = face_recognition.face_encodings(uploaded_image)

        if len(uploaded_face_encodings) == 0:
            return jsonify({"error": "No faces found in the image"}), 400

        # Compare uploaded face(s) to known faces
        results = face_recognition.compare_faces(known_face_encodings, uploaded_face_encodings[0])

        if True in results:
            # Get the index of the matched face
            matched_index = results.index(True)
            matched_name = known_face_names[matched_index]
            return jsonify({"message": "Face recognized", "name": matched_name}), 200
        else:
            return jsonify({"message": "No match found"}), 200

    return jsonify({"error": "Invalid file format"}), 400
