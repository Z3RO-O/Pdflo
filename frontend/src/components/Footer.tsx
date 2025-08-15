import React from 'react'
import { Zap, Shield, Globe, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
      <div className="mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                Pdflo
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Professional PDF conversion and editing tools. Free, secure, and easy to use.
            </p>
            <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>Free</span>
              </div>
            </div>
          </div>

          {/* PDF Conversion Tools */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Popular Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/image-to-pdf" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Image to PDF
                </a>
              </li>
              <li>
                <a href="/pdf-to-word" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  PDF to Word
                </a>
              </li>
              <li>
                <a href="/merge-pdf" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Merge PDF
                </a>
              </li>
              <li>
                <a href="/compress-pdf" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Compress PDF
                </a>
              </li>
              <li>
                <a href="/split-pdf" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Split PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Document Formats */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Supported Formats
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-neutral-600 dark:text-neutral-400">
                  PDF, Word (DOCX, DOC)
                </span>
              </li>
              <li>
                <span className="text-neutral-600 dark:text-neutral-400">
                  Excel (XLSX, XLS)
                </span>
              </li>
              <li>
                <span className="text-neutral-600 dark:text-neutral-400">
                  PowerPoint (PPTX, PPT)
                </span>
              </li>
              <li>
                <span className="text-neutral-600 dark:text-neutral-400">
                  Images (JPG, PNG, WEBP)
                </span>
              </li>
              <li>
                <span className="text-neutral-600 dark:text-neutral-400">
                  Text, HTML, RTF, EPUB
                </span>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-secondary-light transition-colors">
                  Help & FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} Pdflo. All rights reserved. Free PDF tools for everyone.
            </div>
            <div className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for PDF productivity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer