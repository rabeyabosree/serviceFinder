import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      img: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      review: "Excellent service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://i.pravatar.cc/150?img=2",
      rating: 4,
      review: "Quick response and professional work.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      img: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      review: "Very knowledgeable and patient.",
    }
  ];

  return (
    <div className="py-16 bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Testimonials
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* will be with slider */}
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col"
          >
            {/* Image + Name + Rating */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.name}
                </h3>
                <div className="flex mt-1">
                  {"⭐".repeat(t.rating)}
                </div>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-700">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;





