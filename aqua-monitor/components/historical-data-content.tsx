"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const parameters = [
  { value: "pH", label: "pH" },
  { value: "turbidity", label: "Turbidity" },
  { value: "dissolvedOxygen", label: "Dissolved Oxygen" },
  { value: "temperature", label: "Temperature" },
  { value: "conductivity", label: "Conductivity" },
]

const timeRanges = [
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
]

export function HistoricalDataContent() {
  const [parameter, setParameter] = useState("pH")
  const [timeRange, setTimeRange] = useState("30")
  const [data, setData] = useState([])

  useEffect(() => {
    // Simulating API call for historical data
    const generateData = () => {
      const today = new Date()
      return Array.from({ length: Number(timeRange) }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - i)
        return {
          date: date.toISOString().split("T")[0],
          value: Number((Math.random() * (8.5 - 6.5) + 6.5).toFixed(2)),
        }
      }).reverse()
    }

    setData(generateData())
  }, [timeRange])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-6">
          <Select value={parameter} onValueChange={setParameter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select parameter" />
            </SelectTrigger>
            <SelectContent>
              {parameters.map((param) => (
                <SelectItem key={param.value} value={param.value}>
                  {param.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

