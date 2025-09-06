
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight, Play, Building, Users, Award, MapPin } from 'lucide-react';

const HeaderHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Projects', 
      href: '/projects',
      dropdown: [
        { name: 'Faisal Town', href: '/projects/faisal-town' },
        { name: 'Faisal Hills', href: '/projects/faisal-hills' },
        { name: 'Faisal Margalla City', href: '/projects/faisal-margalla-city' },
        { name: 'All Projects', href: '/projects' }
      ]
    },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Member Portal', href: '/portal' }
  ];

  const stats = [
    { icon: Building, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '50K+', label: 'Happy Families' },
    { icon: Award, value: '100+', label: 'Projects Delivered' },
    { icon: MapPin, value: '15+', label: 'Prime Locations' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Building className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">FAISALTOWN</h1>
                <p className="text-xs text-amber-400 font-medium">Building Better Futures</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      item.active 
                        ? 'text-amber-400 bg-amber-400/10' 
                        : 'text-white hover:text-amber-400 hover:bg-white/5'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-2 animate-in slide-in-from-top-5 duration-200">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.href}
                          className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 font-medium"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-3 text-white hover:text-amber-400 hover:bg-white/10 rounded-lg transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>
             
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top-5 duration-300">
              <div className="px-6 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      item.active 
                        ? 'text-amber-400 bg-amber-400/10' 
                        : 'text-white hover:text-amber-400 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold mt-4">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
                  🏆 Pakistan's Leading Real Estate Developer
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Faisal Town
                  <span className="block text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text">
                    Group
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Faisal Town stands as a beacon of innovation and excellence in Pakistan's real estate industry. 
                  Under the visionary leadership of Chaudhry Abdul Majeed, the company has emerged as one of the 
                  fastest-growing real estate enterprises in the country.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Each project embodies a commitment to creating affordable yet luxurious spaces that elevate lifestyles. 
                  With transparency, inclusivity, and customer satisfaction at its core, Faisal Town Group is more than 
                  just a developer - it's a partner in building better futures.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group flex items-center justify-center space-x-3 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                  <span>Member Portal</span>
                  <Play className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-white/60 text-sm font-medium">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;










// import React, { useState, useEffect, useRef } from 'react';
// import { Search, Menu, X, ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// const FaisalTownHero = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef(null);

//   // Professional video sources - replace with your actual videos
//   const videoSources = [
//     {
//       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       title: 'Residential Projects'
//     },
//     {
//       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//       title: 'Commercial Developments'
//     },
//     {
//       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       title: 'Luxury Communities'
//     }
//   ];

//   // Auto-cycle videos every 15 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isVideoPlaying) {
//         setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
//       }
//     }, 15000);
//     return () => clearInterval(interval);
//   }, [isVideoPlaying]);

//   // Handle video ref updates
//   useEffect(() => {
//     if (videoRef.current) {
//       if (isVideoPlaying) {
//         videoRef.current.play().catch(console.error);
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isVideoPlaying, currentVideoIndex]);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleVideo = () => setIsVideoPlaying(!isVideoPlaying);
//   const toggleMute = () => setIsMuted(!isMuted);

//   const changeVideo = (index) => {
//     setCurrentVideoIndex(index);
//     if (videoRef.current) {
//       videoRef.current.load();
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-slate-900">
//       {/* Full-Screen Video Background */}
//       <div className="absolute inset-0 w-full h-full">
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
//           autoPlay
//           muted={isMuted}
//           loop
//           playsInline
//           preload="metadata"
//           onLoadedData={() => {
//             if (videoRef.current && isVideoPlaying) {
//               videoRef.current.play().catch(console.error);
//             }
//           }}
//         >
//           <source src={videoSources[currentVideoIndex].src} type="video/mp4" />
//           <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
//         </video>
        
//         {/* Professional Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
//         {/* Subtle Pattern Overlay */}
//         <div className="absolute inset-0 opacity-[0.05]" 
//              style={{
//                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//              }}>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="relative z-50 w-full">
//         <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//               <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 group-hover:border-white/30 transition-all duration-300">
//                 <div className="w-8 h-8 lg:w-10 lg:h-10">
//                   <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
//                     <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.8L18 12v7h-2v-6H8v6H6v-7l6-6.2z"/>
//                     <path d="M9 16h6v1H9v-1zm0-2h6v1H9v-1z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">FAISALTOWN</h1>
//               <p className="text-xs text-amber-300 tracking-widest font-medium">PRIVATE LIMITED</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <a href="#" className="text-amber-300 hover:text-amber-200 font-medium transition-all duration-300 relative group">
//               Home
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <a href="#" className="text-white hover:text-amber-300 font-medium transition-all duration-300 relative group">
//               About Us
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
//             </a>
            
