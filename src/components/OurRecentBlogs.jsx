import React from 'react';
import { Calendar, MessageCircle, User, ArrowRight, Clock, Tag } from 'lucide-react';

const OurRecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Computerized Balloting will be held on 6th Mar 2022",
      excerpt: "Event Computerized Balloting will be held on 6th Mar 2022 Author: admin Dear",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "December 19, 2024",
      author: "Admin",
      comments: 0,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "The Auto Car Show at Faisal Hills was a paradise for car enthusiasts.",
      excerpt: "On September 30, 2024, Faisal Town Management organized an exhilarating Auto Car Show at the",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "January 7, 2025",
      author: "Admin",
      comments: 0,
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Lighting Up the Sky with Patriotism! Spectacular Independence Day Fireworks at Faisal Hills",
      excerpt: "On this 14th August, Faisal Town management proudly celebrated Pakistan's Independence Day with a spectacular",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "January 7, 2025",
      author: "Admin",
      comments: 0,
      readTime: "4 min read"
    }
  ];

  const BlogCard = ({ blog, featured = false }) => (
    <article className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
      featured ? 'md:col-span-2 lg:col-span-1' : ''
    }`}>
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            featured ? 'h-80' : 'h-64'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {blog.category}
          </span>
        </div>
        
        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30">
            <Clock className="w-3 h-3 mr-1" />
            {blog.readTime}
          </span>
        </div>

        {/* Hover Read More Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300 transform scale-90 group-hover:scale-100">
            Read Article
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4" />
            <span>{blog.comments === 0 ? 'No Comments' : `${blog.comments} Comments`}</span>
          </div>
        </div>

        {/* Blog Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {blog.title}
        </h3>

        {/* Blog Excerpt */}
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300 group/link">
            <span>READ MORE</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </button>
          
          <div className="text-sm text-gray-400">
            {blog.readTime}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
            <span className="mr-2">📝</span>
            LATEST BLOG
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Recent <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Blogs</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our Recent Blogs at Faisal Town cover the latest updates on real estate trends, 
            investment tips, and in-depth insights into the company's housing projects. These 
            blogs aim to keep readers informed about the property market and provide valuable 
            advice for potential buyers and investors.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              featured={index === 0}
            />
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Latest News</h3>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on real estate trends, 
            investment opportunities, and exclusive insights from Faisal Town.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105">
            <span>View All Blogs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurRecentBlogs;











// import React from "react";

// const blogs = [
//   {
//     id: 1,
//     category: "News & Events",
//     title: "Computerized Balloting will be held on 6th Mar 2022",
//     description:
//       "Event Computerized Balloting will be held on 6th Mar 2022 Author: admin Dear",
//     date: "December 18, 2024",
//     comments: "No Comments",
//     image:
//       "https://faisaltown.com.pk/wp-content/uploads/2024/12/news-banner-470x470-1-300x300.jpg",
//   },
//   {
//     id: 2,
//     category: "News & Events",
//     title: "Faisal Town New Year Family Gala 2024",
//     description:
//       "Faisal Town Management celebrated the arrival of 2025 with an unforgettable New Year Family Gala.",
//     date: "January 7, 2025",
//     comments: "No Comments",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq02YnDe-BctjbuijdzO4YZFs0LKNSgJBk8A&s",
//   },
//   {
//     id: 3,
//     category: "Faisal Margalla City",
//     title:
//       "Discover the Charm of Faisal Margalla City (FMC) – A Project of Faisal Town Private Limited",
//     description:
//       "Faisal Margalla City (FMC) is a premier residential project by Faisal Town Private Limited.",
//     date: "January 20, 2025",
//     comments: "No Comments",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyYmC-fvGChnNnlnLWY9o4Ik0G3gwbjj-hQ&s",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 lg:px-8">

//         {/* Header */}

//         <div className="text-center mb-14">
//           <p className="text-sm font-semibold text-amber-800 uppercase tracking-widest">
//             Latest Blog
//           </p>
//           <h2 className="text-4xl font-bold text-yellow-500 mt-2">
//             Our Recent Blogs
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Stay updated with the latest real estate trends, investment tips,
//             and insights into Faisal Town’s housing projects. Our blogs aim to
//             provide valuable advice for potential buyers and investors.
//           </p>
//         </div>
        

//         {/* Blog Cards */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full uppercase">
//                   {blog.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition">
//                   {blog.title}
//                 </h3>
//                 <p className="mt-3 text-gray-600 flex-grow">
//                   {blog.description}
//                 </p>

//                 {/* Date + Comments */}
//                 <div className="mt-5 flex justify-between items-center text-sm text-gray-500">
//                   <span>{blog.date}</span>
//                   <span>{blog.comments}</span>
//                 </div>

//                 {/* Button stays at bottom */}
//                 <button className="mt-4 inline-block text-amber-600 font-medium hover:underline">
//                   Read More »
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;








