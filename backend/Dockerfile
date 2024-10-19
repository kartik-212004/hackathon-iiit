FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the necessary packages
RUN pip install --no-cache-dir \
    Flask==2.0.3 \
    Flask-Cors==3.0.10 \
    Pillow==9.0.0 \
    numpy==1.21.6 \
    opencv-python-headless \
    Werkzeug==2.0.2  # Specify Werkzeug version

# Install necessary system packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgl1-mesa-glx \
    libglib2.0-0 && \
    rm -rf /var/lib/apt/lists/*

# Command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
