"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Calendar, TrendingUp, Award } from "lucide-react"
import { useState } from "react"

const weeklyData = [
  { day: "Mon", calories: 420, duration: 35 },
  { day: "Tue", calories: 380, duration: 40 },
  { day: "Wed", calories: 520, duration: 55 },
  { day: "Thu", calories: 350, duration: 30 },
  { day: "Fri", calories: 480, duration: 45 },
  { day: "Sat", calories: 650, duration: 70 },
  { day: "Sun", calories: 400, duration: 35 },
]

export function StatsScreen() {
  const [selectedView, setSelectedView] = useState<"week" | "month" | "year">("week")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Statistics</h1>
        <p className="text-slate-400">Track your progress</p>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-2">
        {["week", "month", "year"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedView(period as "week" | "month" | "year")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedView === period
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 bg-slate-800 border-slate-700">
          <div className="space-y-1">
            <p className="text-xs text-slate-400">Total Workouts</p>
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12%
            </p>
          </div>
        </Card>
        <Card className="p-3 bg-slate-800 border-slate-700">
          <div className="space-y-1">
            <p className="text-xs text-slate-400">Avg Calories</p>
            <p className="text-2xl font-bold text-white">428</p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8%
            </p>
          </div>
        </Card>
        <Card className="p-3 bg-slate-800 border-slate-700">
          <div className="space-y-1">
            <p className="text-xs text-slate-400">Streak</p>
            <p className="text-2xl font-bold text-white">7</p>
            <p className="text-xs text-orange-400 flex items-center gap-1">
              <Award className="h-3 w-3" />
              days
            </p>
          </div>
        </Card>
      </div>

      {/* Calories Burned Chart */}
      <Card className="p-4 bg-slate-800 border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Calories Burned</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <Line
              type="monotone"
              dataKey="calories"
              stroke="#F97316"
              strokeWidth={3}
              dot={{ fill: "#F97316", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Workout Duration Chart */}
      <Card className="p-4 bg-slate-800 border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Workout Duration (min)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: "#10B981", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Calendar View */}
      <Card className="p-4 bg-slate-800 border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-white" />
          <h3 className="text-lg font-semibold text-white">Activity Calendar</h3>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 28 }, (_, i) => {
            const hasWorkout = Math.random() > 0.4
            return (
              <div
                key={i}
                className={`aspect-square rounded-md ${
                  hasWorkout ? "bg-gradient-to-br from-orange-500 to-orange-600" : "bg-slate-700"
                }`}
              />
            )
          })}
        </div>
      </Card>
    </div>
  )
}
