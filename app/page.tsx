"use client"

import { useState, useEffect } from "react"
import ProfileCard from "@/components/profile-card"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Give enough time for the loading animation to complete

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      {isLoading && <LoadingScreen />}
      <ProfileCard />
    </main>
  )
}
