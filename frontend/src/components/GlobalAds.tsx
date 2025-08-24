import React from 'react'
import AdSense from '@/components/AdSense'

interface GlobalAdsProps {
  position: 'top' | 'bottom' | 'sidebar'
  className?: string
}

const GlobalAds: React.FC<GlobalAdsProps> = ({ position, className = '' }) => {
  // Different ad slots for different positions to optimize performance
  const getAdSlot = () => {
    switch (position) {
      case 'top':
        return '6480016001' // Top banner ad
      case 'bottom':
        return '6480016001' // Bottom content ad
      case 'sidebar':
        return '6480016001' // Sidebar ad
      default:
        return '6480016001'
    }
  }

  const getAdFormat = () => {
    switch (position) {
      case 'top':
        return 'auto' // Responsive banner
      case 'bottom':
        return 'rectangle' // Rectangle ad
      case 'sidebar':
        return 'auto' // Vertical ad
      default:
        return 'auto'
    }
  }

  const getAdStyle = () => {
    const baseStyle = {
      width: '100%',
      margin: '1rem 0',
    }

    switch (position) {
      case 'top':
        return {
          ...baseStyle,
          maxWidth: '728px',
          minHeight: '90px',
          margin: '1rem auto',
        }
      case 'bottom':
        return {
          ...baseStyle,
          maxWidth: '336px',
          minHeight: '280px',
          margin: '2rem auto',
        }
      case 'sidebar':
        return {
          ...baseStyle,
          maxWidth: '300px',
          minHeight: '250px',
          margin: '1rem 0',
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className={`global-ad global-ad-${position} ${className}`}>
      <AdSense
        adSlot={getAdSlot()}
        adFormat={getAdFormat()}
        style={getAdStyle()}
      />
    </div>
  )
}

export default GlobalAds
