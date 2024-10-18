from flask import Flask
from routes.face_recognition_routes import recognition_bp
import os

app = Flask(__name__)

# Create necessary directories if they don't exist
os.makedirs('./uploads', exist_ok=True)

# Register Blueprints (modularized routes)
app.register_blueprint(recognition_bp)

@app.route('/')
def index():
    return "Face Recognition Surveillance System API"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