//             {/* Projects Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-white hover:text-amber-300 font-medium transition-all duration-300 relative">
//                 Projects 
//                 <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
//               </button>
//               <div className="absolute top-full left-0 mt-3 w-56 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                 <div className="p-2">
//                   <a href="#" className="block px-4 py-3 text-white hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-500/20 rounded-xl transition-all duration-200">Residential Projects</a>
//                   <a href="#" className="block px-4 py-3 text-white hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-500/20 rounded-xl transition-all duration-200">Commercial Spaces</a>
//                   <a href="#" className="block px-4 py-3 text-white hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-500/20 rounded-xl transition-all duration-200">Mixed Developments</a>
//                 </div>
//               </div>
//             </div>
            
//             {['Downloads', 'Contact Us', 'Blogs', 'Member Portal'].map((item) => (
//               <a key={item} href="#" className="text-white hover:text-amber-300 font-medium transition-all duration-300 relative group">
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>

//           {/* Search and Mobile Menu */}
//           <div className="flex items-center space-x-3">
//             <button className="group p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
//               <Search className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>
            
//             <button 
//               onClick={toggleMenu}
//               className="lg:hidden group p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
//             >
//               {isMenuOpen ? 
//                 <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" /> : 
//                 <Menu className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//               }
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       <div className={`lg:hidden absolute top-20 inset-x-4 z-50 transition-all duration-300 ${
//         isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
//       }`}>
//         <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
//           <div className="p-6 space-y-1">
//             {['Home', 'About Us', 'Projects', 'Downloads', 'Contact Us', 'Blogs', 'Member Portal'].map((item, index) => (
//               <a 
//                 key={item} 
//                 href="#" 
//                 className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
//                   item === 'Home' 
//                     ? 'text-amber-300 bg-gradient-to-r from-amber-400/20 to-orange-500/20' 
//                     : 'text-white hover:bg-white/10 hover:text-amber-300'
//                 }`}
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Hero Content */}
//       <div className="relative z-40 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 text-center">
//         {/* Hero Title */}
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
//             <span className="inline-block opacity-0 animate-fadeInUp">Faisal Town</span>
//             <br />
//             <span className="inline-block opacity-0 animate-fadeInUp animation-delay-300 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
//               Group
//             </span>
//           </h1>
//         </div>

//         {/* Description */}
//         <div className="max-w-4xl mx-auto mb-12 opacity-0 animate-fadeInUp animation-delay-600">
//           <p className="text-lg lg:text-xl xl:text-2xl text-slate-200 leading-relaxed font-light">
//             Faisal Town stands as a beacon of innovation and excellence in Pakistan's real estate industry. Under 
//             the visionary leadership of Chaudhry Abdul Majeed, the company has emerged as one of the fastest-
//             growing real estate enterprises in the country. Each project embodies a commitment to creating 
//             affordable yet luxurious spaces that elevate lifestyles. With transparency, inclusivity, and customer 
//             satisfaction at its core, Faisal Town Group is more than just a developer – it's a partner in building 
//             better futures.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 mb-16 opacity-0 animate-fadeInUp animation-delay-900">
//           <button className="group relative overflow-hidden px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:border-amber-400 transition-all duration-500 font-medium text-lg">
//             <span className="relative z-10 flex items-center justify-center transition-colors duration-500 group-hover:text-slate-900">
//               LEARN MORE
//               <div className="ml-3 w-2 h-2 bg-current rounded-full group-hover:animate-pulse"></div>
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//           </button>
          
//           <button className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 rounded-full hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-500 font-medium text-lg">
//             <span className="relative z-10 flex items-center justify-center">
//               Member Portal
//               <div className="ml-3 w-2 h-2 bg-current rounded-full group-hover:animate-bounce"></div>
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           </button>
//         </div>
//       </div>

//       {/* Video Controls */}
//       <div className="absolute bottom-6 right-6 z-50 flex items-center space-x-3">
//         <button 
//           onClick={toggleVideo}
//           className="group p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/60 transition-all duration-300"
//         >
//           {isVideoPlaying ? 
//             <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" /> : 
//             <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//           }
//         </button>
        
//         <button 
//           onClick={toggleMute}
//           className="group p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/60 transition-all duration-300"
//         >
//           {isMuted ? 
//             <VolumeX className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" /> : 
//             <Volume2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//           }
//         </button>

//         {/* Video Selection Dots */}
//         <div className="flex space-x-2 ml-2">
//           {videoSources.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => changeVideo(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentVideoIndex 
//                   ? 'bg-amber-400 scale-125' 
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//               title={videoSources[index].title}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
//         <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-pulse">
//           <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 1s ease-out forwards;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
        
//         .animation-delay-900 {
//           animation-delay: 0.9s;
//         }
        
//         /* Ensure full width and height */
//         * {
//           box-sizing: border-box;
//         }
        
//         /* Responsive video scaling */
//         @media (max-width: 768px) {
//           video {
//             object-position: center center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FaisalTownHero;