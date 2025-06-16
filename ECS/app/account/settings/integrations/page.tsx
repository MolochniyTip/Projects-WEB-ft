'use client'

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const integrations = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'Connect your GitHub account to sync your repositories',
    connected: true,
  },
  {
    id: 'google',
    name: 'Google',
    description: 'Connect your Google account for calendar integration',
    connected: false,
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Get notifications and updates in your Slack workspace',
    connected: true,
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Join our community and get support on Discord',
    connected: false,
  }
]

export default function IntegrationsSettings() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-6">Integrations</h2>
      
      <div className="space-y-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="flex items-start justify-between p-4 border rounded-lg"
          >
            <div className="space-y-1">
              <h3 className="font-medium">{integration.name}</h3>
              <p className="text-sm text-gray-500">{integration.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <Switch checked={integration.connected} />
              <Button variant="outline">
                {integration.connected ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
