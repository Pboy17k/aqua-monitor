"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SensorReadings } from "@/components/sensor-readings"
import { TrendChart } from "@/components/trend-chart"
import { motion } from "framer-motion"
import CountUp from "react-countup"

export function DashboardContent() {
  const [readings, setReadings] = useState(null)

  useEffect(() => {
    const fetchReadings = () => {
      const data = {
        pH: (Math.random() * (8.5 - 6.5) + 6.5).toFixed(2),
        turbidity: (Math.random() * 5).toFixed(2),
        dissolvedOxygen: (Math.random() * (10 - 6) + 6).toFixed(2),
        temperature: (Math.random() * (25 - 15) + 15).toFixed(1),
        conductivity: Math.floor(Math.random() * (500 - 200) + 200),
      }
      setReadings(data)
    }

    fetchReadings()
    const interval = setInterval(fetchReadings, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <SensorReadings readings={readings} />
      <Card>
        <CardHeader>
          <CardTitle>pH Trend (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <TrendChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Live Data Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Total Readings: <CountUp end={10000} duration={5} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

