const ubahWarnaBtn = document.getElementById('ubahWarna');
const ubahUkuranFont = document.getElementById('ubahUkuranFont');
const ubahModeBtn = document.getElementById('ubahMode');
const ubahGayaFontBtn = document.getElementById('ubahGayaFont');
const paragraf = document.querySelector('p');
const judul = document.getElementById('judul');

let isDarkMode = false;
let fontStyle = 'serif';
const warna = ['lightyellow', 'orange', 'lightblue', 'grey', 'pink'];

// Ubah warna latar belakang secara acak
ubahWarnaBtn.addEventListener('click', () => {
  const warnaAcak = warna[Math.floor(Math.random() * warna.length)];
  document.body.style.backgroundColor = warnaAcak;
});

// Ubah ukuran font berdasarkan input
ubahUkuranFont.addEventListener('input', () => {
  document.body.style.fontSize = ubahUkuranFont.value + 'px';
});

// Toggle mode gelap
ubahModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
  document.body.style.color = isDarkMode ? 'white' : 'black';
  // Ubah warna judul dan paragraf juga (opsional)
  judul.style.color = isDarkMode ? 'white' : 'black';
  paragraf.style.color = isDarkMode ? 'white' : 'black';
});

// Ubah gaya font
ubahGayaFontBtn.addEventListener('click', () => {
  fontStyle = fontStyle === 'serif' ? 'sans-serif' : 'serif';
  document.body.style.fontFamily = fontStyle;
});