/* Ini Java Script */

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    const currentTime = new Date().toLocaleString();

    document.getElementById('output-time').innerText = currentTime;
    document.getElementById('output-name').innerText = name;
    document.getElementById('output-dob').innerText = dob;
    document.getElementById('output-gender').innerText = gender;
    document.getElementById('output-message').innerText = message;

    document.querySelector('.output-container').style.display = 'block';
});




