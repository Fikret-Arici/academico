import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const coaches = [
  {
    name: "Emir Çanakkale",
    university: "Boğaziçi Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    ranking: "SAY 145.",
    image: "/images/coaches/Emir Çanakkale.jpg"
  },
  {
    name: "Ahmet Agah Bozkır",
    university: "Bilkent Üniversitesi",
    degree: "Elektrik Elektronik Mühendisliği",
    ranking: "SAY 418.",
    image: "/images/coaches/Ahmet Agah Bozkır.jpg"
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
    image: "/images/coaches/İsmet Bilgin.jpg"
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
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
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
        <Slider {...sliderSettings}>
          {coaches.map((coach, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group flex flex-col justify-end">
                {/* Büyük Koç Fotoğrafı */}
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '3/4' }}
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col gap-2">
                  <span className="bg-[#F5B041] text-[#1C1C1C] px-4 py-1 rounded-full text-base font-semibold shadow-lg self-start mb-2">
                    {coach.ranking}
                  </span>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {coach.name}
                  </h3>
                  <p className="text-lg text-[#F5B041] font-semibold drop-shadow-lg">{coach.university}</p>
                  <p className="text-base text-white drop-shadow-lg">{coach.degree}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Coaches;