import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sensorData = [
  { name: "pH", key: "pH", unit: "" },
  { name: "Turbidity", key: "turbidity", unit: "NTU" },
  { name: "Dissolved Oxygen", key: "dissolvedOxygen", unit: "mg/L" },
  { name: "Temperature", key: "temperature", unit: "°C" },
  { name: "Conductivity", key: "conductivity", unit: "µS/cm" },
]

export function SensorReadings({ readings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {sensorData.map((sensor) => (
        <Card key={sensor.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{sensor.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {readings ? `${readings[sensor.key]}${sensor.unit}` : "Loading..."}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

