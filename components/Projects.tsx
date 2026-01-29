import React from 'react';
import { Github, ExternalLink, Download } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, featuring full-stack applications, AI integrations, and responsive designs.
            Feel free to download the source code or assets where available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-dark text-xs text-gray-300 rounded-md border border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-dark text-xs text-gray-300 rounded-md border border-gray-700">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      download
                      className="flex items-center space-x-1 text-xs font-medium text-primary hover:text-blue-400 transition-colors"
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;