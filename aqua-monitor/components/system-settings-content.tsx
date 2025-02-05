"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

export function SystemSettingsContent() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    sampleInterval: 5,
    alertThresholds: {
      pH: { min: 6.5, max: 8.5 },
      turbidity: { max: 5 },
      dissolvedOxygen: { min: 6 },
      temperature: { min: 15, max: 25 },
      conductivity: { max: 500 },
    },
    notifications: {
      email: true,
      sms: false,
    },
  })

  const handleSave = () => {
    // Simulating API call to save settings
    setTimeout(() => {
      toast({
        title: "Settings saved",
        description: "Your system settings have been updated successfully.",
      })
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>Configure your AquaMonitor system settings</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sampleInterval">Sample Interval (minutes)</Label>
            <Input
              id="sampleInterval"
              type="number"
              value={settings.sampleInterval}
              onChange={(e) => setSettings({ ...settings, sampleInterval: Number(e.target.value) })}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Alert Thresholds</h3>
            {Object.entries(settings.alertThresholds).map(([param, thresholds]) => (
              <div key={param} className="flex items-center space-x-4">
                <Label className="w-32">{param}</Label>
                {Object.entries(thresholds).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Label htmlFor={`${param}-${key}`}>{key}</Label>
                    <Input
                      id={`${param}-${key}`}
                      type="number"
                      value={value}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          alertThresholds: {
                            ...settings.alertThresholds,
                            [param]: {
                              ...settings.alertThresholds[param],
                              [key]: Number(e.target.value),
                            },
                          },
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Notifications</h3>
            {Object.entries(settings.notifications).map(([method, enabled]) => (
              <div key={method} className="flex items-center justify-between">
                <Label htmlFor={method} className="capitalize">
                  {method} Notifications
                </Label>
                <Switch
                  id={method}
                  checked={enabled}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, [method]: checked },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave}>Save Settings</Button>
      </CardFooter>
    </Card>
  )
}

