document.getElementById('dropdownButton').addEventListener('click', function() {
    // Tambahkan logika untuk toggle tampil atau sembunyikan dropdown
});
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdownButton')) {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    }
});