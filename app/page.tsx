"use client"

import { useState } from "react"
import { Dashboard } from "@/components/dashboard"
import { WorkoutLibrary } from "@/components/workout-library"
import { StatsScreen } from "@/components/stats-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { Home, Dumbbell, TrendingUp, User, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState<"home" | "workouts" | "stats" | "profile">("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-20">
      {/* Main Content */}
      <main className="max-w-md mx-auto">
        {activeTab === "home" && <Dashboard />}
        {activeTab === "workouts" && <WorkoutLibrary />}
        {activeTab === "stats" && <StatsScreen />}
        {activeTab === "profile" && <ProfileScreen />}
      </main>

      {/* Floating Start Workout Button */}
      {activeTab === "home" && (
        <Button
          size="lg"
          className="fixed bottom-24 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all duration-300 hover:scale-110"
        >
          <Play className="h-6 w-6 fill-white" />
        </Button>
      )}

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
        <div className="max-w-md mx-auto flex items-center justify-around py-3 px-6">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "home" ? "text-orange-500" : "text-slate-400"
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("workouts")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "workouts" ? "text-orange-500" : "text-slate-400"
            }`}
          >
            <Dumbbell className="h-6 w-6" />
            <span className="text-xs font-medium">Workouts</span>
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "stats" ? "text-orange-500" : "text-slate-400"
            }`}
          >
            <TrendingUp className="h-6 w-6" />
            <span className="text-xs font-medium">Stats</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "profile" ? "text-orange-500" : "text-slate-400"
            }`}
          >
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
