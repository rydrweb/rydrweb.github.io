document.getElementById('settings-btn').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('size-slider').addEventListener('input', function() {
    const value = this.value;
    document.querySelector('.clock').style.fontSize = `${value}rem`;
    document.querySelectorAll('.btn').forEach(button => {
        button.style.fontSize = `${value}rem`;
    });
});

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

color1.addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(135deg, #a8edea, #fed6e3)';
});

color2.addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(135deg, #a9c9ff, #ffbbec)';
});

color3.addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(135deg, #fbc2eb, #a6c1ee)';
});

