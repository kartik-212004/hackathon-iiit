# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install specific dependencies without cache to reduce image size
RUN pip install --no-cache-dir Flask==2.1.2 Flask-Cors==3.0.10 Pillow==9.0.0 numpy==1.21.6 Werkzeug==2.0.3

# Expose port 5000 to allow outside access
EXPOSE 5000

# Define environment variable to make Flask run on all network interfaces
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Start the Flask app
CMD ["flask", "run"]
