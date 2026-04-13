import React, { useState} from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import {
  Mail,
  ExternalLink,
  Globe,
  CheckCircle2,
  Terminal,
  Smartphone,
  Zap,
  Download,
} from 'lucide-react';

import photo from "../public/picture.jpg"


const CV_HREF = 'Biruk Mesfin CV .docx';
const CV_DOWNLOAD_NAME = 'Biruk-Mesfin-CV.pdf';
const PROFILE_IMAGE_SRC = photo
const PROFILE_IMAGE_ALT = 'Biruk Mesfin';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [profileImageError, setProfileImageError] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // UPDATED PROJECTS DATA BASED ON USER INPUT
  const projects = [
    {
      id: 1,
      title: "MERN Stack Blog Engine",
      category: "fullstack",
      description: "A complete content management system with markdown support, user authentication, and real-time comments.",
      features: ["JWT & Cookie Auth", "Rich Text Editor", "Image Uploads", "SEO Optimized Meta Tags"],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      color: "from-emerald-500 to-teal-600",
      images: [
        "/Blog-website-Mern-stack/Screenshot 2026-04-13 111236.png",
        "/Blog-website-Mern-stack/Screenshot 2026-04-13 111326.png",
        "/Blog-website-Mern-stack/Screenshot 2026-04-13 112904.png"
      ],
      link: "https://github.com/formajesty/Blog-website-Mern-stack"
    },
    {
      id: 2,
      title: "Food Delivery Mobile App",
      category: "mobile",
      description: "Cross-platform mobile application for real-time food ordering and delivery tracking.",
      features: [ "Push Notifications", "Expo Managed Workflow"],
      tech: ["React Native", "Expo", "App Write", "Node.js"],
      color: "from-orange-500 to-red-600",
      images: [
        "Login.jpg","Home.jpg","Search.jpg"
      ],
      link: "https://github.com/formajesty/Food-Delivery-mobile-application"
    },
    {
      id: 3,
      title: "Online Exam Portal",
      category: "next",
      description: "High-performance online examination system with identity verification and real-time proctoring.",
      features: ["Identity Verification", "Timer Management", "Result auto-grading", "Admin Dashboard"],
      tech: ["Next.js 15", "TypeScript", "PostgreSQL", "tRPC"],
      color: "from-blue-500 to-indigo-600",
      images: [
        "/Online Exam Portal/Home.png",
        "/Online Exam Portal/Instructions.png",
        "/Online Exam Portal/Identity verification.png",
        "/Online Exam Portal/Choose Exam.png",
        "/Online Exam Portal/Available Exams.png",
        "/Online Exam Portal/Examination page.png"
      ],
      link: "https://github.com/formajesty/Online-Exam-Portal"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab || (activeTab === 'mobile' && p.tech.includes('React Native')) || (activeTab === 'fullstack' && p.category === 'fullstack'));

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 selection:bg-blue-500/30 font-sans">
      
      {/* Header / Hero */}
      <header className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" aria-hidden />
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
                {!profileImageError ? (
                  <img
                    src={PROFILE_IMAGE_SRC}
                    alt={PROFILE_IMAGE_ALT}
                    width={224}
                    height={288}
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={() => setProfileImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">B</div>
                )}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Biruk Mesfin <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Full-Stack Software Engineer</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
              Specializing in building high-performance web and mobile ecosystems. 
              Architecting with <span className="text-slate-200 font-medium">Next.js 15, tRPC</span>, and the <span className="text-slate-200 font-medium">MERN Stack</span> to solve real-world problems.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:mbiruk118@email.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all text-blue-400" title="Email Me"><Mail size={20} /></a>
              <a href="github/formajesty" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all" title="GitHub Profile" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/biruk-mesfin-279b56307" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all text-blue-500" title="LinkedIn Profile" aria-label="LinkedIn"><FaLinkedinIn className="w-5 h-5" /></a>
              <a
                href={CV_HREF}
                download={CV_DOWNLOAD_NAME}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-emerald-500 transition-all"
              >
                <Download size={18} strokeWidth={2.25} aria-hidden />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Highlight */}
      <section className="py-12 px-6 border-y border-slate-900 bg-slate-900/20">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12">
          {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'GSAP', 'PostgreSQL', 'tRPC', 'React Native'].map((skill) => (
            <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full border border-slate-800/50 text-sm font-semibold text-slate-400">
              <Zap size={14} className="text-yellow-500" />
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Technical Portfolio</h2>
              <p className="text-slate-500">Selected work spanning Web, Mobile, and Backend</p>
            </div>
            
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              {[
                {id: 'all', label: 'All'},
                {id: 'fullstack', label: 'Full-Stack'},
                {id: 'next', label: 'Next.js'},
                {id: 'mobile', label: 'Mobile'}
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all uppercase tracking-wider ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col shadow-2xl cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentSlide(0);
                }}
              >
                {/* Project Image */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        {project.images.slice(0, 3).map((_, idx) => (
                          <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
                        ))}
                        {project.images.length > 3 && (
                          <span className="text-[10px] text-white/70 ml-1">+{project.images.length - 3}</span>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Project Header Gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      {project.category === 'mobile' ? <Smartphone size={18} className="text-orange-400" /> : <Globe size={18} className="text-blue-400" />}
                    </div>
                    <a href={`${project.link}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-800 text-[10px] font-bold text-blue-400 rounded-md uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2 underline underline-offset-8 decoration-blue-600">Development Environment</h2>
          </div>
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-3 text-[10px] text-slate-500 font-mono tracking-widest uppercase italic">Ubuntu-Server-Addis</span>
              </div>
              <Terminal size={14} className="text-slate-600" />
            </div>
            <div className="p-8 font-mono text-sm space-y-3">
              <div className="flex gap-3">
                <span className="text-emerald-500">biruk@unity:~$</span>
                <span className="text-slate-200 underline">ls -a skills/core</span>
              </div>
              <p className="text-slate-400 pl-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <span>.TypeScript</span>
                <span>.NextJS_15</span>
                <span>.Docker</span>
                <span>.PostgreSQL</span>
                <span>.tRPC</span>
                <span>.Expo</span>
                <span>.Tailwind</span>
                <span>.GSAP</span>
              </p>
              <div className="flex gap-3 pt-4">
                <span className="text-emerald-500">biruk@unity:~$</span>
                <span className="text-slate-200 underline">check-readiness --project Ethiopia-2026</span>
              </div>
              <p className="text-blue-400 animate-pulse">[READY] - System Optimized for Local Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className={`h-2 w-full bg-gradient-to-r ${selectedProject.color}`}></div>
            <div className="p-8">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative">
                  <img 
                    src={selectedProject.images[currentSlide]} 
                    alt={selectedProject.title}
                    className="w-full max-w-sm h-auto rounded-lg mb-6 mx-auto"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide((currentSlide - 1 + selectedProject.images.length) % selectedProject.images.length); }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      </button>
                      <button 
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide((currentSlide + 1) % selectedProject.images.length); }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                      <div className="flex justify-center gap-2 mt-4">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-blue-500' : 'bg-slate-600'}`}
                            onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-500">
                  No images available
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-slate-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-800 text-xs font-bold text-blue-400 rounded-md uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-6 mb-8 text-slate-500">
          <a href="mailto:mbiruk118@email.com" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all text-blue-400" title="Email Me"><Mail size={20} /></a>
              <a href="https://www.github.com/formajesty" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all" title="GitHub Profile" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/biruk-mesfin-279b56307" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all text-blue-500" title="LinkedIn Profile" aria-label="LinkedIn"><FaLinkedinIn className="w-5 h-5" /></a>
          </div>
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
            Handcrafted by Biruk Mesfin • Built with Next.js Architecture
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
