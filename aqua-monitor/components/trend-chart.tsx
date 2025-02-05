"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function TrendChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Simulating API call for historical data
    const generateData = () => {
      const today = new Date()
      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - i)
        return {
          date: date.toISOString().split("T")[0],
          pH: Number((Math.random() * (8.5 - 6.5) + 6.5).toFixed(2)),
        }
      }).reverse()
    }

    setData(generateData())
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={[6, 9]} />
        <Tooltip />
        <Line type="monotone" dataKey="pH" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

