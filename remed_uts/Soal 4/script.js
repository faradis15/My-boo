document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('error').innerText = '';
    if (!name) {
        document.getElementById('nameError').innerText = 'Nama tidak boleh kosong';
        isValid = false;
    }
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Email harus valid';
        isValid = false;
    }
    if (message.length < 20) {
        document.getElementById('messageError').innerText = 'Pesan minimal 20 karakter';
        isValid = false;
    }
    if (!isValid) {
        document.getElementById('error').innerText = 'Form contains errors. Please fix them and try again.';
    } else {
        document.getElementById('error').innerText = '';
        alert('Form submitted successfully!');
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}