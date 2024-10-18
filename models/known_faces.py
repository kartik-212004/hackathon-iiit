import face_recognition
import os

# Load known faces from the static directory
def load_known_faces(known_faces_dir="./static/"):
    known_face_encodings = []
    known_face_names = []

    # Iterate through each image in the static directory
    for filename in os.listdir(known_faces_dir):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            filepath = os.path.join(known_faces_dir, filename)
            # Load the image
            image = face_recognition.load_image_file(filepath)
            # Get face encoding (assuming one face per image)
            face_encoding = face_recognition.face_encodings(image)[0]
            known_face_encodings.append(face_encoding)
            # Extract the name from the filename (e.g., 'john_doe.jpg' -> 'John Doe')
            known_face_names.append(os.path.splitext(filename)[0].replace('_', ' ').title())

    return known_face_encodings, known_face_names
