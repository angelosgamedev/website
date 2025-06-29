"use client"

import { useState } from "react"
import { useForm, ValidationError } from '@formspree/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { VideoModal } from "@/components/ui/video-modal"
import {
  Mail,
  MapPin,
  Play,
  ArrowRight,
  GraduationCap,
  Code,
  Youtube,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [state, handleSubmit] = useForm("xwpbovby")
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const themeClasses = isDarkMode
    ? {
        bg: "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900",
        headerBg: "backdrop-blur-sm bg-black/20 border-b border-white/10",
        text: "text-white",
        textSecondary: "text-gray-300",
        textMuted: "text-gray-400",
        cardBg: "bg-white/5 border-white/10",
        cardHover: "bg-white/10",
        inputBg: "bg-white/5 border-white/10 text-white",
        sectionBg: "bg-black/20",
        gradientOverlay: "bg-gradient-to-r from-neutral-600/20 to-neutral-600/20",
        footerBorder: "border-white/10",
        mobileMenuBg: "bg-black/95 backdrop-blur-sm",
      }
    : {
        bg: "bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50",
        headerBg: "backdrop-blur-sm bg-white/80 border-b border-gray-200",
        text: "text-gray-900",
        textSecondary: "text-gray-700",
        textMuted: "text-gray-600",
        cardBg: "bg-white border-gray-200",
        cardHover: "bg-gray-50",
        inputBg: "bg-white border-gray-300 text-gray-900",
        sectionBg: "bg-gray-50/50",
        gradientOverlay: "bg-gradient-to-r from-neutral-100/50 to-neutral-100/50",
        footerBorder: "border-gray-200",
        mobileMenuBg: "bg-white/95 backdrop-blur-sm",
      }

  // Helper function to extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    <div className={`flex flex-col min-h-screen ${themeClasses.bg}`}>
      {/* Header */}
      <header className={`w-full px-4 lg:px-6 h-16 flex items-center justify-center ${themeClasses.headerBg} sticky top-0 z-50`}>
        <div className="container mx-auto max-w-7xl w-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/images/controller-logo.png"
                width={33}
                height={33}
                alt="Controller Logo"
                className="h-8 w-8"
                priority
              />
              <span
                className={`ml-2 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
              >
                Angelos Parisis
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
              <Link
                href="#portfolio"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                Portfolio
              </Link>
              <Link
                href="#software"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                Software
              </Link>
              <Link
                href="#about"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                About
              </Link>
              <Link
                href="#games"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                Games
              </Link>
              <Link
                href="#books"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                Books
              </Link>
              <Link
                href="#contact"
                className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="ml-auto flex md:hidden items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className={`text-yellow-400 hover:text-yellow-500 rounded-full transition-colors`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-16 left-0 right-0 z-40 ${themeClasses.mobileMenuBg} border-b ${isDarkMode ? "border-white/10" : "border-gray-200"}`}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              href="#portfolio"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              Portfolio
            </Link>
            <Link
              href="#software"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              Software
            </Link>
            <Link
              href="#about"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              About
            </Link>
            <Link
              href="#games"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              Games
            </Link>
            <Link
              href="#books"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              Books
            </Link>
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 hover:from-yellow-200 hover:to-yellow-500 transition-all`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className={`absolute inset-0 ${themeClasses.gradientOverlay}`} />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Available for Work
                </Badge>
                <h1
                  className={`text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
                >
                  Welcome to my portfolio website!
                </h1>
                <p className={`mx-auto max-w-[700px] ${themeClasses.textSecondary} md:text-xl lg:text-2xl`}>
                 Hello! My name is Angelo and I am a Game Designer. Here you will find a showcase of my work and detailed skill set.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#portfolio">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={`w-full py-12 md:py-24 lg:py-32 ${themeClasses.sectionBg}`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2
                className={`text-3xl font-medium tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
              >
                Portfolio Showcase
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2 w-full">
                <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300 group`}>
                  <CardHeader className="p-0">
                    <div 
                      className="relative overflow-hidden rounded-t-lg cursor-pointer"
                      onClick={() => setActiveVideo({ 
                        id: getYouTubeId("https://youtu.be/-l-yZcPCEkg") || "", 
                        title: "Project Zero Hunter" 
                      })}
                    >
                      <Image
                        src="/images/project-zero-hunter-thumbnail.jpg"
                        width={400}
                        height={200}
                        alt="Project Zero Hunter"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 mb-2`}>
                      Project Zero Hunter
                    </CardTitle>
                    <CardDescription className={`${themeClasses.textSecondary} mb-4`}>
                      A video Demonstration of my Final Year Project for my Computer Games Design Course.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        Unreal Engine
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                        2.5D
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                        Action Platformer
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link href="https://youtu.be/-l-yZcPCEkg" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full">
                          <Play className="h-4 w-4 mr-2" />
                          View Video
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300 group`}>
                  <CardHeader className="p-0">
                    <div 
                      className="relative overflow-hidden rounded-t-lg cursor-pointer"
                      onClick={() => setActiveVideo({ 
                        id: getYouTubeId("https://youtu.be/g1L7oKwexGQ") || "", 
                        title: "VFX Reel" 
                      })}
                    >
                      <Image
                        src="/images/vfx-projectile.png"
                        width={400}
                        height={200}
                        alt="VFX Reel"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 mb-2`}>
                      VFX Reel
                    </CardTitle>
                    <CardDescription className={`${themeClasses.textSecondary} mb-4`}>
                      A reel of any visual effects related work I have worked on. A lot was used in Project Zero Hunter.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        Niagara
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                        Cascade
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                        After Effects
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link href="https://youtu.be/g1L7oKwexGQ" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full">
                          <Play className="h-4 w-4 mr-2" />
                          View Video
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2 w-full">
                <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300 group`}>
                  <CardHeader className="p-0">
                    <div 
                      className="relative overflow-hidden rounded-t-lg cursor-pointer"
                      onClick={() => setActiveVideo({ 
                        id: getYouTubeId("https://www.youtube.com/watch?v=LIgFhxbEL6I") || "", 
                        title: "UI Reel" 
                      })}
                    >
                      <Image
                        src="/images/ui-reel.png"
                        width={400}
                        height={200}
                        alt="UI Reel"
                        className="w-full h-48 object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 mb-2`}>
                      UI Reel
                    </CardTitle>
                    <CardDescription className={`${themeClasses.textSecondary} mb-4`}>
                      A reel of any UI related work I have worked on. For further information on how this work was made please look into the video&apos;s description.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        Photoshop
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                        Premiere Pro
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                        After Effects
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link href="https://www.youtube.com/watch?v=LIgFhxbEL6I" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full">
                          <Play className="h-4 w-4 mr-2" />
                          View Video
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300 group`}>
                  <CardHeader className="p-0">
                    <div 
                      className="relative overflow-hidden rounded-t-lg cursor-pointer"
                      onClick={() => setActiveVideo({ 
                        id: getYouTubeId("https://youtu.be/Nyd-tMtpD7U") || "", 
                        title: "JBA/DarbyTech VR Trailer" 
                      })}
                    >
                      <Image
                        src="/images/JBA-project.png"
                        width={400}
                        height={200}
                        alt="JBA/DarbyTech VR Trailer"
                        className="w-full h-48 object-cover object-[center_80%] group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400 mb-2`}>
                      JBA/DarbyTech VR Trailer
                    </CardTitle>
                    <CardDescription className={`${themeClasses.textSecondary} mb-4`}>
                      One of the projects I worked on for the IDTC department of Teesside University. For further information on this project please look into the video&apos;s description.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        Unreal Engine
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                        VR
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                        Blueprints
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link href="https://youtu.be/Nyd-tMtpD7U" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full">
                          <Play className="h-4 w-4 mr-2" />
                          View Video
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className={`w-full py-12 md:py-24 lg:py-32 ${themeClasses.sectionBg}`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2
                className={`text-3xl font-medium tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
              >
                Software
              </h2>
              <p className={`max-w-[900px] ${themeClasses.textSecondary} md:text-xl`}>
                Tools I find myself using quite often
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300`}>
                <CardHeader className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-black border-2 border-gray-300 mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <Image
                        src="/images/epic-games-logo.png"
                        width={24}
                        height={24}
                        alt="Epic Games / Unreal Engine"
                        className="h-6 w-6 object-contain"
                      />
                      <Image
                        src="/images/unity-logo.png"
                        width={20}
                        height={20}
                        alt="Unity Engine"
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className={`${themeClasses.text} text-center`}>Unreal Engine / Unity</CardTitle>
                  <CardDescription className={`${themeClasses.textSecondary} text-center`}>
                    Learned how to use Unreal Engine and blueprinting extensively during my Bachelors. Got comfortable
                    using unity while working on personal projects outside of my education.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300`}>
                <CardHeader className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-black border-2 border-gray-300 mb-4">
                    <Image
                      src="/images/adobe-logo.png"
                      width={40}
                      height={40}
                      alt="Adobe"
                      className="h-10 w-10 object-contain"
                      priority
                    />
                  </div>
                  <CardTitle className={`${themeClasses.text} text-center`}>Photoshop & Premiere Pro</CardTitle>
                  <CardDescription className={`${themeClasses.textSecondary} text-center`}>
                    Photoshop changed my life as it changed the way I pitch games and ideas. I have been using Photoshop
                    and Premiere Pro for years now to grow my platforms.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className={`${themeClasses.cardBg} ${themeClasses.cardHover} transition-all duration-300`}>
                <CardHeader className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-black border-2 border-gray-300 mb-4">
                    <Sparkles className="h-8 w-8 text-yellow-400" />
                  </div>
                  <CardTitle className={`${themeClasses.text} text-center`}>Particle Systems</CardTitle>
                  <CardDescription className={`${themeClasses.textSecondary} text-center`}>
                    I&apos;m knowledgable in creating Particle Systems in Niagara & Cascade and a bit in After Effects.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2
                    className={`text-3xl font-medium tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
                  >
                    A little bit about me
                  </h2>
                  <p className={`max-w-[600px] ${themeClasses.textSecondary} text-base md:text-lg`}>
                    I dropped out of university in Greece so I could transition into an education revolving
                    game development in the UK, chasing my dreams as some would put it. I have a passion for video editing and
                    making people laugh which resulted in a successful Youtube career with over 100k subs. I grew up on
                    a farm in Greece with 5 dogs and lots and lots of cats. I love collecting vinyl and going to stand-up
                    shows.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-yellow-400" />
                    <span className={`${themeClasses.textSecondary} text-sm`}>Computer Games Design BA w/Honours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Youtube className="h-5 w-5 text-blue-400" />
                    <span className={themeClasses.textSecondary}>Premiere Pro Video Editor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-purple-400" />
                    <span className={themeClasses.textSecondary}>Blueprinting & C#</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/microsoft-logo.png"
                      width={20}
                      height={20}
                      alt="Microsoft"
                      className="h-5 w-5 object-contain"
                    />
                    <span className={themeClasses.textSecondary}>Excel & Powerpoint Certified</span>
                  </div>
                </div>
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-fit rounded-full"
                  >
                    Want to work together?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/angelos-coastal-photo.jpeg"
                  width={400}
                  height={400}
                  alt="Angelos Parisis"
                  className={`aspect-square overflow-hidden rounded-xl object-cover border-2 ${isDarkMode ? "border-white/10" : "border-gray-200"}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className={`w-full py-12 md:py-24 lg:py-32`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2
                className={`text-3xl font-medium tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
              >
                Games that inspire me
              </h2>
              <p className={`max-w-[900px] ${themeClasses.textSecondary} md:text-xl`}>
                These games have changed the way I approach design and remind me why I love the medium
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/kh2fm-cover.png"
                  fill
                  alt="Kingdom Hearts II Final Mix"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/MMX4-cover.png"
                  fill
                  alt="Mega Man X4"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/bloodborne-cover.jpeg"
                  fill
                  alt="Bloodborne"
                  className="object-contain outline outline-2 outline-gray-300"
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/nier-cover.png"
                  fill
                  alt="NieR: Automata"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/twewy-cover.png"
                  fill
                  alt="The World Ends With You"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/mgs2-cover.png?v=2"
                  fill
                  alt="Metal Gear Solid 2"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/metaphor-cover.jpeg"
                  fill
                  alt="Metaphor: ReFantazio"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/FFPOR-cover.png"
                  fill
                  alt="Final Fantasy: Parasite Eve Origin"
                  className="object-contain outline outline-2 outline-gray-300"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className={`w-full py-6 md:py-12 lg:py-16`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-6">
              <h2
                className={`text-2xl font-medium tracking-tighter sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
              >
                Books that changed my life
              </h2>
              <p className={`max-w-[900px] ${themeClasses.textSecondary} text-base md:text-lg`}>
                These books have shaped the way I view the world, myself, game design and fiction
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/Levelup-Cover.png"
                  fill
                  alt="Level Up!"
                  className="object-fill outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/Artof-cover.png"
                  fill
                  alt="The Art Of Game Design"
                  className="object-fill outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/Modernman-cover.png"
                  fill
                  alt="The Modern Man Guide"
                  className="object-fill outline outline-2 outline-gray-300"
                  priority
                />
              </div>
              <div className="relative w-full pb-[150%]">
                <Image
                  src="/images/Lovecraft-cover.jpg"
                  fill
                  alt="H.P. Lovecraft Complete Collection"
                  className="object-fill outline outline-2 outline-gray-300"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`w-full py-12 md:py-24 lg:py-32 ${themeClasses.sectionBg}`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2
                    className={`text-3xl font-medium tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400`}
                  >
                    Contact Form
                  </h2>
                  <p className={`max-w-[600px] ${themeClasses.textSecondary} md:text-xl`}>
                    Feel free to complete the form with any business inquiries or opportunities. Always happy to
                    converse with fellow creatives!
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span className={themeClasses.textSecondary}>angelosgamedev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <span className={themeClasses.textSecondary}>Athens, Greece</span>
                  </div>
                </div>
              </div>
              <Card className={themeClasses.cardBg}>
                <CardHeader>
                  <CardTitle className={themeClasses.text}>Get In Touch</CardTitle>
                  <CardDescription className={themeClasses.textSecondary}>
                    {state.succeeded ? (
                      "Thanks for your message! I&apos;ll get back to you soon."
                    ) : (
                      "Send me a message and I&apos;ll get back to you within 24 hours."
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.succeeded ? (
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-emerald-500/20">
                        <svg
                          className="w-8 h-8 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className={`text-lg font-medium ${themeClasses.text}`}>Message Successfully Sent!</p>
                      <p className={themeClasses.textSecondary}>Thank you for reaching out. I&apos;ll get back to you soon.</p>
                      <Button 
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full"
                        onClick={() => window.location.reload()}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className={`text-sm font-medium ${themeClasses.text}`}>Name</label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Your name" 
                            className={themeClasses.inputBg}
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className={`text-sm font-medium ${themeClasses.text}`}>Email</label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="your@email.com" 
                            className={themeClasses.inputBg}
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-medium ${themeClasses.text}`}>Title</label>
                        <Input 
                          id="title"
                          name="title"
                          className={themeClasses.inputBg}
                        />
                        <ValidationError 
                          prefix="Title" 
                          field="title"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-medium ${themeClasses.text}`}>Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          className={`${themeClasses.inputBg} min-h-[100px]`}
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <Button 
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full"
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ${themeClasses.footerBorder}`}
      >
        <nav className="flex gap-4 sm:gap-6">
          <Link href="https://www.linkedin.com/in/angelosparisis/" target="_blank" rel="noopener noreferrer" className={`text-xs ${themeClasses.textMuted} hover:${themeClasses.text} transition-colors flex items-center gap-2`}>
            <Image
              src="/images/linkedin-logo.png"
              width={20}
              height={20}
              alt="LinkedIn"
              className="w-5 h-5"
              priority
            />
            LinkedIn
          </Link>
        </nav>
      </footer>

      {/* Add the VideoModal component at the end of the return statement, just before the closing div */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoId={activeVideo?.id || ""}
        title={activeVideo?.title || ""}
      />
    </div>
  )
}