"use client"

import { useState } from "react"
import { X } from "lucide-react"

const mobileBreakpoints = [
  { name: "iPhone SE", width: 375, height: 667 },
  { name: "iPhone 12/13/14", width: 390, height: 844 },
  { name: "iPhone 12/13/14 Pro Max", width: 428, height: 926 },
  { name: "Samsung Galaxy S8+", width: 360, height: 740 },
  { name: "iPad Mini", width: 768, height: 1024 },
  { name: "Small Mobile", width: 320, height: 568 },
  { name: "Large Mobile", width: 480, height: 854 },
]

interface MobileTestOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileTestOverlay({ isOpen, onClose }: MobileTestOverlayProps) {
  const [selectedDevice, setSelectedDevice] = useState(mobileBreakpoints[0])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Mobile Progress Bar Testing</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        <div className="flex h-[calc(90vh-100px)]">
          {/* Device Selector */}
          <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4">Test Devices</h3>
            <div className="space-y-2">
              {mobileBreakpoints.map((device) => (
                <button
                  key={device.name}
                  onClick={() => setSelectedDevice(device)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedDevice.name === device.name
                      ? "bg-purple-100 text-purple-900 border border-purple-200"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="font-medium">{device.name}</div>
                  <div className="text-sm text-gray-500">
                    {device.width} × {device.height}
                  </div>
                </button>
              ))}
            </div>

            {/* Testing Checklist */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-3">Test Checklist</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Stage labels visible</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Progress bar aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Icons properly sized</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Text readable</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Touch targets adequate</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>No horizontal scroll</span>
                </div>
              </div>
            </div>
          </div>

          {/* Device Preview */}
          <div className="flex-1 p-6 bg-gray-100 flex items-center justify-center">
            <div className="bg-black rounded-3xl p-2 shadow-2xl">
              <div
                className="bg-white rounded-2xl overflow-hidden relative"
                style={{
                  width: `${Math.min(selectedDevice.width, 400)}px`,
                  height: `${Math.min(selectedDevice.height, 600)}px`,
                }}
              >
                {/* Status Bar Simulation */}
                <div className="h-6 bg-black flex items-center justify-between px-4 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="h-full overflow-y-auto">
                  <iframe
                    src="/process-timeline-test"
                    className="w-full h-full border-0"
                    title={`${selectedDevice.name} Preview`}
                  />
                </div>
              </div>
            </div>

            {/* Device Info */}
            <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{selectedDevice.name}</div>
                <div className="text-gray-600">
                  {selectedDevice.width} × {selectedDevice.height}px
                </div>
                <div className="text-gray-500 mt-1">
                  Viewport: {Math.min(selectedDevice.width, 400)} × {Math.min(selectedDevice.height, 600)}px
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
