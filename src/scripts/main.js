document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-random').addEventListener('submit', function(event) {
        event.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);
        let randomNum = Math.random() * maxNumber;
        randomNum = Math.floor(randomNum) + 1;

        document.getElementById('resultValue').innerText = randomNum;
        document.querySelector('.result').style.display = 'block';
    })
})