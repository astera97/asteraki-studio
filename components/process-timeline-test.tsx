"use client"

import { useState } from "react"
import ProcessTimeline from "./process-timeline"
import MobileTestOverlay from "./mobile-test-overlay"
import { Button } from "@/components/ui/button"

export default function ProcessTimelineTest() {
  const [showTestOverlay, setShowTestOverlay] = useState(false)

  return (
    <div>
      {/* Test Button - Only visible in development */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 right-4 z-40">
          <Button
            onClick={() => setShowTestOverlay(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Test Mobile Progress Bar
          </Button>
        </div>
      )}

      {/* Original Component */}
      <ProcessTimeline />

      {/* Mobile Test Overlay */}
      <MobileTestOverlay isOpen={showTestOverlay} onClose={() => setShowTestOverlay(false)} />
    </div>
  )
}
