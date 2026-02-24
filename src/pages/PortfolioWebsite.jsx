import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaReact, FaJs, FaCss3, FaHtml5, FaGitAlt, FaNodeJs, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiPostman, SiVite } from "react-icons/si";
import profileImage from "../assets/img/poto.jpg";
import Portfolio from "../assets/img/Cuplikan layar 2026-02-25 010305.png";
import TMDB from "../assets/img/Cuplikan layar 2026-02-25 010525.png";
import Karyawan from "../assets/img/Cuplikan layar 2026-02-25 010647.png";
import Song from "../assets/img/Cuplikan layar 2026-02-25 010815.png";
import Liver from "../assets/img/Cuplikan layar 2026-02-25 011131.png";
import PRISMA from "../assets/img/Cuplikan layar 2026-02-25 013531.png";
import { HiLightBulb, HiOutlineDesktopComputer, HiStar } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const PortfolioWebsite = () => {
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerLinks = ["Projects", "Home", "About", "Services"];

  const skills = [
    // Frontend Framework
    { name: "React JS", icon: FaReact, color: "text-cyan-400" },

    // Backend
    { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },

    // Core Languages
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },

    // Styling
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3, color: "text-blue-500" },

    // Build Tools
    { name: "Vite", icon: SiVite, color: "text-purple-400" },

    // Version Control
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },

    // API Testing
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const fullName = "Akmal Putra Utomo";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' | 'error' | null
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    // Credentials EmailJS
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          toast.success("Email Berhasil Dikirim");
          setSendStatus("success");
          formRef.current.reset();
          setTimeout(() => setSendStatus(null), 5000);
        },
        (error) => {
          toast.error("Gagal Mengirim Email");
          setSendStatus("error");
          setTimeout(() => setSendStatus(null), 5000);
        },
      )
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSendStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Exo']">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/akmalputrautomo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="GitHub">
                <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300" />
              </a>

              <a href="https://www.linkedin.com/in/akmal-putra-utomo-0960b5288" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300" />
              </a>

              <a href="https://www.instagram.com/akmalputraaaa" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg text-gray-400 tracking-wider mb-2 overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-typing">Akmal Putra Utomo</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white">FRONT END</span>
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">DEVELOPER</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Halo! Saya <span className="text-purple-400">Akmal Putra Utomo</span>, Front End Developer yang passionate dalam menciptakan website modern dan interaktif. Dengan React dan Tailwind CSS, saya menghadirkan pengalaman digital
                yang tidak hanya indah dilihat, tetapi juga nyaman digunakan.
              </p>

              <div className="flex gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">VIEW MY WORK</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>

                <button className="group relative px-8 py-4 border border-purple-500 rounded-lg font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-purple-500/10">
                  <span className="relative z-10">CONTACT ME</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            {/* Right Content - Layout Baru */}
            <div className="relative hidden md:block">
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Efek glow di belakang */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse" />

                <div className="relative flex flex-col items-center justify-center h-full">
                  {/* Foto Profil */}
                  <div className="w-48 h-48 rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                      <img src={profileImage} alt="Akmal Putra Utomo" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Nama dan Profesi - JELAS TERLIHAT */}
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">{displayName}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-pink-400 font-semibold text-xl tracking-wider">FRONT END DEVELOPER</p>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    </div>

                    {/* Skills Icons */}
                    <div className="flex justify-center gap-3 mt-6 flex-wrap">
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="React">
                        <FaReact className="text-cyan-400 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Next.js">
                        <SiNextdotjs className="text-white text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="JavaScript">
                        <FaJs className="text-yellow-400 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Tailwind CSS">
                        <SiTailwindcss className="text-cyan-300 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="HTML5">
                        <FaHtml5 className="text-orange-500 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="CSS3">
                        <FaCss3 className="text-blue-500 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Express.js">
                        <SiExpress className="text-gray-400 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Git">
                        <FaGitAlt className="text-orange-600 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="GitHub">
                        <FaGithub className="text-white text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Postman">
                        <SiPostman className="text-orange-500 text-xl" />
                      </div>
                      <div className="bg-gray-800/80 p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform" title="Vite">
                        <SiVite className="text-purple-400 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">ABOUT ME</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
              Hi, I'm <span className="text-purple-400 font-semibold">Akmal Putra Utomo</span>, a passionate Front End Developer with a keen eye for creating beautiful and functional web applications. I specialize in building responsive,
              user-friendly interfaces using modern technologies like React, Next.js, and Tailwind CSS.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              With a strong foundation in JavaScript and modern frameworks, I transform designs into interactive experiences that engage users and deliver results. I'm committed to writing clean, maintainable code and staying up-to-date
              with the latest industry trends.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {skills.map((skill, index) => (
                <div key={index} className="group relative p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-center">
                    <skill.icon className={`text-4xl ${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                    <div className="text-sm font-semibold text-white mb-1">{skill.name}</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MY SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">I provide high-quality services to help your business grow and succeed in the digital world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pixel Perfect */}
            <div className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <HiOutlineDesktopComputer className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">Pixel Perfect</h3>

                <p className="text-gray-400 leading-relaxed">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
              </div>
            </div>

            {/* High Quality */}
            <div className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <HiStar className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">High Quality</h3>

                <p className="text-gray-400 leading-relaxed">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
              </div>
            </div>

            {/* Awesome Idea */}
            <div className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <HiLightBulb className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">Awesome Idea</h3>

                <p className="text-gray-400 leading-relaxed">Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MY PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Here are some of my recent works that I've created using modern technologies</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - TMDB */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={TMDB} alt="TMDB" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">MOVIE LIST</h3>

                <p className="text-gray-400 mb-4">Movie discovery app with search functionality, trending movies, and detailed information including ratings, cast, and trailers.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">Redux</span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">Tailwind</span>
                </div>

                <div className="flex gap-3">
                  <a href="https://tmdb-upgrade.vercel.app/" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="https://github.com/akmalputrautomo/TMDB-UPGRADE" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Portfolio Website */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={Portfolio} alt="Portfolio Website" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">Portfolio Website</h3>

                <p className="text-gray-400 mb-4">Personal portfolio website with modern design, animations, and responsive layout.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">Tailwind</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">React-icons</span>
                </div>

                <div className="flex gap-3">
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Absensi Karyawan */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={Karyawan} alt="Absesni Karyawan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">Absensi Karyawan</h3>

                <p className="text-gray-400 mb-4">A web-based employee attendance system featuring check-in/check-out functionality, complete attendance history, and automated monthly reports exportable to Excel and PDF formats.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Express Js</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Vite Js</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Tailwind</span>
                </div>

                <div className="flex gap-3">
                  <a href="https://absensi-karyawan-one.vercel.app" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="https://github.com/akmalputrautomo/absensi-karyawan" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 - Song Request */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={Song} alt="Song" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">Song Request</h3>

                <p className="text-gray-400 mb-4">Song request application with song search, request queue, upvoting system, and live playlist management for DJs or event hosts.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Express Js</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">Tailwind</span>
                </div>

                <div className="flex gap-3">
                  <a href="https://rins-project.vercel.app" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="https://github.com/akmalputrautomo/song-request" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 - E-Learning */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={Liver} alt="Liver" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">E-Learning</h3>

                <p className="text-gray-400 mb-4">E-learning platform with online courses, video lessons, quizzes, and student progress tracking.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">API</span>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">Tailwind</span>
                  <span className="text-xs bg-yellow-500/20 text-orange-400 px-3 py-1 rounded-full">Redux</span>
                </div>

                <div className="flex gap-3">
                  <a href="https://tugaspwl-lake-xi.vercel.app" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="https://github.com/akmalputrautomo/finalproject" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 - Task Management */}
            <div className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />

              <div className="relative h-48 overflow-hidden">
                <img src={PRISMA} alt="Company Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  Prisma Saestu Wisesa
                </h3>

                <p className="text-gray-400 mb-4">Company profile website for Prisma Saestu Wisesa with information about services, portfolio, and professional consultation.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">Tailwind</span>
                </div>

                <div className="flex gap-3">
                  <a href="https://pt-prisma-saestu-wisesa.vercel.app" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    Live Demo <span>→</span>
                  </a>
                  <a href="https://github.com/akmalputrautomo/PT.PRISMA-SAESTU-WISESA" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          {/* <div className="text-center mt-12">
            <button className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors">View More Projects</button>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">LET'S WORK TOGETHER</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 mb-12">Have a project in mind? I'd love to hear about it!</p>

            {/* Status Messages */}
            {sendStatus === "success" && <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 animate-pulse">✅ Message sent successfully! I'll get back to you soon.</div>}

            {sendStatus === "error" && <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">❌ Failed to send message. Please try again or email me directly at akmal@example.com</div>}

            {/* Contact Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isSending}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto gap-2"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>

            {/* Additional contact info */}
            <div className="mt-12 text-gray-500 text-sm">
              <p className="mb-4">Or reach me directly at:</p>

              {/* Email */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <FaEnvelope className="text-purple-400 text-lg" />
                <a href="mailto:akmalputra040203@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  akmalputra040203@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-center gap-3">
                <FaWhatsapp className="text-green-400 text-lg" />
                <a href="https://wa.me/6285778235195" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  0857-7823-5195
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link, index) => (
              <a key={index} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-white transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/akmalputrautomo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="GitHub">
              <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>

            <a href="https://www.linkedin.com/in/akmal-putra-utomo-0960b5288" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>

            <a href="https://www.instagram.com/akmalputraaaa" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 Akmal Putra Utomo - Front End Developer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
