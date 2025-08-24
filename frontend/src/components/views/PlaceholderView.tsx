import React, { ReactNode } from 'react'
import { Layers} from 'lucide-react'

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
  const isUnderConstruction =
    message.toLowerCase().includes('under construction') ||
    message.toLowerCase().includes('check back soon')

  if (isUnderConstruction) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg text-center">
        <div className="text-primary dark:text-secondary-light mb-4">
          {icon || <Layers className="w-16 h-16 mx-auto" />}
        </div>
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          {title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          This tool is currently being developed. Please check back soon.
        </p>
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
