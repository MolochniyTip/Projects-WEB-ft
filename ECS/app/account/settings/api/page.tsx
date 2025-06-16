'use client'

import { Copy, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ApiSettings() {
  const apiKey = 'sk_test_51NXbfEH....'

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-6">API Settings</h2>
      
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">
            API Key
          </label>
          <div className="flex gap-2">
            <Input
              value={apiKey}
              readOnly
              type="password"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyApiKey}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Use this key to authenticate your API requests
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Regenerate API Key
          </Button>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Quick Start</h3>
            <p className="text-sm text-gray-600 mb-4">
              Here's an example of how to use your API key:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`curl -X GET "https://api.mycourse.io/v1/courses" \\
  -H "Authorization: Bearer ${apiKey}"`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
