import React from 'react';
import { BarChart3, Brain, Target, Award, BookOpen, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Destekli Programlar",
      description: "Yapay zeka teknolojisi ile kişiselleştirilmiş öğrenme deneyimi ve akıllı içerik önerileri."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Kişiselleştirilmiş Ders Planları",
      description: "Öğrenme tarzınıza ve hedeflerinize özel olarak tasarlanmış esnek ders programları."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "İlerleme Takibi",
      description: "AI destekli analitik raporlar ile öğrenme sürecinizi detaylı takip edin ve güçlü-zayıf yönlerinizi keşfedin."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Sertifikalı Koçlar",
      description: "Alanında uzman, sertifikalı koçlarımız ile birebir mentorluk ve rehberlik hizmeti."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Zengin İçerik Kütüphanesi",
      description: "Binlerce soru, konu anlatımı ve özel hazırlanmış çalışma materyalleri."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Esnek Çalışma Saatleri",
      description: "Size uygun zamanlarda, istediğiniz yerden erişim imkanı ve kesintisiz öğrenme deneyimi."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#4B0B0B] to-[#6B1A1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#F5B041] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#C0392B] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Yapay Zeka Destekli Avantajlar
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Modern teknoloji ile desteklenen eğitim deneyimimizin sunduğu benzersiz avantajları keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl min-h-[280px] flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-[#F5B041] to-[#F39C12] text-[#1C1C1C] p-4 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F5B041] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F5B041] mb-2">100+</div>
            <div className="text-white/80">Mutlu Öğrenci</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F5B041] mb-2">20+</div>
            <div className="text-white/80">Uzman Koç</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F5B041] mb-2">95%</div>
            <div className="text-white/80">Başarı Oranı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F5B041] mb-2">24/7</div>
            <div className="text-white/80">AI Desteği</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;