import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'
import NotFound from '@/components/NotFound'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import { ConversionType, ALL_CONVERSION_TASKS } from '@/constants'
import type { ConversionTask } from '@/types'
import PdfToImageView from '@/components/views/PdfToImageView'
import MergePdfView from '@/components/views/MergePdfView'
import PasswordPdfView from '@/components/views/PasswordPdfView'
import PlaceholderView from '@/components/views/PlaceholderView'
import { ThemeContext } from '@/contexts/ThemeContext'
import WordToPdfView from '@/components/views/WordToPdfView'
import ExcelToPdfView from '@/components/views/ExcelToPdfView'
import PowerPointToPdfView from '@/components/views/PowerPointToPdfView'
import TextToPdfView from '@/components/views/TextToPdfView'
import PdfToWordView from '@/components/views/PdfToWordView'
import PdfToExcelView from '@/components/views/PdfToExcelView'
import PdfToPowerPointView from '@/components/views/PdfToPowerPointView'
import PdfToTextView from '@/components/views/PdfToTextView'
import PdfToHtmlView from '@/components/views/PdfToHtmlView'
import HtmlToPdfView from '@/components/views/HtmlToPdfView'
import PdfToEpubView from '@/components/views/PdfToEpubView'
import PdfToRtfView from '@/components/views/PdfToRtfView'
import PdfToVectorView from '@/components/views/PdfToVectorView'
import EpubToPdfView from '@/components/views/EpubToPdfView'
import RtfToPdfView from '@/components/views/RtfToPdfView'
import VectorToPdfView from '@/components/views/VectorToPdfView'
import PdfToSvgView from '@/components/views/PdfToSvgView'
import SplitPdfView from '@/components/views/SplitPdfView'
import CompressPdfView from '@/components/views/CompressPdfView'
import OrganizePdfView from '@/components/views/OrganizePdfView'
import WatermarkPdfView from '@/components/views/WatermarkPdfView'
import EditMetadataPdfView from '@/components/views/EditMetadataPdfView'
import OCRPdfView from '@/components/views/OCRPdfView'
import OfflineAlert from '@/components/OfflineAlert'

