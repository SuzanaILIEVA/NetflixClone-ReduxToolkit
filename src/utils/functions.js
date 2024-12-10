// Rastgele renk üreten ve dönen fonksiyon
function generateRandomColor() {
  // RGB bileşenlerini rastgele oluştur
  const red = Math.floor(Math.random() * 256); // 0-255 arası değer
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Rengi HEX formatına dönüştür
  const hexColor = `#${red.toString(16).padStart(2, '0')}${green
    .toString(16)
    .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

  return hexColor;
}

export {generateRandomColor};
