"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

const initialDevices = [
  { id: "1", name: "Sensor A", location: "Pond 1", status: "Active" },
  { id: "2", name: "Sensor B", location: "River Bank", status: "Inactive" },
  { id: "3", name: "Sensor C", location: "Lake Shore", status: "Active" },
]

export function DeviceManagementContent() {
  const [devices, setDevices] = useState(initialDevices)
  const [newDevice, setNewDevice] = useState({ name: "", location: "" })
  const { toast } = useToast()

  const addDevice = () => {
    if (newDevice.name && newDevice.location) {
      const device = {
        id: (devices.length + 1).toString(),
        ...newDevice,
        status: "Inactive",
      }
      setDevices([...devices, device])
      setNewDevice({ name: "", location: "" })
      toast({
        title: "Device added",
        description: `${newDevice.name} has been added to the system.`,
      })
    }
  }

  const toggleDeviceStatus = (id: string) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, status: device.status === "Active" ? "Inactive" : "Active" } : device,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Device</CardTitle>
          <CardDescription>Enter the details of the new sensor device</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Device Name</Label>
              <Input
                id="name"
                value={newDevice.name}
                onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={newDevice.location}
                onChange={(e) => setNewDevice({ ...newDevice, location: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addDevice}>Add Device</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Registered Devices</CardTitle>
          <CardDescription>List of all sensor devices in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell>{device.name}</TableCell>
                  <TableCell>{device.location}</TableCell>
                  <TableCell>{device.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => toggleDeviceStatus(device.id)}>
                      {device.status === "Active" ? "Deactivate" : "Activate"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

