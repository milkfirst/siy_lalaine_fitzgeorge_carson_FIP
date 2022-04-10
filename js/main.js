var lalaine = document.querySelector('.lil-button');
var carson = document.querySelector('.car-button');

var textBox = document.querySelector('.teamBio');
// var img = document.getElementById('img-area');

lalaine.addEventListener("click", function lalaine() {
	//img.src = 'images/lalaine.png'
	textBox.innerText = 'Hello! My name is Lalaine and I am so excited for this summer and warm weather. I cannot believe that this semester has finally ended and I am excited for next year because we can finally, HOPEFULLY, go to class in person!';
});

carson.addEventListener('click', function car() {
	//img.src = 'images/carson.png'
	textBox.innerText = 'Hi, I am Carson. I am a hard worker and enjoys coming up with the craziest ideas for products each day, No joke. There is a locked box that contains each of my ideas. But you will never find it.';
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
});

ScrollReveal().reveal('.beer-title', { delay: 500, origin: 'left' });