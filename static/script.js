document.getElementById('generateButton').addEventListener('click', function () {
    var color = [
        document.getElementById('white').value || 'white',
        document.getElementById('green').value || 'green',
        document.getElementById('red').value || 'red',
        'blue',
        'black'
    ];

    var quote = "The memory of that scene for me is like a frame of film forever frozen at that moment : the red carpet, the green lawn, the white house, the lead sky. The new president and his first lady. - Richard M. Nixon";

    // Replace placeholders with colors
    color.forEach(function (c, index) {
        quote = quote.replace(['red', 'green', 'white'][index], c);
    });

    // Output the modified quote with a fade-in animation
    var outputElement = document.getElementById('output');
    outputElement.style.animation = 'fadeIn 0.5s ease';
    setTimeout(function () {
        outputElement.style.opacity = 1;
        outputElement.textContent = quote;
    }, 250); // Delay the animation to coincide with the fade-in
});