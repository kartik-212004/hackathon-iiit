FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir \
    Flask==2.0.3 \
    Flask-Cors==3.0.10 \
    Pillow==9.0.0 \
    numpy==1.21.6 \
    opencv-python-headless \
    Werkzeug==2.0.2  # Specify Werkzeug version

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgl1-mesa-glx \
    libglib2.0-0 && \
    rm -rf /var/lib/apt/lists/*

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
