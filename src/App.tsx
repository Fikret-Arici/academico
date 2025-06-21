import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Coaches from './components/Coaches';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HemenBasla from './components/HemenBasla';

function App() {
  if (window.location.pathname === '/hemen-basla') {
    return <HemenBasla />;
  }
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
            Sistemimizde yer alan tüm koçlar, kendi alanlarında ilk 10.000 içinde derece yapmış, pedagojik formasyona sahip ve başarılarıyla öne çıkan profesyonellerdir. Tecrübemizle başarınızı garantilemek için buradayız. Öğrencilerimize sadece bilgi değil, aynı zamanda ilham ve motivasyon da sunuyoruz.
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

export default App;