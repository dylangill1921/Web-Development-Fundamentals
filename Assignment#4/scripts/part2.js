/* part 2 script */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg','pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye', 'Art of a wave', 'Pretty flower that are white with yellow on edges', 'Egyptians paintings from back in the day on wall', 'butterfly on leaf spreading its wings']

/* Looping through images */
for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFiles[i]);
    newImage.setAttribute('alt', altTexts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = overlay.getAttribute('class');
    if (currentClass === 'overlay dark') {
        overlay.setAttribute('class', 'overlay');
        btn.textContent = 'Darken';
    } else {
        overlay.setAttribute('class', 'overlay dark');
        btn.textContent = 'Lighten';
    }
});