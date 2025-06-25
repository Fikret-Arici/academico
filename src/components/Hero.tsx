import React from 'react';
import { Brain, Target, BarChart3, Award, BookOpen, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B0B0B] via-[#6B1A1A] to-[#4B0B0B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#F5B041] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#C0392B] rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-[#F5B041] rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Yapay Zeka Destekli
            <span className="block text-[#F5B041]">Eğitim Yolculuğunuz</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kişiye özel koçluk ve eğitim paketleriyle başarıya ulaşın. 
            AI teknolojisi ile desteklenen öğrenme deneyimi.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              className="bg-[#F5B041] hover:bg-[#F39C12] text-[#1C1C1C] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById('paketler')?.offsetTop || 0,
                  behavior: 'smooth',
                });
                window.dispatchEvent(new Event('showAllPackages'));
              }}
            >
              Paketleri İncele
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Brain className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">AI Destekli Programlar</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Target className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">Kişiselleştirilmiş Ders Planları</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <BarChart3 className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">İlerleme Takibi</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Award className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">Sertifikalı Koçlar</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <BookOpen className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">Zengin İçerik Kütüphanesi</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                <Clock className="w-10 h-10 text-[#F5B041]" />
              </div>
              <span className="text-white/80 text-sm font-medium">Esnek Çalışma Saatleri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;