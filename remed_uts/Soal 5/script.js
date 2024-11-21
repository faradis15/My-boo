document.getElementById('changeTextButton').addEventListener('click', function() {
});
const infoParagraph = document.getElementById('info');
const changeTextButton = document.getElementById('changeTextButton');
let isTextChanged = false;

changeTextButton.addEventListener('click', function () {
    if (isTextChanged) {
        infoParagraph.textContent = 'Ini adalah teks awal.';
    } else {
        infoParagraph.textContent = 'Teks telah diubah!';
    }
    isTextChanged = !isTextChanged;
// Ubah teks paragraf di sini
});
