'use client'

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    newCourses: true,
    promotions: false,
    security: true,
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle notifications update
  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-6">Notifications</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Updates</h3>
              <p className="text-sm text-gray-500">Receive updates about your course progress</p>
            </div>
            <Switch
              checked={notifications.emailUpdates}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, emailUpdates: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">New Courses</h3>
              <p className="text-sm text-gray-500">Get notified about new courses in your interests</p>
            </div>
            <Switch
              checked={notifications.newCourses}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, newCourses: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Promotions</h3>
              <p className="text-sm text-gray-500">Receive promotional offers and discounts</p>
            </div>
            <Switch
              checked={notifications.promotions}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, promotions: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Security Updates</h3>
              <p className="text-sm text-gray-500">Get important security notifications</p>
            </div>
            <Switch
              checked={notifications.security}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, security: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Newsletter</h3>
              <p className="text-sm text-gray-500">Subscribe to our monthly newsletter</p>
            </div>
            <Switch
              checked={notifications.newsletter}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, newsletter: checked }))
              }
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full md:w-auto px-8 h-12 bg-[#3dcbb1] hover:bg-[#35b69e] text-white"
        >
          Save Preferences
        </Button>
      </form>
    </div>
  )
}
