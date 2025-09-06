import React from 'react';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Faisal Town Phase 1',
      location: 'Islamabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      status: 'Completed',
      description: 'Premium residential community with modern infrastructure',
      category: 'Residential'
    },
    {
      id: 2,
      name: 'Faisal Town Phase 2',
      location: 'Rawalpindi',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      status: 'Under Development',
      description: 'Contemporary living spaces with world-class amenities',
      category: 'Residential'
    },
    {
      id: 3,
      name: 'Faisal Margalla City',
      location: 'Islamabad',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      status: 'Launched',
      description: 'Luxury development with scenic mountain views',
      category: 'Premium'
    },
    {
      id: 4,
      name: 'Faisal Hills Master Plan',
      location: 'Islamabad Region',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop',
      status: 'Planning Phase',
      description: 'Comprehensive master-planned community development',
      category: 'Master Plan'
    }
  ];

  const ProjectCard = ({ project, isLarge = false }) => (
    <div className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${isLarge ? 'col-span-2 row-span-2' : ''}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLarge ? 'h-64 lg:h-80' : 'h-72'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Completed' 
              ? 'bg-green-500 text-white' 
              : project.status === 'Under Development'
              ? 'bg-amber-500 text-white'
              : project.status === 'Launched'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-500 text-white'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/30">
            {project.category}
          </span>
        </div>

        {/* Project Info - Always Visible at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-2 text-amber-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{project.location}</span>
          </div>
          <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            {project.description}
          </p>
        </div>

        {/* Hover Overlay with Center Content */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="text-center transform scale-75 group-hover:scale-100 transition-all duration-500">
            <h3 className="text-white font-bold text-2xl mb-4">{project.name}</h3>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105">
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
            <span className="mr-2">🏗️</span>
            Faisal Town
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            The success of any organization can be measured by the number of people responded. Hence, Faisal Town 
            preserved all the time to get maximum positive response from the people around. Your interest and concern 
            towards our projects have made our entire team more determined and we are putting our continuous 
            efforts to elaborate the high-quality, feeling socialized to all of you.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-12">
          {/* Featured Large Project - Full Width */}
          <div className="w-full">
            <ProjectCard project={projects[3]} isLarge={true} />
          </div>
          
          {/* Regular Projects Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
            <p className="text-gray-600 font-medium">Happy Families</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600 font-medium">Projects Delivered</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;













// import React, { useState, useEffect } from 'react';

// const ProjectsSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [clickedIndex, setClickedIndex] = useState(null);

//   // Project images
//   const projects = [
//     {
//       id: 1,
//       name: "Faisal Town Phase 1",
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
//     },
//     {
//       id: 2,
//       name: "Faisal Margalla City",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
//     },
//     {
//       id: 3,
//       name: "Faisal Hills",
//       image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&crop=center",
//     },
//     {
//       id: 4,
//       name: "Faisal Commercial Hub",
//       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
//     }
//   ];

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % projects.length);
//       setHoveredIndex(null);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [projects.length]);

//   const handleReadMore = (index, projectName) => {
//     setClickedIndex(index);
//     console.log(`Read more about ${projectName}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 bg-blue-50">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         {/* <div className="text-lg md:text-xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-900 bg-clip-text text-transparent tracking-wider drop-shadow-md">
//   Faisal Town
// </div> */}
//  <p className="text-sm uppercase text-amber-800 font-semibold tracking-wide mb-2">
//           Faisal Town
//         </p>

//         <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">Our Projects</h2>
//         <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
//           The success of any organization can be assessed by the number of people responded. Hence, Faisal Town
//           preserves all the pride to get massive positive response from the people around...
//         </div>
//       </div>

//       {/* Simple Slider */}
//       <div className="relative max-w-3xl mx-auto">
//         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//           <div 
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {projects.map((project, index) => (
//               <div 
//                 key={project.id} 
//                 className={`w-full flex-shrink-0 relative transition-colors duration-500 
//                   ${clickedIndex === index ? "bg-yellow-400" : "bg-white"}`}
//               >
//                 <div 
//                   className="relative h-72 md:h-80 lg:h-96 cursor-pointer"
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover rounded-t-2xl"
//                   />
                  
//                   {/* Text overlay on hover */}
//                   {hoveredIndex === index && (
//                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-2xl">
//                       <div className="text-center">
//                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//                           {project.name}
//                         </h3>
//                         <button
//                           onClick={() => handleReadMore(index, project.name)}
//                           className="group relative overflow-hidden px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:border-amber-400 transition-all duration-500 font-medium text-sm"
//                         >
//                           <span className="relative z-10 flex items-center justify-center transition-colors duration-500 group-hover:text-slate-900">
//                             Read More
//                             <div className="ml-3 w-2 h-2 bg-current rounded-full group-hover:animate-pulse"></div>
//                           </span>
//                           <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsSlider;
