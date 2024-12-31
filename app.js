const images = document.querySelectorAll('.image-curve img');
const curveValues = [0, 10, 50, 85, 60, 40, 50]; // Customize the curve offsets

images.forEach((img, index) => {
    img.style.setProperty('--index', index);
    img.style.setProperty('--offset', `${curveValues[index] || 0}px`);
});
