import React, { useState, useEffect } from 'react';
import { BookOpen, Target, Award, ArrowRight, ChevronDown, ChevronUp, Globe, Brain, Calculator, Pen, Music, Code, Users } from 'lucide-react';

// Eğitim paketi tipi tanımı
interface EducationPackage {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  category: string;
}

const Packages = () => {
  const [showAllEducation, setShowAllEducation] = useState(false);

  useEffect(() => {
    const handler = () => setShowAllEducation(true);
    window.addEventListener('showAllPackages', handler);
    return () => window.removeEventListener('showAllPackages', handler);
  }, []);

  const educationPackages: EducationPackage[] = [
    {
      title: "🎯 YKS Hazırlık Paketi",
      description: "Yapay zekâ destekli kişisel program ile üniversite sınavına hazırlanın",
      icon: <Target className="w-8 h-8" />,
      features: ["Her derse özel deneme analizleri", "Zayıf konuya odaklı çalışma planı", "AI destekli soru bankası", "Koçluk ve motivasyon takibi"],
      price: "₺1800/ay",
      category: "Sınav Hazırlık"
    },
    {
      title: "📚 LGS Hazırlık Paketi",
      description: "Yapay zekâ destekli kişisel program ile Lise sınavına hazırlanın",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Günlük performans takibi", "Psikolojik destek ve sınav koçluğu", "Deneme sınavı ve analizleri", "Öğrenciye özel birebir dersler"],
      price: "₺1800/ay",
      category: "Sınav Hazırlık"
    },
    {
      title: "👨‍🏫 Özel Ders Paketi",
      description: "İhtiyaca özel birebir öğretmen eşleşmesi ile kişiselleştirilmiş eğitim",
      icon: <Users className="w-8 h-8" />,
      features: ["Esnek gün ve saat seçimi", "Soru çözüm destek hattı", "İlerlemeni takip eden danışman", "Tüm derslerde uzman eğitmen kadrosu"],
      price: "₺650/seans",
      category: "Özel Ders"
    },
    {
      title: "İtalyanca Eğitimi",
      description: "A1'den C1'e kademeli seviye ilerlemesi ile İtalyan kültürünü keşfedin",
      icon: <Globe className="w-8 h-8" />,
      features: ["Günlük konuşma pratiği", "İtalyan kültürü ve yaşam tarzı", "Telaffuz odaklı eğitim", "Film ve müzikle öğrenme"],
      price: "₺999/seans",
      category: "Dil Eğitimi"
    },
    {
      title: "Almanca Eğitimi",
      description: "Grameri eğlenceli hale getiren dersler ile Almanca öğrenin",
      icon: <Globe className="w-8 h-8" />,
      features: ["Konuşma ve dinleme becerisi geliştirme", "Telc & Goethe sınavlarına hazırlık", "Kültürel içerikli materyaller", "Birebir interaktif seanslar"],
      price: "₺999/seans",
      category: "Dil Eğitimi"
    },
    {
      title: "Fransızca Eğitimi",
      description: "Günlük diyaloglarla pratik öğrenme ve Fransız aksanı eğitimi",
      icon: <Globe className="w-8 h-8" />,
      features: ["Fransız aksanı ve telaffuz eğitimi", "Kültürel içerikler ve videolar", "Dil bilgisi anlatımları sade ve etkili", "Her seviyeye uygun esnek program"],
      price: "₺999/seans",
      category: "Dil Eğitimi"
    },
    {
      title: "İngilizce Eğitimi",
      description: "Speaking club & canlı pratik ile İngilizce becerilerinizi geliştirin",
      icon: <Globe className="w-8 h-8" />,
      features: ["Akademik ve günlük İngilizce farkı", "Oyunlaştırılmış kelime çalışmaları", "Writing ödevlerine birebir geri bildirim", "Dinleme & okuma becerisi geliştirme"],
      price: "₺999/seans",
      category: "Dil Eğitimi"
    },
    
    {
      title: "🤖 Yapay Zekâya Giriş Dersi",
      description: "AI algoritmalarının temelleri ve gerçek dünya projeleriyle öğrenme",
      icon: <Brain className="w-8 h-8" />,
      features: ["AI algoritmalarının temelleri", "Gerçek dünya projeleriyle öğrenme", "Python ile pratik uygulamalar", "Makine öğrenmesi nedir?",],
      price: "₺800/seans",
      category: "Teknoloji"
    },
    {
      title: "🐍 Python Programlamaya Giriş",
      description: "Kodlama mantığını sıfırdan kavrama ve proje tabanlı öğrenme",
      icon: <Code className="w-8 h-8" />,
      features: ["Proje tabanlı öğrenme modeli", "Veri yapıları ve döngüler", "Basit yapay zekâ uygulamaları"],
      price: "₺800/seans",
      category: "Teknoloji"
    },
    {
      title: "Soru Çözüm Paketi",
      description: "Her ders için özel soru çözüm teknikleri ve pratik uygulamalar",
      icon: <Calculator className="w-8 h-8" />,
      features: ["Konu bazlı soru çözüm teknikleri", "Hızlı çözüm yöntemleri", "Tuzak sorulara karşı stratejiler", "Soru analizi ve çözüm mantığı"],
      price: "₺1000/ay",
      category: "Soru Çözüm"
    },
    {
      title: "Üniversite Tercih Danışmanlığı",
      description: "Kişisel ilgi ve yeteneklerinize uygun üniversite ve bölüm seçimi",
      icon: <Target className="w-8 h-8" />,
      features: ["Kişilik ve yetenek analizi", "Bölüm ve meslek tanıtımları", "Üniversite araştırma ve karşılaştırma", "Kariyer planlama ve hedef belirleme"],
      price: "₺500/seans",
      category: "Danışmanlık"
    }
  ];

  // Show first 6 packages initially
  const displayedEducationPackages = showAllEducation 
    ? educationPackages 
    : educationPackages.slice(0, 6);

  const whatsappLink = "https://wa.me/905443731454";

  const EducationPackageCard = ({ pkg }: { pkg: EducationPackage }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 group">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
          {pkg.icon}
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-[#1C1C1C] group-hover:text-[#C0392B] transition-colors duration-300">
                {pkg.title}
              </h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {pkg.category}
              </span>
            </div>
            <p className="text-[#F5B041] font-semibold text-lg">{pkg.price}</p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
      
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-[#F5B041] rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-[#C0392B] to-[#E74C3C] hover:from-[#A93226] hover:to-[#C0392B] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
      >
        Detayları Öğren
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );

  return (
    <section id="paketler" className="py-20 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Packages */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Eğitim Paketleri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI destekli kişiselleştirilmiş eğitim programları ile hedeflerinize ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEducationPackages.map((pkg, index) => (
            <EducationPackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Show All Button */}
        {!showAllEducation && educationPackages.length > 6 && (
          <div className="text-center mb-20">
            <button 
              onClick={() => setShowAllEducation(true)}
              className="bg-gradient-to-r from-[#F5B041] to-[#F39C12] hover:from-[#F39C12] hover:to-[#E67E22] text-[#1C1C1C] font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
            >
              Tümünü Gör ({educationPackages.length - 6} paket daha)
              <ChevronDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllEducation && (
          <div className="text-center mb-20">
            <button 
              onClick={() => setShowAllEducation(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center mx-auto"
            >
              Daha Az Göster
              <ChevronUp className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}

        {/* Coaching Packages */}
        {/* Koçluk Paketleri bölümü kaldırıldı */}
      </div>
    </section>
  );
};

export default Packages;