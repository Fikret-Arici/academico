import React from 'react';
import { Instagram, ArrowLeft } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const HemenBasla = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F4EF] to-white flex flex-col items-center justify-center px-4 py-16 relative">
      <a href="/" className="absolute top-8 left-8 flex items-center gap-2 text-[#C0392B] hover:text-[#F5B041] transition-all duration-300 font-semibold text-lg">
        <ArrowLeft className="w-6 h-6" />
        Anasayfaya Dön
      </a>
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#C0392B] mb-6">Hemen Başla</h1>
        <p className="text-lg text-[#1C1C1C] mb-8">
          Bize ulaşmak için aşağıdaki kanallardan dilediğinizi seçebilirsiniz. İsterseniz formu doldurun, uzman ekibimiz en kısa sürede size ulaşsın!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/direct/t/17846719950501194" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#F5B041] hover:bg-[#C0392B] text-[#1C1C1C] hover:text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md">
            <Instagram className="w-6 h-6" /> Instagram
          </a>
          <a href="https://wa.me/905443731454" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md">
            <FaWhatsapp className="w-6 h-6" /> WhatsApp
          </a>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold text-[#C0392B] mb-4">İsterseniz Biz Sizi Arayalım</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6wfurTOZCJhGpOW6YPu8GPXDSs7T7R_z1zT06Jd6ZAoqBHw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#F5B041] to-[#F39C12] hover:from-[#C0392B] hover:to-[#F5B041] text-[#1C1C1C] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg text-lg"
          >
            Formu Doldurun
          </a>
        </div>
      </div>
    </div>
  );
};

export default HemenBasla; 