import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OgrenciKayitFormu from './OgrenciKayitFormu';

// Custom ok bileşenleri
interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
  >
    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
  >
    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
  </button>
);

const coaches = [
  
  {
    name: "Ahmet Agah Bozkır",
    university: "Bilkent Üniversitesi",
    degree: "Elektrik Elektronik Mühendisliği",
    ranking: "SAY 418.",
    image: "/images/coaches/Ahmet Agah Bozkır.jpg"
  },
  {
    name: "Umut Çapar",
    university: "Boğaziçi Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    ranking: "SAY 607. EA 4258.",
    image: "/images/coaches/Umut Capar.jpg"
  },
  {
    name: "Halit Kaan Kızıltan",
    university: "Özyeğin Üniversitesi",
    degree: "Endüstri Mühendisliği",
    ranking: "TYT 869. SAY 1388.",
    image: "/images/coaches/Halit Kaan Kızıltan.jpg"
  },
  {
    name: "Talha Özalpay",
    university: "Dokuz Eylül Üniversitesi",
    degree: "Tıp",
    ranking: "TYT 2383.",
    image: "/images/coaches/Talha Özalpay.jpg"
  },
  {
    name: "Elif Dikmen",
    university: "Yıldız Teknik Üniversitesi",
    degree: "İstatistik",
    ranking: "TYT 3043.",
    image: "/images/coaches/Elif Dikmen.jpg"
  },
  {
    name: "Nilay Okur ",
    university: "Türk Alman Üniversitesi",
    degree: "Hukuk",
    ranking: "EA 4803",
    image: "/images/coaches/NilayOkur.jpg"
  },
  {
    name: "Arda Güder",
    university: "Ege Üniversitesi",
    degree: "Tıp",
    ranking: "SAY 3133.",
    image: "/images/coaches/Arda Güder.jpg"
  },
  {
    name: "Sude Naz Serbes",
    university: "İstanbul Teknik Üniversitesi",
    degree: "Makine Mühendisliği",
    ranking: "SAY 4815.",
    image: "/images/coaches/Sude Naz Serbes.jpg"
  },
  {
    name: "İsmet Bilgin",
    university: "Katip Çelebi Üniversitesi",
    degree: "Tıp",
    ranking: "TYT 5765. SAY 9653.",
    image: "/images/coaches/ismet Bilgin.jpg"
  },
  {
    name: "Aslı Acar",
    university: "Dokuz Eylül Üniversitesi",
    degree: "Tıp",
    ranking: "SAY 5977.",
    image: "/images/coaches/Asli Acar.jpg"
  },
  {
    name: "İrem Yaşar",
    university: "İzmir Demokrasi Üniversitesi",
    degree: "Tıp",
    ranking: "SAY 22151.",
    image: "/images/coaches/irem Yasar.jpg"
  },
  {
    name: "Defne Ünlü",
    university: "Boğaziçi Üniversitesi",
    degree: "Uluslararası İlişkiler",
    ranking: "EA 771.",
    image: "/images/coaches/Defne Unlu.jpg"
  },
  {
    name: "Bilgehan Başaran",
    university: "Türk Alman Üniversitesi",
    degree: "Makine Mühendisliği",
    ranking: "SAY 9775.",
    image: "/images/coaches/Bilgehan Başaran.jpg"
  },{
    name: "Enes Gençoğlu",
    university: "Yıldız Teknik Üniversitesi",
    degree: "İstatistik",
    ranking: "TYT 9903.",
    image: "/images/coaches/Enes Gençoğlu.jpg"
  },{
    name: "Fikret Arıcı",
    university: "Gazi Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    ranking: "SAY 9986.",
    image: "/images/coaches/Fikret Arıcı.jpg"
  },{
    name: "Mehmet Tuğra Durmazer",
    university: "Politecnico di Torino",
    degree: "Otomotiv Mühendisliği",
    ranking: " ",
    image: "/images/coaches/italyano.jpg"
  }
  ,{
    name: "Arda Aydoğdu",
    university: "Boğaziçi Üniversitesi",
    degree: "Ekonomi",
    ranking: "EA 230.",
    image: "/images/coaches/Arda Aydoğdu.jpg"
  },{
    name: "Çağan Çukur",
    university: "Hacettepe Üniversitesi",
    degree: "Tıp",
    ranking: "EA 49. SAY 418.",
    image: "/images/coaches/Çağan Çukur.jpg"
  }
  ,{
    name: "Mert Tekin",
    university: "Boğaziçi Üniversitesi",
    degree: "Ekonomi",
    ranking: "EA 398.",
    image: "/images/coaches/Mert Tekin.jpg"
  },{
    name: "Ece Şengün",
    university: "Galatasaray Üniversitesi",
    degree: "Endüstri Mühendisliği",
    ranking: "",
    image: "/images/coaches/Ece Şengün.jpg"
  },
  {
    name: "Ezgi Tekeli",
    university: "Türk Alman Üniversitesi",
    degree: "İktisat",
    ranking: "",
    image: "/images/coaches/Ezgi Tekeli.jpg"
  },
  {
    name: "Hatice Sert",
    university: "Galatasaray Üniversitesi",
    degree: "İşletme",
    ranking: "",
    image: "/images/coaches/Hatice Sert.jpg"
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease-out",
  pauseOnHover: true,
  swipe: true,
  swipeToSlide: true,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
      }
    }
  ]
};

const Coaches = () => {
  return (
    <section id="koclar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Uzman Koçlarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alanında uzman, başarılı koçlarımız ile eğitim yolculuğunuza başlayın
          </p>
        </div>
        <div className="relative px-2 sm:px-4 md:px-8">
          <Slider {...sliderSettings}>
            {coaches.map((coach, index) => (
              <div key={index} className="px-2">
                <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group flex flex-col justify-end">
                  {/* Büyük Koç Fotoğrafı */}
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col gap-1 sm:gap-2">
                    <span className="bg-[#F5B041] text-[#1C1C1C] px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base font-semibold shadow-lg self-start mb-1 sm:mb-2">
                      {coach.ranking}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                      {coach.name}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#F5B041] font-semibold drop-shadow-lg">{coach.university}</p>
                    <p className="text-xs sm:text-sm md:text-base text-white drop-shadow-lg">{coach.degree}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modern Öğrenci Kayıt Formu */}
        <OgrenciKayitFormu maxWidth="lg" />
      </div>
    </section>
  );
};

export default Coaches;