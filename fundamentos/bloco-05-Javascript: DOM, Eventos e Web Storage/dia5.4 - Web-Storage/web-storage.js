window.onload = () => {
  const select = document.querySelector('#select-backgroundColor');
  select.addEventListener('change', () => { // sempre que eu houver uma mudança no meu select
    document.body.style.backgroundColor = select.value;

    localStorage.setItem('set-background-color', select.value);
  })

  const inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener('change', () => { // quando eu clicar fora a função vai acontecer
    document.body.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('set-font-size', `${inputFontSize.value}px`);
  })

  const inputSelectFontColor = document.querySelector('#select-fontSizeColor');
  const paragraph = document.querySelectorAll('.oi');
  inputSelectFontColor.addEventListener('change', () => {
    for (let index of paragraph) {
      index.style.color = inputSelectFontColor.value; 
    }
    localStorage.setItem('set-paragraph-color', inputSelectFontColor.value);
  })

  const selectTextHeight = document.querySelector('input[name="height"]');
  selectTextHeight.addEventListener('change', () => {
    for (let index of paragraph) {
      index.style.lineHeight = `${selectTextHeight.value}px`;
    }
    localStorage.setItem('setLineHeight', `${selectTextHeight.value}px`); // definindo o que quero salvar
  })

  const selectFontFamily = document.querySelector('#fontFamily');
  selectFontFamily.addEventListener('change', () => {
    for (let index of paragraph) {
      index.style.fontFamily = selectFontFamily.value;
    }
    localStorage.setItem('setFontFamily', selectFontFamily.value);
  })
  
  const savedBackgroundColor = localStorage.getItem('set-background-color');
  document.body.style.backgroundColor = savedBackgroundColor;

  const savedFontSize = localStorage.getItem('set-font-size');
  document.body.style.fontSize = savedFontSize;

  const savedParagraphColor = localStorage.getItem('set-paragraph-color');
  for (let index of paragraph) {
    index.style.color = savedParagraphColor;
  }

  const savedLineHeight = localStorage.getItem('setLineHeight'); // pegando o que quero salvar
  for (let index of paragraph) {
    index.style.lineHeight = savedLineHeight;
  }

  const savedFontFamily = localStorage.getItem('setFontFamily')
  for (let index of paragraph) {
    index.style.fontFamily = savedFontFamily;
  }

}

