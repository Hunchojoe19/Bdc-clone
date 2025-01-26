import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      rating: "★★★★★",
      text: "Bitcoin.com made it so easy to buy crypto. The user interface is simple, and I love how quickly my transactions go through!",
      author: "Samuel M",
    },
    {
      rating: "★★★★",
      text: "Bitcoin.com has transformed my experience with cryptocurrency! The platform is user-friendly and my transactions are processed in no time.",
      author: "Rachel K",
    },
    {
      rating: "★★★★★",
      text: "Thanks to Bitcoin.com, I feel confident investing in crypto. The website is intuitive, and my transactions happen instantly!",
      author: "Rahim M",
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-12" data-aos="flip-left" data-aos-easing="ease-in-out"
     data-aos-duration="1500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Join the growing community of users who trust our platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                {testimonial.rating}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="text-gray-400 font-bold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;