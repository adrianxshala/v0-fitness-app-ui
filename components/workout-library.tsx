"use client"

import { Card } from "@/components/ui/card"
import { Dumbbell, Heart, Zap, Users } from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", name: "All", icon: Dumbbell },
  { id: "strength", name: "Strength", icon: Dumbbell },
  { id: "cardio", name: "Cardio", icon: Heart },
  { id: "hiit", name: "HIIT", icon: Zap },
  { id: "yoga", name: "Yoga", icon: Users },
]

const workouts = [
  {
    id: 1,
    title: "Full Body Blast",
    category: "strength",
    duration: "45 min",
    calories: "380 cal",
    difficulty: "Intermediate",
    thumbnail: "/strength-training-person.png",
  },
  {
    id: 2,
    title: "Morning Cardio",
    category: "cardio",
    duration: "30 min",
    calories: "250 cal",
    difficulty: "Beginner",
    thumbnail: "/person-running-outdoors.png",
  },
  {
    id: 3,
    title: "HIIT Power Session",
    category: "hiit",
    duration: "20 min",
    calories: "300 cal",
    difficulty: "Advanced",
    thumbnail: "/high-intensity-workout.png",
  },
  {
    id: 4,
    title: "Zen Flow Yoga",
    category: "yoga",
    duration: "40 min",
    calories: "150 cal",
    difficulty: "Beginner",
    thumbnail: "/person-doing-yoga-poses.jpg",
  },
  {
    id: 5,
    title: "Upper Body Power",
    category: "strength",
    duration: "35 min",
    calories: "280 cal",
    difficulty: "Intermediate",
    thumbnail: "/person-doing-upper-body-exercises.jpg",
  },
  {
    id: 6,
    title: "Sprint Intervals",
    category: "cardio",
    duration: "25 min",
    calories: "320 cal",
    difficulty: "Advanced",
    thumbnail: "/person-doing-sprint-training.jpg",
  },
]

export function WorkoutLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredWorkouts =
    selectedCategory === "all" ? workouts : workouts.filter((workout) => workout.category === selectedCategory)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Workouts</h1>
        <p className="text-slate-400">Choose your next challenge</p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          )
        })}
      </div>

      {/* Workout Cards */}
      <div className="space-y-4">
        {filteredWorkouts.map((workout) => (
          <Card
            key={workout.id}
            className="overflow-hidden bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={workout.thumbnail || "/placeholder.svg"}
                alt={workout.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">{workout.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span>{workout.duration}</span>
                  <span>•</span>
                  <span>{workout.calories}</span>
                  <span>•</span>
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      workout.difficulty === "Beginner"
                        ? "bg-green-500/20 text-green-400"
                        : workout.difficulty === "Intermediate"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {workout.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
