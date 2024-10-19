
# 🎥 Face Recognition Surveillance System 🕵️‍♂️

![Face Recognition](https://user-images.githubusercontent.com/your-image-link-here.jpg)

> **An AI-powered face recognition system for the Ujjain Police Department, designed for real-time surveillance and locating missing persons or items during the Simhastha Ujjain festival.**

![GitHub stars](https://img.shields.io/github/stars/kartik-212004/hackathon-iiit?style=social)
![GitHub forks](https://img.shields.io/github/forks/kartik-212004/hackathon-iiit?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/kartik-212004/hackathon-iiit)
![GitHub last commit](https://img.shields.io/github/last-commit/kartik-212004/hackathon-iiit)

## ✨ Key Features

- **Real-time face recognition** using advanced AI algorithms.
- **Surveillance and monitoring** for missing persons or items during mass gatherings.
- **Easy-to-use web interface** built with React and Tailwind CSS.
- **Robust backend API** using Flask and Python.
- **Scalable and deployable via Docker** for ease of setup.

## 🚀 Demo

🎬 Check out a live demo [here](https://your-live-demo-link.com) or watch a preview below:

![Demo](https://user-images.githubusercontent.com/your-demo-link.gif)

## 🛠️ Technologies Used

### Frontend:
- **React** ⚛️ for building the user interface
- **Tailwind CSS** 💨 for responsive and attractive styling
- **Axios** for API calls to the backend

### Backend:
- **Flask** 🐍 for building the API
- **face_recognition** library for facial detection and recognition
- **OpenCV** for handling image and video processing
- **Python** as the main backend language

### Database:
- **SQLite** or **MongoDB** (Depending on your setup) for storing known faces and data

### Deployment:
- **Docker** 🐳 for containerization and deployment

## 📁 Project Structure

```
face-recognition-system/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── models/
│   ├── routes/
│   └── requirements.txt
│
└── database/
    └── database-setup.sql (or MongoDB setup scripts)
```

## ⚡ Quick Start

1. **Clone the repository**:
   ```bash
   git clone git@github.com:kartik-212004/hackathon-iiit.git
   cd hackathon-iiit
   ```

2. **Backend Setup**:
   - Navigate to the backend folder and set up a virtual environment:
     ```bash
     cd backend
     python3 -m venv venv
     source venv/bin/activate  # On Linux/macOS
     .\venv\Scripts\activate  # On Windows
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder and install dependencies:
     ```bash
     cd frontend
     npm install
     ```

4. **Run the Application**:
   - Start the Flask backend server:
     ```bash
     cd backend
     python app.py
     ```
   - Start the React frontend development server:
     ```bash
     cd frontend
     npm start
     ```

## 🐳 Docker Setup (Optional)

You can also run the entire system using Docker for seamless deployment:

1. **Build and run the Docker containers**:
   ```bash
   docker-compose up --build
   ```

2. Visit `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## 📷 Screenshots

### User Interface

![UI](https://user-images.githubusercontent.com/your-frontend-ui-image.png)

### Face Recognition in Action

![Recognition](https://user-images.githubusercontent.com/your-recognition-image.png)

## 🧠 How It Works

1. **Face Registration**: Known persons’ images are uploaded and stored in the system for future recognition.
2. **Real-time Face Detection**: The system captures video feeds or images to detect faces.
3. **Comparison and Recognition**: The detected face is compared with known faces in the database. If a match is found, the system returns the person's identity.

## 📚 API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| POST   | `/recognize`        | Upload an image to recognize faces |
| GET    | `/known-faces`      | List all known registered faces |
| POST   | `/register-face`    | Register a new known face with an image |

## 🏗️ Future Improvements

- **Real-time video stream integration** for live surveillance.
- **Alert System**: Notify authorities when a person is identified.
- **Scalability**: Using Kubernetes for scaling during mass gatherings.

## 🤝 Contributions

Contributions are always welcome! Feel free to:
1. Fork the repo.
2. Create a feature branch.
3. Submit a pull request with a detailed description of the changes.

## 👨‍💻 Team-

- **THE OGs** - [GitHub Profile](https://github.com/kartik-212004)

## 📄 License

This project is licensed under the **MIT License**.

⭐ **If you like this project, don’t forget to star the repository!**

## 🙌 Acknowledgements

- Special thanks to the open-source community for amazing resources.
- Inspiration from real-world applications of AI in surveillance systems .
