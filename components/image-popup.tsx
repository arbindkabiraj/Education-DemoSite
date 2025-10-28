"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, ZoomOut, Download } from "lucide-react"
import Image from "next/image"

interface ImagePopupProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ImagePopup({ src, alt, isOpen, onClose }: ImagePopupProps) {
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5))
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    link.download = alt
    link.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
        <div className="relative w-full h-full bg-black">
          {/* Controls */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button variant="secondary" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center overflow-auto">
            <div className="transition-transform duration-200" style={{ transform: `scale(${zoom})` }}>
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded">
            <p className="text-sm font-medium">{alt}</p>
            <p className="text-xs opacity-75">Zoom: {Math.round(zoom * 100)}%</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
