import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "academico nasıl çalışır?",
      answer: "Academico, yapay zeka destekli koçluk ve eğitim platformudur. Bize ulaştıktan sonra ilgi alanlarınızı ve hedeflerinizi belirliyorsunuz. AI sistemimiz, bu bilgiler doğrultusunda size özel öğrenme planları ve koç önerileri sunar. Uzman eğitmenlerimizle birebir seanslar yapabilir, kişiselleştirilmiş eğitim yolculuğunuza başlayabilirsiniz."
    },
    {
      question: "Hangi yaş grupları için uygun?",
      answer: "Academico, ortaokuldan üniversiteye ve kariyer gelişimine kadar geniş bir yaş aralığına hitap eder. Her seviyeye uygun ders içerikleri ve koçluk hizmetleri sunuyoruz."
    },
    {
      question: "Koçlarınız nasıl seçiliyor?",
      answer: "Koçlarımız uzmanlık alanlarında deneyimli, pedagojik formasyona sahip profesyonellerden oluşur. Adaylar, titiz bir değerlendirme ve mülakat sürecinden geçerek sistemimize dahil edilir."
    },
    {
      question: "AI sistemi nasıl kişiselleştirme yapıyor?",
      answer: "AI sistemimiz; ilgi alanların, hedeflerin, öğrenme hızın ve önceki başarılarına göre analiz yapar. Böylece sana en uygun eğitim içeriklerini ve koç önerilerini otomatik olarak sunar."
    },
    {
      question: "Ücretlendirme nasıl çalışıyor?",
      answer: "Farklı paket seçenekleriyle esnek fiyatlandırma sunuyoruz. Eğitim paketleri, koçluk seansları ve özel programlar için ayrı ücretlendirmeler mevcut. Detaylı fiyat bilgisi kayıt sırasında sunulur."
    },
    {
      question: "Teknik destek alabilir miyim?",
      answer: "Evet. Kullanıcılarımız 7/24 teknik destek ekibimize ulaşabilir. Karşılaştığınız tüm sorunlar hızlı ve çözüm odaklı şekilde giderilir."
    },
    {
      question: "Başarı garantiniz var mı?",
      answer: "Academico olarak şimdiye kadar öğrencilerimizin büyük çoğunluğunda yüksek başarı oranları elde ettik. Sürece güveniyoruz; bu nedenle ilk tanışma görüşmesini tamamen ücretsiz gerçekleştiriyoruz. Ayrıca, ilk dersten sonra memnun kalmamanız halinde ücret iade garantisi sunuyoruz. Amacımız, doğru başlangıç ve sürdürülebilir başarıyı birlikte sağlamaktır."
    },
    {
      question: "Ebeveynler süreci takip edebilir mi?",
      answer: "Evet. academico olarak velilerimizi sürecin aktif bir parçası yapıyoruz. Her hafta öğrencinin ilerleyişi, güçlü ve gelişime açık yönleriyle ilgili detaylı raporlar hazırlayarak ebeveynlere sunuyoruz. Ayrıca, öğrencinin ihtiyacı olduğunda koçuyla doğrudan iletişime geçme ve destek alma imkanı da her zaman mevcut."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Merak ettiğiniz tüm soruların yanıtlarını burada bulabilirsiniz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F8F4EF] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#C0392B]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#C0392B]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Sorunuzun cevabını bulamadınız mı?
          </p>
          <a href="https://wa.me/905443731454" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C0392B] hover:bg-[#F5B041] text-white hover:text-[#1C1C1C] font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
            WhatsApp'tan Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;