# Use Ubuntu as the base image to support all required dependencies
FROM ubuntu:22.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=18
ENV PYTHONUNBUFFERED=1
ENV PORT=5001

# Install system dependencies
RUN apt-get update && apt-get install -y \
    # Node.js dependencies
    curl \
    gnupg \
    # Python and development tools
    python3 \
    python3-pip \
    python3-dev \
    python3-venv \
    # LibreOffice for document conversion
    libreoffice \
    # Calibre for EPUB conversion
    calibre \
    # Image processing dependencies
    poppler-utils \
    # OCR dependencies
    tesseract-ocr \
    tesseract-ocr-eng \
    # Additional image libraries
    libmagickwand-dev \
    imagemagick \
    # System utilities
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
    && apt-get install -y nodejs

# Create node user and group
RUN groupadd --gid 1000 node \
    && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy Python requirements
COPY requirements.txt ./

# Install Python dependencies
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Create necessary directories
RUN mkdir -p uploads temp temp_pdf

# Set proper permissions
RUN chown -R node:node /app
USER node

# Expose the port
EXPOSE ${PORT}

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:${PORT}/health || exit 1

# Start the application
CMD ["npm", "start"]
