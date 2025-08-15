import React, { useEffect } from 'react'
import { ConversionTask } from '@/types'

interface SEOHeadProps {
  task?: ConversionTask | null
}

const SEOHead: React.FC<SEOHeadProps> = ({ task }) => {
  useEffect(() => {
    if (task) {
      // Update page title
      const title = `${task.name} - Free Online PDF Tool | Pdflo`
      document.title = title

      // Update meta description
      const description = `${task.description} Free, secure, and fast PDF conversion tool. No registration required.`

      // Update meta tags
      updateMetaTag('description', description)
      updateMetaTag('keywords', generateKeywords(task))

      // Update Open Graph tags
      updateMetaTag('og:title', title, 'property')
      updateMetaTag('og:description', description, 'property')
      updateMetaTag('og:url', `https://pdflo.app/${task.id}`, 'property')

      // Update Twitter tags
      updateMetaTag('twitter:title', title, 'property')
      updateMetaTag('twitter:description', description, 'property')

      // Update canonical URL
      updateCanonicalUrl(`https://pdflo.app/${task.id}`)

      // Add structured data for the specific tool
      updateStructuredData(task)
    } else {
      // Default homepage meta tags
      document.title =
        'Pdflo - Free PDF Converter & Editor | Convert PDF to Word, Excel, PowerPoint'
      updateMetaTag(
        'description',
        'Free online PDF converter and editor. Convert PDF to Word, Excel, PowerPoint, images and more. Merge, split, compress, and protect PDFs. 27+ professional PDF tools in one place.',
      )
      updateCanonicalUrl('https://pdflo.app/')
    }
  }, [task])

  const updateMetaTag = (
    name: string,
    content: string,
    attribute: string = 'name',
  ) => {
    let meta = document.querySelector(
      `meta[${attribute}="${name}"]`,
    ) as HTMLMetaElement
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }

  const generateKeywords = (task: ConversionTask): string => {
    const baseKeywords = ['PDF', 'converter', 'free', 'online', 'tool']
    const taskSpecificKeywords = task.name.toLowerCase().split(' ')

    // Add format-specific keywords
    if (task.id.includes('word')) baseKeywords.push('Word', 'DOCX', 'DOC')
    if (task.id.includes('excel'))
      baseKeywords.push('Excel', 'XLSX', 'XLS', 'spreadsheet')
    if (task.id.includes('powerpoint'))
      baseKeywords.push('PowerPoint', 'PPTX', 'PPT', 'presentation')
    if (task.id.includes('image'))
      baseKeywords.push('image', 'JPG', 'PNG', 'photo')
    if (task.id.includes('merge')) baseKeywords.push('merge', 'combine', 'join')
    if (task.id.includes('split'))
      baseKeywords.push('split', 'extract', 'separate')
    if (task.id.includes('compress'))
      baseKeywords.push('compress', 'reduce size', 'optimize')

    return [...new Set([...baseKeywords, ...taskSpecificKeywords])].join(', ')
  }

  const updateStructuredData = (task: ConversionTask) => {
    // Remove existing structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]#tool-schema',
    )
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data for the specific tool
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: task.name,
      description: task.description,
      url: `https://pdflo.app/${task.id}`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pdflo',
        url: 'https://pdflo.app/',
      },
      softwareRequirements: 'Web Browser',
      permissions: 'No registration required',
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'tool-schema'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }

  return null // This component doesn't render anything
}

export default SEOHead
