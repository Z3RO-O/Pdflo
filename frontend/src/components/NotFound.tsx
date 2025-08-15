import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Search, FileText } from 'lucide-react'
import { ConversionType } from '@/constants'
import Button from '@/components/Button'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  const popularTools = [
    {
      id: ConversionType.IMAGE_TO_PDF,
      name: 'Image to PDF',
      description: 'Convert images to PDF',
    },
    {
      id: ConversionType.PDF_TO_WORD,
      name: 'PDF to Word',
      description: 'Convert PDF to editable Word',
    },
    {
      id: ConversionType.MERGE_PDF,
      name: 'Merge PDF',
      description: 'Combine multiple PDFs',
    },
    {
      id: ConversionType.COMPRESS_PDF,
      name: 'Compress PDF',
      description: 'Reduce PDF file size',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary dark:text-secondary-light mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            The PDF tool you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => navigate(`/${ConversionType.IMAGE_TO_PDF}`)}
            leftIcon={<Home className="w-4 h-4" />}
            size="lg"
          >
            Go to Homepage
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
          >
            Go Back
          </Button>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center justify-center">
            <Search className="w-5 h-5 mr-2" />
            Popular PDF Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => navigate(`/${tool.id}`)}
                className="p-4 text-left bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-primary dark:text-secondary-light mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          <p>
            Need help? All our PDF tools are free and require no registration.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
