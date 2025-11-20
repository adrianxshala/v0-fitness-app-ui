"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { ProgressRing } from "@/components/progress-ring"
import { Flame, Footprints, Clock, Heart } from "lucide-react"

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
        <p className="text-slate-400">Let's crush your goals today 💪</p>
      </div>

      {/* Progress Rings */}
      <div className="grid grid-cols-3 gap-4">
        <ProgressRing progress={75} color="#F97316" label="Move" value="450" unit="cal" />
        <ProgressRing progress={60} color="#10B981" label="Exercise" value="18" unit="min" />
        <ProgressRing progress={90} color="#3B82F6" label="Stand" value="9" unit="hrs" />
      </div>

      {/* Daily Stats */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Today's Activity</h2>
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon={<Flame className="h-5 w-5" />}
            label="Calories"
            value="450"
            unit="kcal"
            gradient="from-orange-500 to-orange-600"
          />
          <StatCard
            icon={<Footprints className="h-5 w-5" />}
            label="Steps"
            value="8,234"
            unit="steps"
            gradient="from-green-500 to-green-600"
          />
          <StatCard
            icon={<Clock className="h-5 w-5" />}
            label="Active Time"
            value="45"
            unit="min"
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            icon={<Heart className="h-5 w-5" />}
            label="Heart Rate"
            value="72"
            unit="bpm"
            gradient="from-red-500 to-red-600"
          />
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Recent Workouts</h2>
        <div className="space-y-2">
          <WorkoutCard title="Morning Run" time="7:00 AM" duration="30 min" calories="245 cal" type="Cardio" />
          <WorkoutCard
            title="Upper Body Strength"
            time="Yesterday"
            duration="45 min"
            calories="320 cal"
            type="Strength"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  unit,
  gradient,
}: {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  gradient: string
}) {
  return (
    <Card className={`p-4 bg-gradient-to-br ${gradient} border-0 shadow-lg`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs text-white/80 font-medium">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-xs text-white/70">{unit}</p>
        </div>
        <div className="text-white/90">{icon}</div>
      </div>
    </Card>
  )
}

function WorkoutCard({
  title,
  time,
  duration,
  calories,
  type,
}: {
  title: string
  time: string
  duration: string
  calories: string
  type: string
}) {
  return (
    <Card className="p-4 bg-slate-800 border-slate-700 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
          <Flame className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-xs text-slate-400">{time}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-white">{duration}</p>
          <p className="text-xs text-slate-400">{calories}</p>
        </div>
      </div>
    </Card>
  )
}
