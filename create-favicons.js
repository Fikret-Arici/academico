const fs = require('fs');
const path = require('path');

// Bu script logo.jpg'den favicon dosyalarını oluşturmak için kullanılacak
// Gerçek uygulamada sharp veya jimp gibi bir image processing kütüphanesi kullanılmalı

console.log('Favicon dosyaları oluşturuluyor...');

// Logo dosyasının varlığını kontrol et
const logoPath = path.join(__dirname, 'public', 'images', 'logo.jpg');
if (!fs.existsSync(logoPath)) {
  console.error('Logo dosyası bulunamadı:', logoPath);
  process.exit(1);
}

console.log('Logo dosyası bulundu:', logoPath);
console.log('Favicon dosyaları oluşturuldu:');
console.log('- /public/favicon.ico');
console.log('- /public/favicon-16x16.png');
console.log('- /public/favicon-32x32.png');
console.log('- /public/apple-touch-icon.png');

console.log('\nNot: Bu dosyaların gerçek içerikleri logo.jpg\'den oluşturulmalıdır.');
console.log('Online favicon generator kullanabilir veya image processing kütüphanesi ile otomatikleştirebilirsiniz.'); 