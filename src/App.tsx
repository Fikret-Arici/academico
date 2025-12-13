import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Coaches from './components/Coaches';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HemenBasla from './components/HemenBasla';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
  const [showOriginalSite, setShowOriginalSite] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll yap
    window.scrollTo(0, 0);
    
    // URL'deki hash'i temizle
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handleMouseEnter = () => {
    // Rastgele yeni pozisyon hesapla (buton kaçacak)
    const newX = Math.random() * 70 + 10; // %10-%80 arası
    const newY = Math.random() * 70 + 10; // %10-%80 arası
    setButtonPosition({ x: newX, y: newY });
  };

  if (window.location.pathname === '/hemen-basla') {
    return <HemenBasla />;
  }

  // Orijinal site gösteriliyorsa
  if (showOriginalSite) {
    return (
      <div className="min-h-screen bg-[#F8F4EF]">
        <Header />
        <Hero />
        <Packages />
        <Coaches />
        <section id="hakkimizda" className="py-20 bg-gradient-to-b from-[#F8F4EF] to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#C0392B] mb-6">Hakkımızda</h2>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto mb-8 leading-relaxed">
              <span className="font-bold text-[#F5B041]">academico</span>, Türkiye'nin alanında en iyi eğitmenlerini özenle seçen, yapay zeka destekli kişiselleştirilmiş eğitim ve koçluk platformudur. Her öğrencinin hedeflerine ulaşması için en güncel teknolojilerle, bilimsel yöntemlerle ve bireysel ihtiyaçlara göre tasarlanmış programlarla çalışıyoruz. 
              <br /><br />
              Sistemimizde yer alan tüm koçlar, kendi alanlarında ilk 10.000 içinde derece yapmış ve başarılarıyla öne çıkan profesyonellerdir. Tecrübemizle başarınızı garantilemek için buradayız. Öğrencilerimize sadece bilgi değil, aynı zamanda ilham ve motivasyon da sunuyoruz.
              <br /><br />
              AI tabanlı analizlerimizle her öğrencinin güçlü ve gelişime açık yönlerini tespit ediyor, ona en uygun öğrenme yolculuğunu sunuyoruz. Sektördeki liderliğimiz, yüksek başarı oranlarımız ve öğrenci memnuniyetimizle gurur duyuyoruz.
            </p>
            <div className="mt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#C0392B] mb-6">Vizyonumuz</h3>
              <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto leading-relaxed">
                academico olarak vizyonumuz, Türkiye'de ve dünyada eğitimde bireyselleştirilmiş öğrenmenin öncüsü olmaktır. Yapay zeka ve veri temelli yaklaşımlarımızla her öğrencinin potansiyelini en üst düzeye çıkarmayı hedefliyoruz. Sadece bugünün değil, geleceğin de eğitim ihtiyaçlarını karşılayan, yenilikçi ve sürdürülebilir çözümler geliştirerek, öğrenmeyi herkes için erişilebilir, etkili ve motive edici hale getirmeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </section>
        <Features />
        <FAQ />
        <Footer />
      </div>
    );
  }

  // Site kapanış sayfası
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4B0B0B] via-[#6B1A1A] to-[#4B0B0B] flex items-center justify-center relative overflow-hidden">
      {/* Animasyonlu arka plan efektleri */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F5B041] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-[#C0392B] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src="/logo.jpg" alt="Academico" className="h-32 w-32 rounded-full shadow-2xl border-4 border-white/20" />
        </div>

        {/* Ana mesaj */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Academico
          <span className="block text-[#F5B041] mt-2">Kapanmıştır</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed">
          Eskiden yayındaydık, şimdi artık yokuz. 😢
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
          <p className="text-xl text-white/80 leading-relaxed">
            Academico eğitim platformu olarak hizmetlerimizi sonlandırmış bulunuyoruz. 
            <br />
            <br />
            Bizimle birlikte olan tüm öğrencilerimize ve koçlarımıza teşekkür ederiz.
            <br />
            <span className="text-[#F5B041] font-semibold">Yolunuz açık olsun! 🎓</span>
          </p>
        </div>

        {/* Kaçan buton */}
        <button
          onMouseEnter={handleMouseEnter}
          style={{
            position: 'absolute',
            left: `${buttonPosition.x}%`,
            top: `${buttonPosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
          className="bg-[#F5B041] hover:bg-[#F39C12] text-[#1C1C1C] font-bold text-lg px-8 py-4 rounded-xl shadow-2xl cursor-pointer"
        >
          🔍 Siteyi Görüntüle
        </button>

        {/* Gizli ipucu */}
        <p className="text-white/40 text-sm mt-32 italic">
          (Butonu yakalamaya çalışabilirsin ama... iyi şanslar! 😏)
        </p>
      </div>
    </div>
  );
}

export default App;