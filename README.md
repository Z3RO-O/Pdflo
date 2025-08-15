# 📄 Pdflo Toolkit

_The Ultimate PDF Conversion & Management Suite_

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://python.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

🚀 **Transform any file format to PDF and vice versa!** Convert documents, spreadsheets, presentations, images, and more with our comprehensive PDF toolkit featuring 27+ conversion tools and advanced PDF editing capabilities.

## 🌟 Key Features

<details>
<summary>📋 <strong>File Conversions</strong></summary>

### 📝 Document Conversions

- **Word to PDF** - Turn your .doc or .docx files into PDFs
- **Excel to PDF** - Turn your .xls or .xlsx files into PDFs
- **PowerPoint to PDF** - Turn your .ppt or .pptx files into PDFs
- **Text to PDF** - Turn your .txt files into PDFs

### 🔄 PDF to Document

- **PDF to Word** - Convert PDFs back to editable Word documents
- **PDF to Excel** - Extract tables from PDFs to Excel spreadsheets
- **PDF to PowerPoint** - Convert PDFs to PowerPoint presentations
- **PDF to RTF** - Convert PDFs to Rich Text Format with images and formatting
- **PDF to EPUB** - Convert PDFs to EPUB e-books with advanced options
- **PDF to HTML** - Convert PDFs to web pages with styling
- **PDF to Text** - Extract plain text from PDFs with OCR support

### 🖼️ Image Conversions

- **Image to PDF** - Turn your pictures (JPG, PNG, GIF, HEIC, WEBP) into PDFs
- **PDF to Image** - Convert PDF pages to JPG, PNG, WEBP images
- **SVG to PDF** - Convert vector graphics to PDF format
- **PDF to SVG** - Convert PDFs to vector graphics

</details>

<details>
<summary>🛠️ <strong>PDF Management Tools</strong></summary>

### 📄 File Operations

- **🔗 Merge PDF** - Combine multiple PDF files into one document
- **✂️ Split PDF** - Extract specific pages or page ranges from PDFs
- **🎯 Organize Pages** - Reorder, rotate, and delete pages with visual page manager

### 🔒 Security & Optimization

- **🔒 Protect PDF** - Add password encryption to secure your PDFs
- **🗜️ Compress PDF** - Reduce file size while maintaining quality
- **💧 Add Watermark** - Add text or image watermarks to PDF pages

### ✏️ Editing Features

- **✏️ Edit Metadata** - Change title, author, subject, and keywords
- **🔍 OCR PDF** - Make scanned PDFs searchable and selectable with text recognition

</details>

## �️ Architecture

**Pdflo Toolkit** uses a modern 2-tier architecture with a unified FastAPI backend:

### Frontend

- **Framework**: Next.js 15 with React 18
- **Styling**: Tailwind CSS + Material-UI components
- **Port**: 3000 (development), 5173 (production)

### Backend

- **Framework**: FastAPI (Python 3.12+)
- **Database**: SQLAlchemy with Alembic migrations
- **PDF Processing**: PyPDF2, pdfplumber, pdf2docx, Pillow, PyMuPDF
- **Port**: 8000
- **API Documentation**: Available at `/docs` endpoint

### Key Features

- ✅ **Unified Backend**: Single FastAPI service handling all PDF operations
- ✅ **Background Processing**: Async task processing for large files
- ✅ **Auto Documentation**: OpenAPI/Swagger documentation
- ✅ **File Management**: Automatic cleanup and storage management
- ✅ **Database Tracking**: Conversion job status and history

## �🌐 **Live Demo**

