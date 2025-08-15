import React from 'react'
import { ConversionTask } from '@/types'
import { Shield, Zap, Users, Award, Globe } from 'lucide-react'

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
    }

    return (
      benefits[taskId] || [
        'Professional-grade conversion quality',
        'Fast and secure processing',
        'No registration or software installation required',
        'Compatible with all major file formats',
      ]
    )
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
    }

    return (
      useCases[taskId] || [
        'Business document processing',
        'Academic research and papers',
        'Personal document management',
        'Professional presentations',
      ]
    )
  }

  return (
    <div className="mt-8 space-y-8">
      {/* Key Features Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-primary" />
          Key Features
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {getToolBenefits(task.id).map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-green-600" />
          Common Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {getUseCases(task.id).map((useCase, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Tool Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Secure & Private
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Your files are processed securely and automatically deleted after
            conversion. We never store or share your documents.
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Fast Processing
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Lightning-fast conversion powered by professional-grade engines.
            Most files process in seconds.
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Works Everywhere
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            No software installation required. Works on any device with a web
            browser - Windows, Mac, Linux, mobile.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              Is this tool completely free?
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Yes, all our PDF tools are completely free to use with no hidden
              fees or registration requirements.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              What file size limits apply?
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              We support files up to 100MB in size. For larger files, consider
              compressing them first or splitting them into smaller parts.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              How long are files stored on your servers?
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Files are automatically deleted within 1 hour of processing for
              your privacy and security. We never permanently store your
              documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentEnhancer
