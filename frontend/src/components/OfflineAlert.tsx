import { useState, useEffect } from 'react'

const OfflineAlert = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine)

  useEffect(() => {
    const handleOffline = () => setIsOffline(true)
    const handleOnline = () => setIsOffline(false)

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  if (!isOffline) {
    return null
  }

  return (
    <div
      id="offlineAlert"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-200 text-red-800 p-5 rounded-lg shadow-lg text-center z-[10000]"
    >
      <h2 className="m-0 text-lg font-bold">
        You are not connected to the internet
      </h2>
      <p className="my-2.5">
        This app requires an active internet connection. Please connect to the
        internet.
      </p>
      <button
        onClick={() => setIsOffline(false)}
        className="px-5 py-2.5 bg-red-800 text-white border-none rounded cursor-pointer"
      >
        Okay
      </button>
    </div>
  )
}

export default OfflineAlert
