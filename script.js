const textInput = document.getElementById('textInput');
const colorPicker = document.getElementById('colorPicker');
const output = document.getElementById('output');
const downloadBtn = document.getElementById('downloadBtn');

function updateNeonText() {
  const text = textInput.value.trim();
  const color = colorPicker.value;

  output.textContent = text || 'Your neon text will appear here';

  output.style.textShadow = `
    0 0 5px ${color},
    0 0 10px ${color},
    0 0 20px ${color},
    0 0 40px ${color},
    0 0 80px ${color}
  `;
}

textInput.addEventListener('input', updateNeonText);
colorPicker.addEventListener('input', updateNeonText);

// Download the neon text as an image
downloadBtn.addEventListener('click', () => {
  html2canvas(output).then(canvas => {
    const link = document.createElement('a');
    link.download = 'neon-text.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});
