"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Github, Linkedin, Mail, Twitter, Code, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProfileCard() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("rethabile@example.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full max-w-md border-2 overflow-hidden">
      <div className="h-24 circuit-pattern relative">
        <div className="absolute -bottom-12 left-6">
          <div className="rounded-full border-4 border-white bg-white overflow-hidden">
            <Image
              src="/RethabileMokwanePhoto.jpg"
              alt="Rethabile Mokwane"
              width={125}
              height={125}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <CardHeader className="pt-16">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold font-mono">Rethabile Mokwane</h2>
            <p className="text-muted-foreground flex items-center gap-1">
              <Coffee className="h-4 w-4" /> Junior Java Developer
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="https://github.com/rethaX" target="_blank">
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rethabile-mokwane-information-technology" target="_blank">
              <Button size="icon" variant="ghost">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="code-block text-sm">
          <p className="dev-text">I specialize in building robust applications with Java, Python, and modern web technologies. Passionate about creating efficient, scalable, and user-friendly solutions.</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono text-sm font-bold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>Hibernate</Badge>
            <Badge>RESTful APIs</Badge>
            <Badge>JUnit</Badge>
            <Badge>Maven</Badge>
            <Badge>Git</Badge>
            <Badge>Back-End Frameworks</Badge>
            <Badge>UX Design</Badge> 
            <Badge>Jakarta</Badge>
            
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono text-sm font-bold">Experience</h3>
          <div className="text-sm space-y-1">
            <p className="font-medium">Java Developer Intern @Digilink (Client: BMW)</p>
            <p className="text-muted-foreground">April 2024 - April 2025</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="font-medium">ICT Support Intern  @Northridge Primary School</p>
            <p className="text-muted-foreground">February 2023 - February 2024</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-cursive text-lg text-center">"Turning coffee into code since 2022"</p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="w-full flex gap-2">
          <Button asChild className="flex-1">
            <Link href="https://rethabile-web-portfolio.vercel.app" target="_blank" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              View Web Portfolio
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href="https://rethabile-web-portfolio.vercel.app" className="website-icon">
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
