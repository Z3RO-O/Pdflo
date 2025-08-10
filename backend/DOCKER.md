# Pdflo Backend Docker Setup

This document explains how to build and run the Pdflo backend using Docker.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the service
docker-compose up --build

# Or run in detached mode
docker-compose up --build -d

# To stop the service
docker-compose down
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t pdflo-backend .

# Run the container
docker run -p 5001:5001 pdflo-backend

# Or run in detached mode with restart policy
docker run -d --name pdflo-backend --restart unless-stopped -p 5001:5001 pdflo-backend
```

## Environment Variables

The following environment variables can be configured:

- `PORT`: Server port (default: 5001)
- `NODE_ENV`: Environment mode (development/production)
- `CORS_ORIGIN`: Allowed CORS origins

## Volumes (Optional)

If you want to persist uploaded files between container restarts, uncomment the volume mounts in `docker-compose.yml`:

```yaml
volumes:
  - ./uploads:/app/uploads
  - ./temp:/app/temp
  - ./temp_pdf:/app/temp_pdf
```

## Health Check

The container includes a health check that verifies the server is responding:

- Endpoint: `http://localhost:5001/health`
- Interval: 30 seconds
- Timeout: 10 seconds

## Troubleshooting

### Container won't start

1. Check if port 5001 is already in use: `lsof -i :5001`
2. Check container logs: `docker logs pdflo-backend`

### Conversion failures

1. Ensure all system dependencies are installed (included in Dockerfile)
2. Check Python library installation in container logs
3. Verify LibreOffice and Calibre are working: `docker exec -it pdflo-backend which libreoffice`

### Performance optimization

1. The container uses multi-stage builds for smaller image size
2. Python libraries are cached to speed up rebuilds
3. Node modules are installed before copying source code

## Supported Conversions

The Docker container supports all conversion features:

- **To PDF**: Word, Excel, PowerPoint, Text, HTML, EPUB, RTF, Vector (SVG)
- **From PDF**: Word, Excel, PowerPoint, Text, HTML, EPUB, RTF, SVG, Images
- **PDF Operations**: Merge, Split, Compress, OCR, Organize, Password Protection, Watermark, Metadata editing

## Resource Requirements

- **RAM**: Minimum 2GB, recommended 4GB for large file conversions
- **CPU**: 2+ cores recommended
- **Storage**: 1GB+ free space for temporary files

## Security Notes

- The container runs as non-root user (`node`)
- Temporary files are automatically cleaned up
- No sensitive data is persisted by default