**[Visit Pdflo Toolkit](https://pdflo.app/)** - Try all 27+ PDF tools online!

## 🏷️ **Supported Technologies**

- pdf-converter
- html-to-pdf
- pdf-generation
- pdf-to-excel
- pdf-to-image
- pdf-to-ppt
- word-to-pdf
- pdf-to-word
- svg-to-pdf
- excel-to-pdf
- rtf-to-pdf
- image-to-pdf
- docx-to-pdf
- doc-to-pdf
- xlsx-to-pdf
- pdf-to-docx
- epub-to-pdf
- xls-to-pdf
- pdf-to-doc
- pdf-to-xlsx
- merge-pdf
- split-pdf
- ocr-pdf
- compress-pdf
- protect-pdf
- watermark-pdf
- edit-metadata-pdf
- organize-pdf

<details>
<summary>🚀 <strong>Quick Start Guide</strong></summary>

### 🎮 How to Use the App

1. **Open the app** in your web browser
2. **Choose what you want to convert** (Word, Excel, Image, or PDF conversions)
3. **Click "Choose File"** and select your file
4. **Select conversion options** (for PDF to PowerPoint, choose image or text method)
5. **Download your converted file** when processing is complete

### 🖥️ Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/pdflo-toolkit.git
cd pdflo-toolkit

# Install frontend dependencies
cd frontend
pnpm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt

# Start the backend (FastAPI on port 8000)
cd src
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# In a new terminal, start the frontend (Next.js on port 3000)
cd frontend
pnpm run dev
```

**Access the application:**

- Frontend: <http://localhost:3000>
- Backend API: <http://localhost:8000>
- API Documentation: <http://localhost:8000/docs>

</details>

<details>
<summary>⚙️ <strong>Installation & Setup</strong></summary>

### 🍎 macOS Setup

#### Step 1: Install LibreOffice

```bash
# Using Homebrew
brew install --cask libreoffice
```

#### Step 2: Install Python Dependencies

```bash
# Install system tools
brew install poppler

# Install Python packages
pip install pdf2image python-pptx Pillow pdfplumber pandas openpyxl pdf2docx fpdf2
```

#### Step 3: Install Ghostscript (for PDF compression)

```bash
brew install ghostscript
```

### 🪟 Windows Setup

#### Step 1: Install LibreOffice

1. Go to [LibreOffice.org](https://www.libreoffice.org/download/download/)
2. Download and install the latest version
3. Note the installation path (usually `C:\Program Files\LibreOffice\`)

#### Step 2: Install Python Dependencies

```cmd
# Install Python from python.org first
pip install pdf2image python-pptx Pillow pdfplumber pandas openpyxl pdf2docx fpdf2 PyPDF2
```

#### Step 3: Install Ghostscript

```cmd
# Using Chocolatey
choco install ghostscript

# Or download manually from ghostscript.com
```

### 🐧 Linux/Ubuntu Setup

#### System Dependencies

```bash
# Update system
sudo apt update

# Install LibreOffice
sudo apt install libreoffice libreoffice-writer libreoffice-calc

# Install Python and pip
sudo apt install python3 python3-pip python3-venv

# Install additional tools
sudo apt install poppler-utils ghostscript tesseract-ocr

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Python Virtual Environment

```bash
# Create virtual environment
python3 -m venv pdf_converter_env
source pdf_converter_env/bin/activate

# Install Python packages
pip install pdf2image python-pptx Pillow pdfplumber pandas openpyxl pdf2docx fpdf2 PyPDF2 opencv-python numpy
```

### 🐳 Docker Setup

```dockerfile
# For Ubuntu/Debian based images
RUN apt-get update && apt-get install -y \
    libreoffice \
    ghostscript \
    poppler-utils \
    tesseract-ocr \
    python3 \
    python3-pip

# For Alpine based images
RUN apk add \
    libreoffice \
    ghostscript \
    poppler-utils \
    tesseract-ocr \
    python3 \
    py3-pip
```

</details>

<details>
<summary>🚀 <strong>Deployment Guide</strong></summary>

### 🌐 Coolify Deployment

#### Port Configuration

- **Frontend**: Port 5173
- **Backend**: Port 8000

#### Prerequisites

- Coolify server with Docker support
- Git repository access
- At least 2GB RAM available

#### Deployment Steps

1. **Repository Setup**
   - Push your code to a Git repository
   - Ensure `docker-compose.yaml` is present

2. **Coolify Configuration**
   - Create New Application in Coolify
   - Source: Select your Git repository
   - Build Pack: Choose "Docker Compose"
   - Docker Compose File: `docker-compose.yaml`

3. **Environment Variables**

   ```env
   NODE_ENV=production
   VITE_API_URL=http://backend:8000
   PORT=8000
   ```

4. **Resource Allocation**
   - Frontend: 512MB RAM, 0.5 CPU
   - Backend: 1GB RAM, 1 CPU
   - Storage: 2GB for file uploads

#### Accessing the Application

- Frontend: `http://your-domain:5173`
- Backend API: `http://your-domain:8000`

### 🔧 Maintenance

#### File Cleanup

```bash
# Manual cleanup
curl -X POST http://localhost:8000/cleanup
```

#### Automatic Cleanup

The application automatically cleans up temporary files every 15 minutes.

#### Security Notes

- The application runs in production mode
- CORS is enabled for frontend-backend communication
- File uploads are limited and cleaned up automatically
- No sensitive data is stored permanently

</details>

<details>
<summary>🔧 <strong>Development & Configuration</strong></summary>

### 📝 Python Setup for PDF to Word Conversion

#### Virtual Environment

```bash
cd server
source pdf_converter_env/bin/activate
```

#### Required Libraries

```bash
pip install pdf2docx fpdf2 python-docx
# or
pip install -r requirements.txt
```

#### Verify Installation

```bash
python -c "import pdf2docx; print('pdf2docx is installed successfully')"
```

### 🛠️ Package Management

#### Install Additional Libraries

```bash
cd server && source pdf_converter_env/bin/activate && pip install pypdf2==3.0.1 ebooklib==0.18.1
```

#### Run on Custom Port

```bash
npm run dev -- --port 5174
```

### 📊 Google AdSense Configuration

#### AdSense Settings

- **Ad Client**: `ca-pub-2305974348753248`
- **Ad Slot**: `6480016001`

#### Files to Update

- `components/AdSense.tsx` - Update `data-ad-client`
- `components/views/BaseConversionView.tsx` - Update `adSlot`
- `components/views/HtmlToPdfView.tsx` - Update `adSlot`
- `components/views/ImageToPdfView.tsx` - Update `adSlot`
- `components/views/PdfToExcelView.tsx` - Update `adSlot`
- `components/views/PdfToImageView.tsx` - Update `adSlot`
- `components/views/PdfToWordView.tsx` - Update `adSlot`
- `index.html` - Update client ID

### 🔍 OCR Feature Setup

#### Install OCR Dependencies

```bash
pip install --upgrade setuptools wheel
pip install opencv-python numpy
```

#### Tesseract Installation

```bash
# Ubuntu/Debian
sudo apt install tesseract-ocr

# macOS
brew install tesseract

# Windows
# Download from GitHub tesseract-ocr releases
```

</details>

<details>
<summary>🐛 <strong>Troubleshooting</strong></summary>

### 🔧 Common Issues

#### PDF to PowerPoint Conversion

**"poppler not found" Error:**

```bash
# macOS
brew install poppler

# Ubuntu/Debian
sudo apt install poppler-utils

# CentOS/RHEL
sudo yum install poppler-utils
```

**"pdf2image import error" (Windows):**

- Use text-based conversion instead
- Or install poppler binaries manually

**"python-pptx not found":**

```bash
pip install python-pptx
```

**"PIL/Pillow not found":**

```bash
pip install Pillow
```

#### Network Issues

If you encounter network connectivity issues during installation:

1. Try using a different network connection
2. Use a VPN if available
3. Try installing with trusted hosts:

   ```bash
   pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org pdf2docx
   ```

#### Alternative Installation Methods

1. **Using conda:**

   ```bash
   conda install -c conda-forge pdf2docx
   ```

2. **Manual installation from source:**

   ```bash
   git clone https://github.com/dothinking/pdf2docx.git
   cd pdf2docx
   python setup.py install
   ```

### 📋 Features & Limitations

#### What Works Great

- ✅ Preserves text formatting
- ✅ Maintains tables and their structure
- ✅ Keeps images and their positioning
- ✅ Supports complex layouts
- ✅ Handles multiple pages
- ✅ OCR support for scanned documents

#### Known Limitations

- Complex vector graphics may not convert perfectly
- Some advanced PDF features might be simplified
- Very large files may take longer to process

#### Conversion Methods

1. **Image-based Conversion**:
   - Converts PDF pages to high-quality images
   - Requires `pdf2image` and `poppler`

2. **Text-based Conversion**:
   - Extracts text from PDF pages
   - Works without `poppler`

</details>

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [pdf2docx documentation](https://github.com/dothinking/pdf2docx)
3. Ensure you have sufficient disk space
4. Verify Python version compatibility
5. Check system permissions for file operations

---

<div align="center">
<strong>Made with ❤️ by the Pdflo Team</strong>
<br>
<a href="#-pdflo-toolkit">🔝 Back to Top</a>
</div>
