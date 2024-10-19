FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir Flask==2.1.2 Flask-Cors==3.0.10 Pillow==9.0.0 numpy==1.21.6 Werkzeug==2.0.3

CMD ["python", "app.py"]
