document.getElementById('toggleButton').addEventListener('click', function() {
    // Tambahkan logika untuk toggle mode gelap dan terang
});
document.getElementById('toggleButton').addEventListener('click', function() {
    const body = document.body;
    const button = document.getElementById('toggleButton');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        button.textContent = 'Mode Gelap'; 
    } else {
        body.classList.add('dark-mode');
        button.textContent = 'Mode Terang'; 
    }
});