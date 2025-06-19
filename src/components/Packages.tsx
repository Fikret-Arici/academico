import React, { useState, useEffect } from 'react';
import { BookOpen, Target, Users, Award, ArrowRight, ChevronDown, ChevronUp, Globe, Brain, Calculator, Pen, Music, Code } from 'lucide-react';

const Packages = () => {
  const [showAllEducation, setShowAllEducation] = useState(false);

  useEffect(() => {
    const handler = () => setShowAllEducation(true);
    window.addEventListener('showAllPackages', handler);
    return () => window.removeEventListener('showAllPackages', handler);
  }, []);

  const educationPackages = [
    {
      title: "YKS Hazırlık Paketi",
      description: "Üniversite sınavına hazırlık için kapsamlı AI destekli program",
      icon: <Target className="w-8 h-8" />,
      features: ["Kişisel çalışma planı", "AI soru bankası", "Performans analizi"],
      price: "₺299/ay",
      category: "Sınav Hazırlık"
    },
    {
      title: "LGS Yaz Kampı",
      description: "Lise giriş sınavı için yoğun yaz hazırlık programı",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Günlük 4 saat ders", "Mock sınavlar", "Birebir rehberlik"],
      price: "₺199/ay",
      category: "Sınav Hazırlık"
    },
    {
      title: "IELTS Hazırlık",
      description: "İngilizce yeterlilik sınavı için özel hazırlık programı",
      icon: <Globe className="w-8 h-8" />,
      features: ["Speaking pratiği", "Writing değerlendirme", "Mock testler"],
      price: "₺399/ay",
      category: "Dil Eğitimi"
    },
    {
      title: "Matematik Koçluğu",
      description: "Temel matematikte güçlü temeller için birebir koçluk",
      icon: <Calculator className="w-8 h-8" />,
      features: ["Birebir dersler", "Pratik ödevler", "İlerleme raporları"],
      price: "₺199/ay",
      category: "Ders Desteği"
    },
    {
      title: "Almanca Eğitimi",
      description: "A1'den C1'e kadar kapsamlı Almanca öğrenme programı",
      icon: <Globe className="w-8 h-8" />,
      features: ["Konuşma pratiği", "Gramer dersleri", "Kültürel içerik"],
      price: "₺249/ay",
      category: "Dil Eğitimi"
    },
    {
      title: "Fransızca Eğitimi",
      description: "Başlangıçtan ileri seviyeye Fransızca öğrenme yolculuğu",
      icon: <Globe className="w-8 h-8" />,
      features: ["İnteraktif dersler", "Telaffuz eğitimi", "Kültür dersleri"],
      price: "₺249/ay",
      category: "Dil Eğitimi"
    },
    {
      title: "Yapay Zeka Giriş",
      description: "AI ve makine öğrenmesi temellerini öğrenin",
      icon: <Brain className="w-8 h-8" />,
      features: ["Python programlama", "ML algoritmaları", "Proje geliştirme"],
      price: "₺449/ay",
      category: "Teknoloji"
    },
    {
      title: "Yaratıcı Yazarlık",
      description: "Hikaye yazma ve yaratıcı yazarlık teknikleri",
      icon: <Pen className="w-8 h-8" />,
      features: ["Yazma teknikleri", "Karakter geliştirme", "Editörlük"],
      price: "₺179/ay",
      category: "Sanat & Edebiyat"
    },
    {
      title: "Müzik Teorisi",
      description: "Müzik teorisi ve enstrüman eğitimi",
      icon: <Music className="w-8 h-8" />,
      features: ["Teori dersleri", "Pratik çalışmalar", "Kompozisyon"],
      price: "₺299/ay",
      category: "Sanat & Edebiyat"
    },
    {
      title: "Web Geliştirme",
      description: "Modern web teknolojileri ile full-stack geliştirme",
      icon: <Code className="w-8 h-8" />,
      features: ["HTML/CSS/JS", "React & Node.js", "Proje portföyü"],
      price: "₺399/ay",
      category: "Teknoloji"
    },
    {
      title: "İngilizce Konuşma",
      description: "Günlük İngilizce konuşma pratiği ve akıcılık geliştirme",
      icon: <Globe className="w-8 h-8" />,
      features: ["Günlük konuşma", "Telaffuz düzeltme", "Kelime hazinesi"],
      price: "₺159/ay",
      category: "Dil Eğitimi"
    },
    {
      title: "Fizik Olimpiyatı",
      description: "Fizik olimpiyatlarına hazırlık ve ileri seviye problemler",
      icon: <Award className="w-8 h-8" />,
      features: ["Olimpiyat soruları", "Laboratuvar", "Yarışma stratejileri"],
      price: "₺349/ay",
      category: "Sınav Hazırlık"
    }
  ];

  // const coachingPackages = [
  //   {
  //     coachName: "Dr. Ayşe Kaya",
  //     coachImage: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "8 yıl",
  //     coachRating: 4.9,
  //     packageTitle: "Matematik & Fizik Koçluğu",
  //     packageDescription: "YKS matematik ve fizik için kapsamlı hazırlık programı",
  //     features: ["Birebir dersler", "Soru çözüm teknikleri", "Haftalık değerlendirme"],
  //     price: "₺399/ay",
  //     specialty: "Matematik & Fizik"
  //   },
  //   {
  //     coachName: "Mehmet Özkan",
  //     coachImage: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "6 yıl",
  //     coachRating: 4.8,
  //     packageTitle: "İngilizce & IELTS Paketi",
  //     packageDescription: "IELTS hazırlık ve genel İngilizce geliştirme programı",
  //     features: ["Speaking pratiği", "Writing değerlendirme", "Mock testler"],
  //     price: "₺449/ay",
  //     specialty: "İngilizce & IELTS"
  //   },
  //   {
  //     coachName: "Zeynep Demir",
  //     coachImage: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "10 yıl",
  //     coachRating: 5.0,
  //     packageTitle: "Kariyer Koçluğu Paketi",
  //     packageDescription: "Profesyonel kariyer planlama ve gelişim programı",
  //     features: ["Kariyer analizi", "CV optimizasyonu", "Mülakat hazırlığı"],
  //     price: "₺599/ay",
  //     specialty: "Kariyer Koçluğu"
  //   },
  //   {
  //     coachName: "Ali Yılmaz",
  //     coachImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "7 yıl",
  //     coachRating: 4.9,
  //     packageTitle: "YKS Hazırlık Koçluğu",
  //     packageDescription: "Üniversite sınavı için stratejik hazırlık ve motivasyon",
  //     features: ["Çalışma planı", "Motivasyon desteği", "Sınav stratejileri"],
  //     price: "₺349/ay",
  //     specialty: "YKS Hazırlık"
  //   },
  //   {
  //     coachName: "Fatma Şen",
  //     coachImage: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "5 yıl",
  //     coachRating: 4.7,
  //     packageTitle: "Yaşam Koçluğu Paketi",
  //     packageDescription: "Kişisel gelişim ve yaşam hedefleri için rehberlik",
  //     features: ["Hedef belirleme", "Motivasyon desteği", "Alışkanlık geliştirme"],
  //     price: "₺299/ay",
  //     specialty: "Yaşam Koçluğu"
  //   },
  //   {
  //     coachName: "Emre Kılıç",
  //     coachImage: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     coachExperience: "9 yıl",
  //     coachRating: 4.8,
  //     packageTitle: "Kimya & Biyoloji Paketi",
  //     packageDescription: "Fen bilimleri için derinlemesine öğrenme programı",
  //     features: ["Laboratuvar simülasyonları", "Kavram haritaları", "Soru bankası"],
  //     price: "₺379/ay",
  //     specialty: "Kimya & Biyoloji"
  //   }
  // ];

  // Show first 6 packages initially
  const displayedEducationPackages = showAllEducation 
    ? educationPackages 
    : educationPackages.slice(0, 6);

  const EducationPackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
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
      
      <button className="w-full bg-gradient-to-r from-[#C0392B] to-[#E74C3C] hover:from-[#A93226] hover:to-[#C0392B] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
        Detayları Gör
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );

  const CoachingPackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 group">
      {/* Coach Info Header */}
      <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
        <img 
          src={pkg.coachImage} 
          alt={pkg.coachName}
          className="w-16 h-16 rounded-full object-cover border-3 border-[#F5B041] shadow-md group-hover:scale-110 transition-transform duration-300"
        />
        <div className="ml-4 flex-1">
          <h4 className="text-lg font-bold text-[#1C1C1C] group-hover:text-[#C0392B] transition-colors duration-300">
            {pkg.coachName}
          </h4>
          <p className="text-sm text-gray-600">{pkg.coachExperience} deneyim</p>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-full mr-1 ${i < Math.floor(pkg.coachRating) ? 'bg-[#F5B041]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-600">{pkg.coachRating}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#F5B041] font-bold text-lg">{pkg.price}</p>
        </div>
      </div>

      {/* Package Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#C0392B] transition-colors duration-300">
          {pkg.packageTitle}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{pkg.packageDescription}</p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-[#F5B041] rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-gradient-to-r from-[#C0392B] to-[#E74C3C] hover:from-[#A93226] hover:to-[#C0392B] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
        Koç Profili & Paket Detayları
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
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
            <EducationPackageCard key={index} pkg={pkg} index={index} />
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