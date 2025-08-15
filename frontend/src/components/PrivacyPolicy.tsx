import React from 'react'
import { Shield, Lock, Trash2, Eye } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="lg:mx-48 mx-4 p-6">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Privacy Policy
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Last updated: July 31, 2025
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800 dark:text-green-200">
                Secure Processing
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                All files encrypted during processing
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Trash2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                Auto-Delete
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Files deleted within 1 hour
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">
                No Tracking
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                We don't track your documents
              </p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-2">
                  Files You Upload
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  When you use our PDF conversion tools, we temporarily process
                  your files on our servers. These files are automatically
                  deleted within 1 hour of processing and are never permanently
                  stored.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-2">
                  Technical Information
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We may collect basic technical information such as your IP
                  address, browser type, and operating system for security and
                  performance optimization purposes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>To process and convert your files as requested</li>
              <li>To improve our service performance and reliability</li>
              <li>To prevent abuse and ensure security</li>
              <li>To provide customer support when needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Data Security
            </h2>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    All file uploads and downloads are encrypted using HTTPS
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Files are processed in isolated, secure environments
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Automatic file deletion prevents unauthorized access
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No permanent storage of user documents</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Third-Party Services
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We use Google AdSense to display advertisements. Google may
              collect information about your visits to our site. You can opt out
              of personalized advertising by visiting Google's Ad Settings page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Since we don't permanently store your files or personal
              information, there's no data to delete or modify. If you have
              concerns about your privacy, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@pdflo.app
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
