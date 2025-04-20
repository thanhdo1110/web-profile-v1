"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Github, Facebook, Youtube, Send, ExternalLink, MapPin, Calendar, Code2, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import AOS from "aos"

interface AnimatedElement {
  width: number;
  height: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function Home() {
  const aboutSectionRef = useRef(null)
  const [animatedElements, setAnimatedElements] = useState<AnimatedElement[]>([])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })

    // Generate random values for animated elements only on client side
    const elements = [...Array(20)].map(() => ({
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setAnimatedElements(elements)
  }, [])

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeProvider defaultTheme="dark" forcedTheme="dark">
      <main className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-black"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {animatedElements.map((element, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-violet-500/10"
                  style={{
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                    top: `${element.top}%`,
                    left: `${element.left}%`,
                    animation: `float ${element.duration}s linear infinite`,
                    animationDelay: `${element.delay}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div
            className="z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-2"
            data-aos="fade-up"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-3 overflow-hidden rounded-full border-2 border-violet-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-violet-600 to-purple-800">
                <Image
                  src="/avata-user.jpg"
                  alt="Đỗ Trung Thành"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-400 animate-gradient">
              Đỗ Thành #1110
            </h1>

            <div className="flex items-center text-violet-300 space-x-2 -mt-1">
              <Calendar className="h-4 w-4" />
              <span>11/10/2007</span>
            </div>

            <div className="flex items-center text-violet-300 space-x-2 -mt-1">
              <MapPin className="h-4 w-4" />
              <span>Bắc Ninh, Việt Nam</span>
            </div>

            <p className="max-w-[600px] text-zinc-400 md:text-xl mt-4">
              Passionate about finding tricks and bugs in apps and websites, cracking applications, ...
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6" data-aos="fade-up" data-aos-delay="100">
              <SocialButton href="https://github.com/thanhdo1110" icon={<Github />} label="GitHub" />
              <SocialButton href="https://www.facebook.com/thanhdo1110.ctdo/" icon={<Facebook />} label="Facebook" />
              <SocialButton href="https://www.youtube.com/@thanhdo1110" icon={<Youtube />} label="YouTube" />
              <SocialButton href="https://t.me/dothanh1110" icon={<Send />} label="Telegram" />
              <SocialButton href="https://t.me/ctdotech" icon={<Send />} label="CTDO Tech" />
              <SocialButton href="https://discord.gg/r3vCRDX3Zt" icon={<DiscordIcon />} label="Discord" />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-2" data-aos="fade-up" data-aos-delay="200">
              <WebsiteButton href="https://ctdo.net" label="CTDO.NET" />
              <WebsiteButton href="https://ctdo.dev" label="CTDO.DEV" />
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <Button variant="ghost" size="sm" className="text-violet-400 animate-bounce" onClick={scrollToAbout}>
              <span>Scroll Down</span>
            </Button>
          </div>
        </div>

        {/* About Section */}
        <section ref={aboutSectionRef} className="py-20 bg-zinc-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-violet-400">About Me</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Hi, I'm Thành! I was born on October 11, 2007, and I'm from Bắc Ninh, Vietnam.</p>
                  <p>
                    I have a passion for exploring digital systems, finding tricks and bugs in apps and websites, as
                    well as cracking applications and diving deep into technology.
                  </p>
                  <p>
                    When I'm not hunting for bugs, I enjoy working on various tech projects and sharing my knowledge
                    with others through my online platforms and community.
                  </p>
                </div>

                <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-xl font-semibold mb-4 text-violet-400">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Pill>Bug Hunting</Pill>
                    <Pill>App Cracking</Pill>
                    <Pill>Web Exploitation</Pill>
                    <Pill>Cybersecurity</Pill>
                    <Pill>Technology</Pill>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <StatCard
                  title="Tech Explorations"
                  value="100+"
                  icon={<Bug className="h-5 w-5 text-violet-400" />}
                  delay={100}
                />
                <StatCard
                  title="Projects"
                  value="20+"
                  icon={<Code2 className="h-5 w-5 text-violet-400" />}
                  delay={200}
                />
                <StatCard
                  title="Tutorials"
                  value="YouTube"
                  icon={<Youtube className="h-5 w-5 text-violet-400" />}
                  delay={300}
                />
                <StatCard
                  title="Community"
                  value="Discord"
                  icon={<DiscordIcon className="h-5 w-5 text-violet-400" />}
                  delay={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-violet-400" data-aos="fade-up">
              Connect With Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SocialCard
                title="GitHub"
                username="thanhdo1110"
                description="Where I upload and share my projects and source code"
                icon={<Github className="h-8 w-8" />}
                url="https://github.com/thanhdo1110"
                delay={100}
              />

              <SocialCard
                title="YouTube"
                username="@thanhdo1110"
                description="Channel for sharing knowledge and tutorials"
                icon={<Youtube className="h-8 w-8" />}
                url="https://www.youtube.com/@thanhdo1110"
                delay={200}
              />

              <SocialCard
                title="Facebook"
                username="thanhdo1110.ctdo"
                description="My personal page for updates and connections"
                icon={<Facebook className="h-8 w-8" />}
                url="https://www.facebook.com/thanhdo1110.ctdo/"
                delay={300}
              />

              <SocialCard
                title="Telegram"
                username="dothanh1110"
                description="Where I share simple source code and projects"
                icon={<Send className="h-8 w-8" />}
                url="https://t.me/dothanh1110"
                delay={400}
              />

              <SocialCard
                title="Telegram Channel"
                username="ctdotech"
                description="Notifications about new blog posts and tech info"
                icon={<Send className="h-8 w-8" />}
                url="https://t.me/ctdotech"
                delay={500}
              />

              <SocialCard
                title="Discord"
                username="CTDOTEAM"
                description="Community server with various channels"
                icon={<DiscordIcon className="h-8 w-8" />}
                url="https://discord.gg/r3vCRDX3Zt"
                delay={600}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <SocialCard
                title="CTDO.NET"
                username="Tech Blog"
                description="Technology blog with the latest tech news and tutorials"
                icon={<ExternalLink className="h-8 w-8" />}
                url="https://ctdo.net"
                delay={700}
              />

              <SocialCard
                title="CTDO.DEV"
                username="Developer Resources"
                description="API repository and test source code for developers"
                icon={<Code2 className="h-8 w-8" />}
                url="https://ctdo.dev"
                delay={800}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-zinc-900/80 border-t border-zinc-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-violet-400">Đỗ Trung Thành</h3>
                <p className="text-zinc-400">© {new Date().getFullYear()} - All rights reserved</p>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com/thanhdo1110"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/thanhdo1110.ctdo/"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@thanhdo1110"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="https://t.me/dothanh1110" className="text-zinc-400 hover:text-violet-400 transition-colors">
                  <Send className="h-5 w-5" />
                </Link>
                <Link
                  href="https://discord.gg/r3vCRDX3Zt"
                  className="text-zinc-400 hover:text-violet-400 transition-colors"
                >
                  <DiscordIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  )
}

// Discord Icon Component
function DiscordIcon({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
      <g>
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </g>
    </svg>
  )
}

// Component for social media buttons
function SocialButton({ href, icon, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-all hover:scale-105 duration-300"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Link>
  )
}

// Component for website buttons
function WebsiteButton({ href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-violet-700 hover:to-purple-700 transition-all hover:scale-105 duration-300"
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      {label}
    </Link>
  )
}

// Component for interest pills
function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-900/30 px-3 py-1 text-sm font-medium text-violet-300 border border-violet-800 hover:bg-violet-800/30 transition-colors">
      {children}
    </span>
  )
}

// Component for stat cards
function StatCard({ title, value, icon, delay = 0 }) {
  return (
    <div
      className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-violet-500 transition-all hover:bg-zinc-800/70 duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="mb-2">{icon}</div>
      <h4 className="text-lg font-medium text-zinc-400">{title}</h4>
      <p className="text-2xl font-bold text-violet-400 mt-2">{value}</p>
    </div>
  )
}

// Component for social media cards
function SocialCard({ title, username, description, icon, url, delay = 0 }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:border-violet-500 transition-all hover:bg-zinc-800/50 hover:scale-105 duration-300 h-full"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="flex items-start">
          <div className="mr-4 p-3 bg-violet-900/30 rounded-lg text-violet-400">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-violet-400">{username}</p>
            <p className="text-zinc-400 mt-2 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