const AppShell: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [activeTask, setActiveTask] = useState<ConversionTask | null>(
    ALL_CONVERSION_TASKS[0] || null,
  )
  const [conversionInProgress, setConversionInProgress] = useState(false)
  const [conversionError, setConversionError] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadFilename, setDownloadFilename] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const themeContext = useContext(ThemeContext)
  const darkMode = themeContext?.darkMode ?? false

  useEffect(() => {
    const taskIdParam = (params as any).taskId as string | undefined
    if (!taskIdParam) return
    const task = ALL_CONVERSION_TASKS.find((t) => t.id === taskIdParam) || null
    setActiveTask(task)
    setSidebarOpen(false)
    setUploadedFile(null)
    setDownloadUrl(null)
    setDownloadFilename('')
    setConversionError(null)
  }, [params?.taskId])

  const handleTaskSelect = useCallback(
    (taskId: ConversionType) => {
      navigate(`/${taskId}`)
    },
    [navigate],
  )

  const handleStartConversion = () => {
    if (conversionInProgress) {
      setConversionError(
        'One conversion is in process. Please finish that conversion before starting a new one.',
      )
      return false
    }
    setConversionError(null)
    setConversionInProgress(true)
    return true
  }

  const handleFinishConversion = () => {
    setConversionInProgress(false)
  }

  const handleFileUpload = (file: File | null) => {
    setUploadedFile(file)
    if (!file) {
      setDownloadUrl(null)
      setDownloadFilename('')
      setConversionError(null)
    }
  }

  const handleConversionStart = () => {
    setConversionInProgress(true)
    setConversionError(null)
  }

  const handleConversionComplete = (url: string, filename: string) => {
    setDownloadUrl(url)
    setDownloadFilename(filename)
    setConversionInProgress(false)
  }

  const handleError = (error: string) => {
    setConversionError(error)
    setConversionInProgress(false)
  }

  const renderActiveView = () => {
    if (!activeTask) {
      return (
        <PlaceholderView
          title="No Task Selected"
          message="Please select a conversion task from the sidebar."
        />
      )
    }

    const commonProps = {
      conversionInProgress,
      onStartConversion: handleStartConversion,
      onFinishConversion: handleFinishConversion,
    }

    switch (activeTask.id) {
      case ConversionType.IMAGE_TO_PDF:
        return <PdfToImageView task={activeTask} />
      case ConversionType.WORD_TO_PDF:
        return <WordToPdfView task={activeTask} {...commonProps} />
      case ConversionType.EXCEL_TO_PDF:
        return <ExcelToPdfView task={activeTask} {...commonProps} />
      case ConversionType.POWERPOINT_TO_PDF:
        return <PowerPointToPdfView task={activeTask} {...commonProps} />
      case ConversionType.TEXT_TO_PDF:
        return <TextToPdfView task={activeTask} {...commonProps} />
      case ConversionType.HTML_TO_PDF:
        return <HtmlToPdfView task={activeTask} />
      case ConversionType.PDF_TO_IMAGE:
        return <PdfToImageView task={activeTask} />
      case ConversionType.PDF_TO_WORD:
        return <PdfToWordView />
      case ConversionType.MERGE_PDF:
        return <MergePdfView task={activeTask} />
      case ConversionType.PASSWORD_PROTECT_PDF:
        return <PasswordPdfView task={activeTask} />
      case ConversionType.PDF_TO_EXCEL:
        return (
          <PdfToExcelView
            onFileUpload={handleFileUpload}
            onConversionStart={handleConversionStart}
            onConversionComplete={handleConversionComplete}
            onError={handleError}
            isConverting={conversionInProgress}
            uploadedFile={uploadedFile}
            downloadUrl={downloadUrl}
            downloadFilename={downloadFilename}
          />
        )
      case ConversionType.PDF_TO_POWERPOINT:
        return <PdfToPowerPointView task={activeTask} {...commonProps} />
      case ConversionType.PDF_TO_TEXT:
        return <PdfToTextView task={activeTask} {...commonProps} />
      case ConversionType.PDF_TO_HTML:
        return <PdfToHtmlView task={activeTask} {...commonProps} />
      case ConversionType.PDF_TO_EPUB:
        return <PdfToEpubView task={activeTask} />
      case ConversionType.PDF_TO_RTF:
        return <PdfToRtfView task={activeTask} />
      case ConversionType.PDF_TO_VECTOR:
        return <PdfToVectorView task={activeTask} />
      case ConversionType.EPUB_TO_PDF:
        return <EpubToPdfView task={activeTask} />
      case ConversionType.RTF_TO_PDF:
        return <RtfToPdfView task={activeTask} />
      case ConversionType.VECTOR_TO_PDF:
        return <VectorToPdfView task={activeTask} />
      case ConversionType.PDF_TO_SVG:
        return <PdfToSvgView task={activeTask} />
      case ConversionType.SPLIT_PDF:
        return <SplitPdfView task={activeTask} />
      case ConversionType.COMPRESS_PDF:
        return <CompressPdfView />
      case ConversionType.REORDER_PAGES_PDF:
        return <OrganizePdfView />
      case ConversionType.ADD_WATERMARK_PDF:
        return <WatermarkPdfView task={activeTask} />
      case ConversionType.EDIT_METADATA_PDF:
        return <EditMetadataPdfView task={activeTask} />
      case ConversionType.OCR_PDF:
        return <OCRPdfView task={activeTask} />
      default:
        return (
          <PlaceholderView
            title={activeTask.name}
            message="This feature is under construction. Check back soon!"
            icon={activeTask.icon}
          />
        )
    }
  }

  return (
    <div
      className={`flex flex-col font-sans ${darkMode ? 'dark' : ''}`}
    >
      <SEOHead task={activeTask} />
      <OfflineAlert />
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          <Sidebar
            onTaskSelect={handleTaskSelect}
            activeTaskId={activeTask?.id || null}
          />
        </div>
        <main className="flex-1 p-0 md:p-6 overflow-y-auto bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 w-full">
          {conversionError && (
            <div className="p-4 mb-4 bg-red-100 border border-red-300 text-red-700 rounded text-center font-semibold mx-4 mt-4 md:mx-0">
              {conversionError}
            </div>
          )}
          {renderActiveView()}
        </main>
      </div>
      <Footer />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${ConversionType.IMAGE_TO_PDF}`} replace />}
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path=":taskId" element={<AppShell />} />
        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
