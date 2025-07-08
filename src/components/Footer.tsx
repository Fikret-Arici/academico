import React, { useState } from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const legalContents = {
  kvkk: {
    title: 'KVKK & Gizlilik',
    content: `
      <b>Kişisel Verilerin Korunması ve Gizlilik Politikası</b><br/><br/>
      academico olarak, kullanıcılarımızın kişisel verilerinin gizliliğine büyük önem veriyoruz. Tüm bilgileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında güvenle saklanır ve üçüncü kişilerle paylaşılmaz. Verileriniz yalnızca hizmet sunumu, iletişim ve yasal yükümlülükler için kullanılır. Dilediğiniz zaman verilerinizin silinmesini talep edebilirsiniz.`
  },
  kullanim: {
    title: 'Kullanım Şartları',
    content: `
      <b>Kullanım Şartları</b><br/><br/>
      academico platformunu kullanan tüm kullanıcılar, sunulan hizmetlerin yalnızca kişisel ve yasal amaçlarla kullanılacağını kabul eder. Platformda yer alan içeriklerin izinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır. Kullanıcılar, platformda paylaştıkları bilgilerin doğruluğundan sorumludur.`
  },
  cerez: {
    title: 'Çerez Politikası',
    content: `
      <b>Çerez Politikası</b><br/><br/>
      academico, kullanıcı deneyimini iyileştirmek için çerezler (cookies) kullanır. Çerezler, siteyi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerezler sayesinde tercihlerinizi hatırlayabilir, siteyi daha verimli kullanabilirsiniz. Dilerseniz tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.`
  },
  iptal: {
    title: 'İptal & İade',
    content: `
      <b>İptal ve İade Koşulları</b><br/><br/>
      Satın aldığınız eğitim veya koçluk paketlerinden memnun kalmazsanız, ilk dersten sonra koşulsuz iade hakkınız vardır. İptal ve iade taleplerinizi 3academico5@gmail.com adresine iletebilirsiniz. İade işlemleri 7 iş günü içinde tamamlanır.`
  },
  sss: {
    title: 'Sıkça Sorulan Sorular',
    content: `
      <b>Sıkça Sorulan Sorular</b><br/><br/>
      Tüm sorularınız için SSS bölümümüzü inceleyebilir veya WhatsApp hattımızdan bize ulaşabilirsiniz.`
  }
};

const Footer = () => {
  const [modal, setModal] = useState<keyof typeof legalContents | null>(null);
  const openModal = (key: keyof typeof legalContents) => setModal(key);
  const closeModal = () => setModal(null);

  return (
    <footer id="footer-iletisim" className="bg-[#4B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/logo.jpg" alt="Academico" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Yapay zeka destekli kişiselleştirilmiş eğitim ve koçluk platformu. 
              Hedeflerinize ulaşmak için yanınızdayız.
            </p>
            <h4 className="text-lg font-semibold mb-4 text-[#F5B041]">Bizi Takip Edin</h4>
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/academicoegitim/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/academico-e%C4%9Fitim-platformu/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://wa.me/905443731454" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCPM8-JyLMKJajPyMokIHTYg" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@academicoegitim" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#F5B041]">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><a href="#anasayfa" className="text-white/80 hover:text-[#F5B041] transition-colors duration-200">Anasayfa</a></li>
              <li><a href="#paketler" className="text-white/80 hover:text-[#F5B041] transition-colors duration-200">Eğitim Paketleri</a></li>
              <li><a href="#koclar" className="text-white/80 hover:text-[#F5B041] transition-colors duration-200">Koçlarımız</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#F5B041]">Yasal</h3>
            <ul className="space-y-3">
              <li><a href="#hakkimizda" className="text-white/80 hover:text-[#F5B041] transition-colors duration-200">Hakkımızda</a></li>
              <li><button onClick={() => openModal('kvkk')} className="text-white/80 hover:text-[#F5B041] transition-colors duration-200 w-full text-left">KVKK & Gizlilik</button></li>
              <li><button onClick={() => openModal('kullanim')} className="text-white/80 hover:text-[#F5B041] transition-colors duration-200 w-full text-left">Kullanım Şartları</button></li>
              <li><button onClick={() => openModal('cerez')} className="text-white/80 hover:text-[#F5B041] transition-colors duration-200 w-full text-left">Çerez Politikası</button></li>
              <li><button onClick={() => openModal('iptal')} className="text-white/80 hover:text-[#F5B041] transition-colors duration-200 w-full text-left">İptal & İade</button></li>
              <li><button onClick={() => openModal('sss')} className="text-white/80 hover:text-[#F5B041] transition-colors duration-200 w-full text-left">SSS</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#F5B041]">İletişim</h3>
            <div className="space-y-4">
              <a href="mailto:3academico5@gmail.com" className="flex items-center group">
                <Mail className="w-5 h-5 text-[#F5B041] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 group-hover:text-white transition-colors">3academico5@gmail.com</span>
              </a>
              <a href="tel:+905443731454" className="flex items-center group">
                <Phone className="w-5 h-5 text-[#F5B041] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 group-hover:text-white transition-colors">+90 544 373 14 54</span>
              </a>
              <a href="https://www.instagram.com/academicokocluk/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Instagram className="w-5 h-5 text-[#F5B041] mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 group-hover:text-white transition-colors">@academicokocluk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white text-[#1C1C1C] rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
              <button onClick={closeModal} className="absolute top-4 right-4 text-[#C0392B] text-2xl font-bold">&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-[#C0392B]">{legalContents[modal].title}</h2>
              <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: legalContents[modal].content }} />
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Academico. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Türkiye'nin #1 AI Eğitim Platformu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;