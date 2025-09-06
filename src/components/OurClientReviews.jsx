import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin } from 'lucide-react';

const OurClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sonia Khan",
      designation: "Resident",
      location: "Faisal Town Phase 1",
      rating: 5,
      review: "The community is strong here. Last month, the park held a family event, and it was heartwarming to see everyone come together.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2022"
    },
    {
      id: 2,
      name: "Bilal Qureshi",
      designation: "Resident",
      location: "Faisal Hills",
      rating: 5,
      review: "It's not just about security guards at the gates; Faisal Town has CCTV everywhere. That kind of investment in safety is rare.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2023"
    },
    {
      id: 3,
      name: "Neha Shahid",
      designation: "Resident",
      location: "Faisal Margalla City",
      rating: 5,
      review: "The jogging tracks are wide enough to accommodate everyone. I don't have to dodge cyclists or strollers while running—what a relief!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2021"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      designation: "Investor",
      location: "Faisal Town Phase 2",
      rating: 5,
      review: "Outstanding investment opportunity with excellent returns. The infrastructure development and location make it a perfect choice for long-term investment.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2023"
    },
    {
      id: 5,
      name: "Fatima Ali",
      designation: "Resident",
      location: "Faisal Hills",
      rating: 5,
      review: "The customer service is exceptional. Any issues are resolved quickly, and the management is always responsive to residents' needs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2022"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating 
              ? 'text-amber-400 fill-amber-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
            <span className="mr-2">⭐</span>
            OUR TESTIMONIAL
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Client <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Reviews</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Client Reviews at Faisal Town highlight satisfaction with high-quality housing, 
            modern amenities, and exceptional customer service. Residents and investors 
            appreciate the company's timely delivery and well-planned communities.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div 
            className="overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 mx-auto max-w-4xl">
                    
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="text-center mb-8">
                      <StarRating rating={review.rating} />
                      <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-8">
                        "{review.review}"
                      </blockquote>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-center space-x-6">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-amber-100 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{review.name}</h4>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{review.designation}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm">Since {review.joinedYear}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-amber-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{review.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-amber-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-amber-500 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-amber-500 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-amber-500 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Community</h3>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Become part of Pakistan's most trusted real estate community. Experience the difference with Faisal Town.
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-white/25 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientReviews;








// import React from "react";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Yousaf",
//     role: "Resident",
//     rating: 3,
//     feedback:
//       "Faisal Town isn’t just about houses; it’s about well-planned, thought-out communities that feel alive and welcoming.",
//   },
//   {
//     name: "Saima Riaz",
//     role: "Resident",
//     rating: 5,
//     feedback:
//       "My favorite thing? The absence of noise pollution. It feels like Faisal Town is insulated from the chaos of the city.",
//   },
//   {
//     name: "Muzammil Shah",
//     role: "Resident",
//     rating: 5,
//     feedback:
//       "The playgrounds aren’t just for show—they’re designed with kids’ safety in mind. My son can play for hours worry-free.",
//   },
//   {
//     name: "Nida",
//     role: "Resident",
//     rating: 4,
//     feedback:
//       "Even the parking spaces are wide and organized. I never have trouble finding a spot, even during peak hours.",
//   },
// ];

// const ClientReviews = () => {
//   return (
//     <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12">
        
//       {/* Section Heading */}
//       {/* <div className="text-center mb-16">
//         <p className="text-sm uppercase text-amber-800 font-semibold tracking-wide mb-2">
//           Our Testimonial
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
//           Our Client Reviews
//         </h2>
//         <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
//           <span className="font-semibold text-gray-800">Client Reviews</span> at
//           Faisal Town highlight satisfaction with high-quality housing, modern
//           amenities, and exceptional customer service. Residents and investors
//           appreciate our timely delivery and well-planned communities.
//         </p>
//       </div> */}


// {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
//             <span className="mr-2">🏗️</span>
//             Our Testimonial
//           </div>
          
//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Our <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Client Reviews</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//             The success of any organization can be measured by the number of people responded. Hence, Faisal Town preserved all the time to get maximum positive response from the people around. Your interest and concern towards our projects have made our entire team more determined and we are putting our continuous efforts to elaborate the high-quality, feeling socialized to all of you.
//           </p>
//  </div> 


//       {/* Testimonials Grid */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {testimonials.map((t, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-8 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-xl font-bold text-gray-900 mb-1">{t.name}</h3>
//               <p className="text-sm text-amber-700 font-medium mb-3">{t.role}</p>

//               {/* Stars */}
//               <div className="flex items-center mb-4">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={20}
//                     className={`${
//                       i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>

//               {/* Feedback */}
//               <p className="text-gray-600 leading-relaxed">{t.feedback}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;
