import React from 'react'
import { X } from 'lucide-react'
import { Button } from './button'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl mx-4 bg-black rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:text-white/80"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Video Container with 16:9 aspect ratio */}
        <div className="relative pb-[56.25%] h-0">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  )
} 