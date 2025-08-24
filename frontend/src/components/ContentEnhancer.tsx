import React from 'react'
import { ConversionTask } from '@/types'
import { Users, Award } from 'lucide-react'

interface ContentEnhancerProps {
  task: ConversionTask
}

const ContentEnhancer: React.FC<ContentEnhancerProps> = ({ task }) => {
  const getToolBenefits = (taskId: string) => {
    const benefits: Record<string, string[]> = {
      'image-to-pdf': [
        'Combine multiple images into a single PDF document',
        'Preserve image quality with customizable compression settings',
        'Support for HEIC, WEBP, and other modern image formats',
        'Batch processing for multiple images at once',
      ],
      'word-to-pdf': [
        'Maintain document formatting and layout',
        'Preserve fonts, styles, and embedded objects',
        'Compatible with both DOC and DOCX formats',
        'Professional-quality PDF output',
      ],
      'pdf-to-word': [
        'Convert PDFs back to editable Word documents',
        'OCR support for scanned documents',
        'Preserve tables, images, and formatting',
        'Compatible with Microsoft Word and other editors',
      ],
      'merge-pdf': [
        'Combine multiple PDF files into one document',
        'Maintain bookmarks and metadata',
        'Preserve document quality and formatting',
        'Organize pages in custom order',
      ],
      'split-pdf': [
        'Extract specific pages or page ranges',
        'Create separate PDFs from large documents',
        'Maintain original document quality',
        'Batch processing for multiple splits',
      ],
      'compress-pdf': [
        'Reduce file size while maintaining quality',
        'Multiple compression levels available',
        'Optimize for web, email, or print',
        'Preserve document functionality',
      ],
      'pdf-to-excel': [
        'Extract tables and data from PDF documents',
        'Maintain cell formatting and structure',
        'Support for complex multi-page spreadsheets',
        'OCR support for scanned documents',
      ],
      'pdf-to-powerpoint': [
        'Convert PDF pages to editable slides',
        'Preserve images and layout structure',
        'Choose between image-based or text-based conversion',
        'Maintain slide aspect ratios',
      ],
      'pdf-to-text': [
        'Extract plain text from any PDF document',
        'OCR support for scanned or image-based PDFs',
        'Preserve or simplify text formatting',
        'Fast bulk text extraction',
      ],
    }

    return benefits[taskId] || []
  }

  const getUseCases = (taskId: string) => {
    const useCases: Record<string, string[]> = {
      'image-to-pdf': [
        'Create photo albums and portfolios',
        'Archive scanned documents',
        'Prepare presentations and reports',
        'Combine screenshots for documentation',
      ],
      'word-to-pdf': [
        'Share documents that maintain formatting',
        'Create professional reports and proposals',
        'Archive important documents',
        'Prepare documents for printing',
      ],
      'pdf-to-word': [
        'Edit existing PDF documents',
        'Extract content for reuse',
        'Collaborate on document revisions',
        'Convert forms for data entry',
      ],
      'merge-pdf': [
        'Combine contract documents',
        'Create comprehensive reports',
        'Merge invoices and receipts',
        'Consolidate research materials',
      ],
      'compress-pdf': [
        'Reduce file size for email attachments',
        'Optimize documents for web sharing',
        'Save storage space',
        'Improve document loading speed',
      ],
      'pdf-to-excel': [
        'Extract financial data from PDF reports',
        'Convert invoice tables to spreadsheets',
        'Analyze data from PDF research papers',
        'Process bank statements and receipts',
      ],
      'pdf-to-powerpoint': [
        'Convert PDF presentations for editing',
        'Repurpose PDF reports as slide decks',
        'Extract slides from PDF documents',
        'Create presentations from PDF content',
      ],
      'pdf-to-text': [
        'Extract quotes and citations from PDFs',
        'Convert PDF books to plain text',
        'Extract content for content management',
        'Process legal documents and contracts',
      ],
    }

    return useCases[taskId] || []
  }

  const benefits = getToolBenefits(task.id)
  const useCases = getUseCases(task.id)

  // Only render if there's specific content for this tool
  if (benefits.length === 0 && useCases.length === 0) {
    return null
  }

  return (
    <div className="mt-8 space-y-8">
      {/* Key Features Section - only if specific benefits exist */}
      {benefits.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-primary" />
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Use Cases Section - only if specific use cases exist */}
      {useCases.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-600" />
            Common Use Cases
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentEnhancer
