const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='84px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#080909';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #222'});

const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
  const lines = [
    'I build <em>websites, apps</em>',
    '& digital products',
    'that work.'
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentRendered = '';

  function typeLine() {
    if (lineIndex >= lines.length) {
      heroTitle.classList.add('typing-done');
      return;
    }

    const line = lines[lineIndex];
    const nextChar = line.charAt(charIndex);

    if (nextChar === '<') {
      const endTagIndex = line.indexOf('>', charIndex);
      currentRendered += line.slice(charIndex, endTagIndex + 1);
      charIndex = endTagIndex + 1;
      heroTitle.innerHTML = currentRendered;
      typeLine();
      return;
    }

    currentRendered += nextChar;
    charIndex += 1;
    heroTitle.innerHTML = currentRendered;

    if (charIndex >= line.length) {
      lineIndex += 1;
      charIndex = 0;
      if (lineIndex < lines.length) {
        currentRendered += '<br>';
        heroTitle.innerHTML = currentRendered;
        setTimeout(typeLine, 420);
      } else {
        heroTitle.classList.add('typing-done');
      }
      return;
    }

    setTimeout(typeLine, 55);
  }

  heroTitle.innerHTML = '';
  heroTitle.classList.remove('typing-done');
  setTimeout(typeLine, 220);
}
