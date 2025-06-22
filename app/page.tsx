"use client"

import { useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Award,
  Users,
  GraduationCap,
  Code,
  User,
  Download,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["about", "experience", "education", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    // In a real implementation, this would download an actual PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You would replace this with your actual resume PDF path
    link.download = "Azhar_Bazla_Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-mono overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900 border-b-4 border-stone-600 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black text-stone-50 animate-pulse">AZHAR BAZLA</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-stone-50 hover:text-stone-300 font-bold transition-all duration-300 border-2 px-3 py-1 transform hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? "border-stone-300 bg-stone-700"
                      : "border-transparent hover:border-stone-300"
                  }`}
                >
                  {item.toUpperCase()}
                </a>
              ))}
              <Button
                onClick={handleDownloadResume}
                className="bg-stone-600 text-stone-50 border-2 border-stone-300 hover:bg-stone-300 hover:text-stone-900 font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                RESUME
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-50 border-2 border-stone-300 p-2 hover:bg-stone-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t-2 border-stone-600 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-3 mt-4">
                {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-50 hover:text-stone-300 font-bold border-2 border-transparent hover:border-stone-300 px-3 py-2 transition-all duration-200"
                  >
                    {item.toUpperCase()}
                  </a>
                ))}
                <Button
                  onClick={handleDownloadResume}
                  className="bg-stone-600 text-stone-50 border-2 border-stone-300 hover:bg-stone-300 hover:text-stone-900 font-bold w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD RESUME
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-stone-600 animate-bounce delay-100"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-stone-700 animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-stone-500 animate-bounce delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            className={`bg-stone-50 border-8 border-stone-900 p-8 transform transition-all duration-1000 ${
              isVisible ? "rotate-1 hover:rotate-0" : "rotate-12 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-stone-900 border-4 border-stone-600 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <User className="w-24 h-24 text-stone-50" />
              </div>
              <div className="flex-1">
                <h1 className="text-6xl font-black mb-4 text-stone-900">
                  <span className="inline-block animate-in slide-in-from-left duration-700">AZHAR</span>
                  <br />
                  <span className="text-stone-600 inline-block animate-in slide-in-from-right duration-700 delay-300">
                    BAZLA
                  </span>
                </h1>
                <p className="text-2xl font-bold mb-6 bg-stone-300 inline-block px-4 py-2 border-4 border-stone-900 transform -rotate-1 animate-in zoom-in duration-500 delay-500">
                  SOFTWARE ENGINEER | RPA DEVELOPER
                </p>
                <div className="flex items-center gap-2 text-lg font-bold mb-6 animate-in fade-in duration-500 delay-700">
                  <MapPin className="w-6 h-6" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <Button
                  onClick={handleDownloadResume}
                  className="bg-stone-900 text-stone-50 border-4 border-stone-600 hover:bg-stone-600 hover:border-stone-900 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom duration-500 delay-1000"
                >
                  <Download className="w-6 h-6 mr-3" />
                  DOWNLOAD RESUME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-50 mb-8 border-b-4 border-stone-300 pb-4 animate-in slide-in-from-left duration-500">
            CONTACT INFO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: "EMAIL", value: "azharbazla@gmail.com", href: "mailto:azharbazla@gmail.com" },
              { icon: Phone, label: "PHONE", value: "+6282226911016", href: "tel:+6282226911016" },
              {
                icon: Linkedin,
                label: "LINKEDIN",
                value: "/in/azharbazla",
                href: "https://linkedin.com/in/azharbazla",
              },
              { icon: Github, label: "GITHUB", value: "/azharbazla", href: "https://github.com/azharbazla" },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className={`bg-stone-50 border-4 border-stone-600 p-6 hover:bg-stone-300 transition-all duration-300 group transform hover:scale-105 hover:-rotate-1 animate-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <contact.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-bold text-sm mb-2">{contact.label}</p>
                <p className="font-black text-lg">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-stone-600 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-50 mb-8 border-b-4 border-stone-900 pb-4 animate-in slide-in-from-right duration-500">
            ABOUT ME
          </h2>
          <div className="bg-stone-50 border-8 border-stone-900 p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500 animate-in zoom-in duration-700 delay-200">
            <p className="text-xl font-bold leading-relaxed mb-6">
              Hi, I'm Azhar Bazla Rabbani, a Computer Science graduate from Universitas Sumatera Utara with a deep
              passion for
              <span className="bg-stone-300 px-2 py-1 mx-2 border-2 border-stone-900 animate-pulse">
                ROBOTIC PROCESS AUTOMATION (RPA)
              </span>
              I have professional experience as an Automation Engineer at PT Bank Mandiri, where I specialized in
              developing efficient test automation workflows and streamlining operational tasks using UiPath.
            </p>
            <p className="text-lg font-bold leading-relaxed">
              In addition to my RPA expertise, I have solid experience in software development—particularly in building
              web applications with RESTful APIs using frameworks like Quarkus and Spring Boot, and I'm proficient in
              Java. I am now seeking new opportunities in the tech industry, especially with companies that emphasize
              innovation in RPA and digital automation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-stone-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-900 mb-8 border-b-4 border-stone-900 pb-4 animate-in slide-in-from-left duration-500">
            WORK EXPERIENCE
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "AUTOMATION ENGINEER",
                company: "PT Bank Syariah Indonesia Tbk.",
                period: "APRIL 2025 - PRESENT",
                description:
                  "Currently working as an Automation Engineer, focusing on developing and implementing automation solutions to streamline banking operations and improve process efficiency.",
              },
              {
                title: "ADS QUALITY RATER",
                company: "Welocalize",
                period: "SEPTEMBER 2024 - PRESENT",
                description:
                  "Review and assess Google product ads against specific quality guidelines, ensuring ad content accurately reflects user search intent. Deliver detailed feedback on ad relevance and quality to improve campaign performance.",
              },
              {
                title: "AUTOMATION ENGINEER",
                company: "PT Bank Mandiri (Persero) Tbk.",
                period: "APRIL 2023 - MARCH 2025",
                description:
                  "Developed Test Automation Workflows using UiPath Studio for web and desktop applications. Created automation workflows for generating test data and conducting monthly health checks. Enhanced workflow quality for Robot Servers via Orchestrator.",
              },
              {
                title: "SOFTWARE ENGINEER",
                company: "PT Multi Kreasi Lestarindo",
                period: "OCTOBER 2022 - MARCH 2023",
                description:
                  "Worked as a Software Engineer developing applications and contributing to various software development projects using modern programming languages and frameworks.",
              },
              {
                title: "CORPORATE SECRETARY",
                company: "Pelindo 1",
                period: "OCTOBER 2020 - APRIL 2021",
                description:
                  "Managed comprehensive documentation, participated in meetings providing detailed minutes, oversaw document revisions, and delivered IT support addressing technical issues and system maintenance.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className={`bg-stone-900 border-4 border-stone-600 p-6 transform hover:scale-105 transition-all duration-300 hover:rotate-1 animate-in slide-in-from-right duration-500`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-black text-stone-50 mb-2 md:mb-0">{job.title}</h3>
                  <span className="bg-stone-300 text-stone-900 px-4 py-2 font-bold border-2 border-stone-50 animate-pulse">
                    {job.period}
                  </span>
                </div>
                <p className="text-xl font-bold text-stone-400 mb-4">{job.company}</p>
                <p className="text-stone-50 font-bold leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-900 mb-8 border-b-4 border-stone-600 pb-4 animate-in slide-in-from-right duration-500">
            EDUCATION
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "BACHELOR OF COMPUTER SCIENCE",
                school: "Universitas Sumatera Utara",
                year: "2017",
                details: "Computer Science Graduate • Strong Foundation in Programming",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-stone-900 border-4 border-stone-300 p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <GraduationCap className="w-12 h-12 text-stone-300 mb-4 animate-bounce" />
                <h3 className="text-xl font-black text-stone-50 mb-2">{edu.degree}</h3>
                <p className="text-lg font-bold text-stone-400 mb-2">{edu.school}</p>
                <p className="text-stone-300 font-bold mb-4">{edu.year}</p>
                <p className="text-stone-50 font-bold">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 bg-gradient-to-br from-stone-600 to-stone-300 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-8 h-8 bg-stone-900 opacity-20 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 bg-stone-900 opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-black text-stone-50 mb-8 border-b-4 border-stone-900 pb-4 animate-in slide-in-from-left duration-500">
            FEATURED PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "BANKING TEST AUTOMATION",
                tech: "UiPath, RE-Framework, Orchestrator",
                description:
                  "Comprehensive test automation workflows for banking applications with 5,000+ daily transactions.",
                demo: "#",
                repo: "#",
              },
              {
                title: "HEALTH CHECK AUTOMATION",
                tech: "UiPath, Robot Servers, Web/Mobile",
                description:
                  "Monthly automated health checks for application utilities with automated report generation.",
                demo: "#",
                repo: "#",
              },
              {
                title: "TEST DATA GENERATION",
                tech: "UiPath Studio, Performance Testing",
                description:
                  "Automated workflows for creating 1,000+ users and generating test data for performance testing.",
                demo: "#",
                repo: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-stone-50 border-8 border-stone-900 p-6 transform hover:rotate-2 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Code className="w-12 h-12 text-stone-900 mb-4 animate-pulse" />
                <h3 className="text-2xl font-black text-stone-900 mb-4">{project.title}</h3>
                <p className="bg-stone-300 text-stone-900 px-3 py-1 font-bold text-sm mb-4 inline-block border-2 border-stone-900">
                  {project.tech}
                </p>
                <p className="text-stone-900 font-bold mb-6 leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  <Button className="bg-stone-900 text-stone-50 border-4 border-stone-600 hover:bg-stone-600 hover:text-stone-50 font-bold transform hover:scale-105 transition-all duration-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DEMO
                  </Button>
                  <Button className="bg-stone-600 text-stone-50 border-4 border-stone-900 hover:bg-stone-900 hover:text-stone-50 font-bold transform hover:scale-105 transition-all duration-200">
                    <Github className="w-4 h-4 mr-2" />
                    CODE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-50 mb-8 border-b-4 border-stone-300 pb-4 animate-in slide-in-from-right duration-500">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "RPA & AUTOMATION",
                skills: ["UiPath", "RE-Framework", "Orchestrator", "Test Automation", "Process Automation"],
              },
              {
                category: "PROGRAMMING",
                skills: ["Java", "Visual Basic", "Python", "HTML", "RESTful APIs"],
              },
              {
                category: "FRAMEWORKS & TOOLS",
                skills: ["Quarkus", "Spring Boot", "Jira", "Robot Servers", "IBM Granite"],
              },
              {
                category: "SOFT SKILLS",
                skills: [
                  "Problem Solving",
                  "Team Collaboration",
                  "Documentation",
                  "Quality Assurance",
                  "Process Improvement",
                ],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className={`bg-stone-50 border-4 border-stone-600 p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-in slide-in-from-left duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-black text-stone-900 mb-6 bg-stone-300 px-4 py-2 border-2 border-stone-900 inline-block animate-pulse">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`bg-stone-900 text-stone-50 px-4 py-2 font-bold border-2 border-stone-600 transform hover:scale-105 transition-all duration-200 animate-in slide-in-from-right duration-300`}
                      style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 px-4 bg-stone-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-900 mb-8 border-b-4 border-stone-900 pb-4 animate-in slide-in-from-left duration-500">
            ORGANIZATIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "TECH COMMUNITY JAKARTA",
                role: "ACTIVE MEMBER",
                period: "2022 - PRESENT",
                description:
                  "Participate in local tech meetups and RPA community discussions. Share knowledge about automation technologies and best practices in software development.",
              },
            ].map((org, index) => (
              <div
                key={index}
                className={`bg-stone-900 border-4 border-stone-600 p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Users className="w-12 h-12 text-stone-300 mb-4 animate-bounce" />
                <h3 className="text-2xl font-black text-stone-50 mb-2">{org.name}</h3>
                <p className="text-lg font-bold text-stone-400 mb-2">{org.role}</p>
                <p className="text-stone-300 font-bold mb-4">{org.period}</p>
                <p className="text-stone-50 font-bold leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-16 px-4 bg-stone-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-stone-50 mb-8 border-b-4 border-stone-900 pb-4 animate-in slide-in-from-right duration-500">
            CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "DEVOPS CERTIFICATION",
                issuer: "Professional Academy",
                date: "2024",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "PYTHON FOR BEGINNERS",
                issuer: "Online Learning Platform",
                date: "2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "HTML CERTIFICATION",
                issuer: "Web Development Institute",
                date: "2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "CODE GENERATION AND OPTIMIZATION USING IBM GRANITE",
                issuer: "IBM",
                date: "2024",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className={`bg-stone-50 border-4 border-stone-900 p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-in slide-in-from-bottom duration-500 group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Certificate Image */}
                <div className="mb-6 overflow-hidden border-4 border-stone-900 transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-48 object-cover bg-stone-200"
                  />
                </div>

                <Award className="w-12 h-12 text-stone-900 mb-4 animate-pulse" />
                <h3 className="text-xl font-black text-stone-900 mb-4">{cert.name}</h3>
                <p className="text-lg font-bold text-stone-600 mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-stone-900 font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-stone-900 border-t-4 border-stone-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-50 font-bold text-lg animate-in fade-in duration-500">
            © 2024 AZHAR BAZLA RABBANI • BUILT WITH
            <span className="text-stone-300 mx-2 animate-pulse">PASSION</span>
            AND
            <span className="text-stone-400 mx-2 animate-pulse">CODE</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
