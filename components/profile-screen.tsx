"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Target, Flame, Award, Star, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

const achievements = [
  { id: 1, name: "First Workout", icon: Star, unlocked: true, color: "from-yellow-400 to-yellow-500" },
  { id: 2, name: "7 Day Streak", icon: Flame, unlocked: true, color: "from-orange-400 to-orange-500" },
  { id: 3, name: "10 Workouts", icon: Target, unlocked: true, color: "from-green-400 to-green-500" },
  { id: 4, name: "1000 Calories", icon: TrendingUp, unlocked: true, color: "from-blue-400 to-blue-500" },
  { id: 5, name: "30 Day Streak", icon: Award, unlocked: false, color: "from-purple-400 to-purple-500" },
  { id: 6, name: "50 Workouts", icon: Trophy, unlocked: false, color: "from-pink-400 to-pink-500" },
]

export function ProfileScreen() {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <Avatar className="h-24 w-24 mx-auto border-4 border-orange-500">
          <AvatarImage src="/athletic-person-smiling.jpg" />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            JD
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-white">John Doe</h1>
          <p className="text-slate-400">Fitness Enthusiast</p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 bg-slate-800 border-slate-700 text-center">
          <p className="text-2xl font-bold text-white">24</p>
          <p className="text-xs text-slate-400 mt-1">Workouts</p>
        </Card>
        <Card className="p-4 bg-slate-800 border-slate-700 text-center">
          <p className="text-2xl font-bold text-white">7</p>
          <p className="text-xs text-slate-400 mt-1">Day Streak</p>
        </Card>
        <Card className="p-4 bg-slate-800 border-slate-700 text-center">
          <p className="text-2xl font-bold text-white">3.2k</p>
          <p className="text-xs text-slate-400 mt-1">Calories</p>
        </Card>
      </div>

      {/* Achievements */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Achievements</h2>
          <span className="text-sm text-slate-400">4 / 6</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Goals</h2>
        <Card className="p-4 bg-slate-800 border-slate-700">
          <div className="space-y-4">
            <GoalProgress label="Weekly Workouts" current={5} target={7} color="orange" />
            <GoalProgress label="Calories Burned" current={2840} target={3500} color="green" />
            <GoalProgress label="Active Days" current={6} target={7} color="blue" />
          </div>
        </Card>
      </div>

      {/* Personal Records */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Personal Records</h2>
        <Card className="p-4 bg-slate-800 border-slate-700">
          <div className="space-y-3">
            <RecordItem label="Longest Workout" value="75 min" date="2 days ago" />
            <RecordItem label="Most Calories" value="650 cal" date="Last Saturday" />
            <RecordItem label="Best Streak" value="14 days" date="Last month" />
          </div>
        </Card>
      </div>
    </div>
  )
}

function AchievementBadge({ achievement }: { achievement: any }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const Icon = achievement.icon

  useEffect(() => {
    if (achievement.unlocked) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 600)
      return () => clearTimeout(timer)
    }
  }, [achievement.unlocked])

  return (
    <div
      className={`relative aspect-square rounded-lg flex flex-col items-center justify-center transition-all ${
        achievement.unlocked
          ? `bg-gradient-to-br ${achievement.color} shadow-lg ${isAnimating ? "animate-bounce" : ""}`
          : "bg-slate-700"
      }`}
    >
      <Icon className={`h-8 w-8 ${achievement.unlocked ? "text-white" : "text-slate-500"}`} />
      <p
        className={`text-[10px] font-medium mt-1 text-center px-1 ${
          achievement.unlocked ? "text-white" : "text-slate-500"
        }`}
      >
        {achievement.name}
      </p>
    </div>
  )
}

function GoalProgress({
  label,
  current,
  target,
  color,
}: {
  label: string
  current: number
  target: number
  color: "orange" | "green" | "blue"
}) {
  const percentage = (current / target) * 100
  const colorClasses = {
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white font-medium">{label}</span>
        <span className="text-slate-400">
          {current} / {target}
        </span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  )
}

function RecordItem({ label, value, date }: { label: string; value: string; date: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
      <div>
        <p className="text-white font-medium">{label}</p>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
      <p className="text-lg font-bold text-orange-500">{value}</p>
    </div>
  )
}
