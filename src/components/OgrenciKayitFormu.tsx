import React, { useState } from 'react';

const kvkkContent = `
  <b>Kişisel Verilerin Korunması ve Gizlilik Politikası</b><br/><br/>
  academico olarak, kullanıcılarımızın kişisel verilerinin gizliliğine büyük önem veriyoruz. Tüm bilgileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında güvenle saklanır ve üçüncü kişilerle paylaşılmaz. Verileriniz yalnızca hizmet sunumu, iletişim ve yasal yükümlülükler için kullanılır. Dilediğiniz zaman verilerinizin silinmesini talep edebilirsiniz.`;

const initialState = {
  ogrenciAd: '',
  veliAd: '',
  telefon: '',
  sinif: '',
  paket: '',
  kvkk: false,
};

const paketSecenekleri = [
  'YKS Hazırlık Paketi',
  'LGS Hazırlık Paketi',
  'Özel Ders Paketi',
  'Dil Eğitimi',
  'Diğer',
];

const sinifSecenekleri = [
  '5. Sınıf',
  '6. Sınıf',
  '7. Sınıf',
  '8. Sınıf',
  '9. Sınıf',
  '10. Sınıf',
  '11. Sınıf',
  '12. Sınıf',
  'Mezun',
  'Üniversite',
];

const OgrenciKayitFormu = () => {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showKvkk, setShowKvkk] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!form.ogrenciAd || !form.telefon || !form.sinif || !form.paket || !form.kvkk) {
      setError('Lütfen tüm zorunlu alanları doldurun ve KVKK onay kutusunu işaretleyin.');
      return;
    }
    const data = new FormData();
    data.append('Öğrenci Adı ve Soyadı', form.ogrenciAd);
    data.append('Veli Adı ve Soyadı', form.veliAd);
    data.append('Telefon', form.telefon);
    data.append('Sınıf', form.sinif);
    data.append('Paket', form.paket);
    try {
      const res = await fetch('https://formspree.io/f/xanjpkvj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setError('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4 mb-4 bg-gradient-to-br from-[#F8F4EF] to-white rounded-2xl shadow-2xl p-3 sm:p-5 md:p-8 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-[#C0392B] text-center mb-8">Uzman koçlarımızdan ücretsiz deneme dersi almak için hemen başvurun</h2>
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center font-semibold">Başvurunuz başarıyla gönderildi!</div>
      )}
      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6 text-center font-semibold">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-[#C0392B] font-semibold mb-2">Öğrenci Adı ve Soyadı *</label>
          <input
            type="text"
            name="ogrenciAd"
            value={form.ogrenciAd}
            onChange={handleChange}
            className="w-full rounded-full px-5 py-3 bg-[#F5B041]/20 text-[#1C1C1C] placeholder-[#C0392B] focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
            placeholder="Ad Soyad"
            required
          />
        </div>
        <div>
          <label className="block text-[#C0392B] font-semibold mb-2">Veli Adı ve Soyadı</label>
          <input
            type="text"
            name="veliAd"
            value={form.veliAd}
            onChange={handleChange}
            className="w-full rounded-full px-5 py-3 bg-[#F5B041]/20 text-[#1C1C1C] placeholder-[#C0392B] focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
            placeholder="Ad Soyad (Öğrenciyseniz boş bırakabilirsiniz)"
          />
        </div>
        <div>
          <label className="block text-[#C0392B] font-semibold mb-2">Telefon *</label>
          <input
            type="tel"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            className="w-full rounded-full px-5 py-3 bg-[#F5B041]/20 text-[#1C1C1C] placeholder-[#C0392B] focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
            placeholder="05xx xxx xx xx"
            required
          />
        </div>
        <div>
          <label className="block text-[#C0392B] font-semibold mb-2">Sınıf *</label>
          <select
            name="sinif"
            value={form.sinif}
            onChange={handleChange}
            className="w-full rounded-full px-5 py-3 bg-[#F5B041]/20 text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
            required
          >
            <option value="">Seçiniz</option>
            {sinifSecenekleri.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[#C0392B] font-semibold mb-2">Paket *</label>
          <select
            name="paket"
            value={form.paket}
            onChange={handleChange}
            className="w-full rounded-full px-5 py-3 bg-[#F5B041]/20 text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
            required
          >
            <option value="">Seçiniz</option>
            {paketSecenekleri.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="kvkk"
            checked={form.kvkk}
            onChange={handleChange}
            className="accent-[#C0392B] w-5 h-5"
            required
          />
          <span className="text-[#1C1C1C] text-sm">
            <button type="button" className="underline text-[#C0392B] hover:text-[#F5B041] font-semibold" onClick={() => setShowKvkk(true)}>
              KVKK Aydınlatma Metni
            </button>
            'ni okudum, onaylıyorum.
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-[#C0392B] text-white font-bold py-3 rounded-full mt-2 hover:bg-[#F5B041] hover:text-[#1C1C1C] transition-all text-lg shadow-lg"
          style={{ position: 'sticky', bottom: 0, zIndex: 10 }}
        >
          Gönder
        </button>
      </form>
      {/* KVKK Modal */}
      {showKvkk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white text-[#1C1C1C] rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
            <button onClick={() => setShowKvkk(false)} className="absolute top-4 right-4 text-[#C0392B] text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4 text-[#C0392B]">KVKK & Gizlilik</h2>
            <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: kvkkContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OgrenciKayitFormu; 