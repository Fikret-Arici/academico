# Academico - Yapay Zeka Destekli Eğitim Platformu

Yapay zeka destekli kişiselleştirilmiş eğitim ve koçluk platformu.

## SEO ve Favicon Kurulumu

### Favicon Dosyaları
Bu proje için aşağıdaki favicon dosyaları gereklidir:
- `/public/favicon.ico` (16x16, 32x32, 48x48 boyutlarında ICO formatı)
- `/public/favicon-16x16.png` (16x16 PNG)
- `/public/favicon-32x32.png` (32x32 PNG)
- `/public/apple-touch-icon.png` (180x180 PNG)

### Favicon Oluşturma
Logo dosyasından favicon'ları oluşturmak için:
```bash
npm run create-favicons
```

### Online Favicon Generator
Alternatif olarak şu araçları kullanabilirsiniz:
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon Generator](https://www.favicon-generator.org/)

### Google Search Console
1. [Google Search Console](https://search.google.com/search-console)'a gidin
2. Sitenizi ekleyin ve doğrulayın
3. Sitemap'i gönderin: `https://www.academicoegitim.com/sitemap.xml`
4. Logo ve favicon dosyalarının indexlendiğini kontrol edin

### Meta Etiketleri
Tüm gerekli meta etiketleri `index.html` dosyasında mevcuttur:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Schema.org structured data
- Favicon ve icon etiketleri

## Geliştirme

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
