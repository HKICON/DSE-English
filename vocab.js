fetch('vocab.csv')
  .then(r => r.text())
  .then(txt => {
     txt.split('\n').slice(1)            // skip header
        .forEach(line => {
           const [word,,,,,,,,] = line.split(',');
           if (!word) return;
           const btn = document.createElement('button');
           btn.className = 'word-btn';
           btn.textContent = word;
           btn.onclick = () => {
              new Audio(`vocab/${word}.mp3`).play();
           };
           document.getElementById('list').appendChild(btn);
        });
  });