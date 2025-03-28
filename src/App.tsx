import React from 'react';
import { Github, Linkedin, Mail, Brain, Sparkles, Code2, ExternalLink, Terminal, Cpu, Database } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Equity Research Chat Tool",
    description: "Developed an equity research tool using Python, Streamlit, and LangChain that indexes financial news with a robust custom Q&A chain for efficient semantic search.",
    technologies: ["Langchain", "HuggingFace", "Faiss", "NLP"],
    videoUrl: "https://www.youtube.com/embed/your-video-id-1",
    githubUrl: "https://github.com/rishavkr101/Equity_Reserach_Tool",
    demoUrl: "https://rishavkr101-equity-reserach-tool-app-6ljxxu.streamlit.app/",
    icon: <Brain className="w-6 h-6 text-accent" />
  },
  {
    title: "Potato Disease Classification",
    description: "Farmers face significant economic losses and crop waste every year due to various potato plant diseases. We propose using CNN-based image classification to detect these diseases from images.",
    technologies: ["Python",  "Tf-serving", "FastAPI"],
    videoUrl: "https://www.youtube.com/embed/your-video-id-2",
    githubUrl: "https://github.com/rishavkr101/Potato-Disease-Classification",
    demoUrl: "https://demo-url-2.com",
    icon: <Terminal className="w-6 h-6 text-accent" />
  },
  {
    title: "Audio_Classification",
    description: " This project is about developing a deep learning model to automatically recognise and categorise different sounds based on their extracted features.",
    technologies: ["Tensor-flow", "ANN", "Multi-class Classification"],
    videoUrl: "https://www.youtube.com/embed/your-video-id-3",
    demoUrl: "https://demo-url-3.com",
    githubUrl: "https://github.com/rishavkr101/Audio-Classification_DeepLearning_project",
    icon: <Database className="w-6 h-6 text-accent" />
  }
];

function App() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 grid-rows-8 gap-4 h-full opacity-10">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-accent/30 rounded-full animate-pulse-slow" style={{
                animationDelay: `${i * 0.1}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-32 relative">
          <div className="flex flex-col items-center text-center">
            <Cpu className="w-24 h-24 mb-8 text-accent animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              AI/ML Developer Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-300">
              Crafting intelligent solutions at the intersection of artificial intelligence and machine learning
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/rishavkr101" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-accent">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/rishav-kumar-228942272/" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-accent">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:rishavroy39rk@example.com" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-accent">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-accent" />
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
              className="bg-dark-lighter rounded-2xl overflow-hidden border border-primary/20 hover:neon-border transition-all duration-500 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  {project.icon}
                  <span className="gradient-text">{project.title}</span>
                </h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                
                {/* Video Section */}
                <div className="aspect-video mb-4 rounded-xl overflow-hidden border border-accent/20">
                  <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-accent rounded-full text-xs border border-primary/30
                          hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-primary/20">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300 text-sm bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 hover:border-accent/50"
                    >
                      <Code2 className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300 text-sm bg-primary/10 px-4 py-2 rounded-lg border border-primary/30 hover:border-accent/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter text-gray-300 py-12 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">
            © 2024 Rishav kumar <span className="text-accent">♦</span> 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
