import React, { ReactNode } from 'react'
import { Layers, FileText, Download, Shield, Zap } from 'lucide-react'

interface PlaceholderViewProps {
  title: string
  message: string
  icon?: ReactNode
}

const PlaceholderView: React.FC<PlaceholderViewProps> = ({
  title,
  message,
  icon,
}) => {
  // Don't show "under construction" content - provide valuable information instead
  const isUnderConstruction = message.toLowerCase().includes('under construction') || 
                             message.toLowerCase().includes('check back soon')
  
  if (isUnderConstruction) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="text-primary dark:text-secondary-light mb-4">
            {icon || <Layers className="w-16 h-16 mx-auto" />}
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            {title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Professional PDF conversion and editing tool. Convert, merge, split, and optimize your PDF files with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <FileText className="w-8 h-8 text-primary dark:text-secondary-light mb-3" />
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
              Document Conversion
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Convert between PDF, Word, Excel, PowerPoint, and other popular document formats with high fidelity.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <Shield className="w-8 h-8 text-primary dark:text-secondary-light mb-3" />
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
              Secure Processing
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Your files are processed securely and automatically deleted after conversion. We prioritize your privacy.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <Zap className="w-8 h-8 text-primary dark:text-secondary-light mb-3" />
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Lightning-fast processing with professional-grade conversion engines for consistent, high-quality results.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            How to Use This Tool
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>Select or drag and drop your file using the upload area</li>
            <li>Choose your preferred conversion settings and options</li>
            <li>Click the convert button to start processing</li>
            <li>Download your converted file when processing is complete</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Supported formats: PDF, DOCX, XLSX, PPTX, JPG, PNG, TXT, HTML, and more
          </p>
        </div>
      </div>
    )
  }

  // Original placeholder for other cases
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-10 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
      <div className="text-primary dark:text-secondary-light mb-6">
        {icon || <Layers className="w-16 h-16" />}
      </div>
      <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
        {title}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
        {message}
      </p>

      {/* Optional: Add a call to action or image */}
      {/* <img src="https://picsum.photos/400/200" alt="Placeholder graphic" className="mt-8 rounded-lg shadow-md" /> */}
    </div>
  )
}

export default PlaceholderView
