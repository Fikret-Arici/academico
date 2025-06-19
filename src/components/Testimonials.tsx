import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Elif Yılmaz",
      role: "YKS Öğrencisi",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Academico sayesinde YKS'de hedeflediğim puanı aldım. AI destekli çalışma planı ve koçumun desteği ile matematik notlarım %40 arttı. Gerçekten hayat değiştirici bir deneyim!"
    },
    {
      name: "Ahmet Kaya",
      role: "IELTS Adayı",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "İngilizce seviyemi B1'den C1'e çıkardım. Koçumun birebir desteği ve AI'ın önerdiği pratik egzersizler sayesinde IELTS'ten 7.5 aldım. Harika bir platform!"
    },
    {
      name: "Zeynep Demir",
      role: "Kariyer Değişimi",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Kariyer koçluğu programı ile hayalinizdeki işe geçiş yaptım. CV optimizasyonu ve mülakat hazırlığı ile özgüvenim arttı. 3 ay içinde yeni pozisyonuma başladım."
    },
    {
      name: "Mehmet Özkan",
      role: "Lise Öğrencisi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Matematik korkum vardı ama Academico ile bu korku tamamen geçti. Koçum çok sabırlı ve AI sistemi zayıf olduğum konuları tespit ederek özel çalışma planı hazırladı."
    },
    {
      name: "Ayşe Şen",
      role: "Üniversite Öğrencisi",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Yaşam koçluğu programı ile zaman yönetimi becerilerimi geliştirdim. Hem akademik başarım arttı hem de sosyal hayatım için daha fazla zaman buldum."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Öğrenci Yorumları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce öğrencimizin başarı hikayelerini keşfedin ve siz de bu başarının parçası olun
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-[#F5B041] opacity-20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* User Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#F5B041] shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#F5B041] fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </p>

                {/* User Info */}
                <div>
                  <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-[#C0392B] font-semibold">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#F5B041] text-[#1C1C1C] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#F5B041] text-[#1C1C1C] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#C0392B] scale-125' : 'bg-gray-300 hover:bg-[#F5B041]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 p-4 rounded-xl transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#C0392B] text-white shadow-lg' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
                />
                <div className="text-sm font-semibold">{testimonial.name}</div>
                <div className="text-xs opacity-75">{testimonial.role}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;