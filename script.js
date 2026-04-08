let isPlaying = false;
  document.getElementById('ImgPeach').onclick = function() {
    
    if (isPlaying) return;
    text = document.getElementById("PeachH")
    text1 = document.getElementById("PeachP1")
    text2 = document.getElementById("PeachP2")
    text3 = document.getElementById("PeachP3")
    text4 = document.getElementById("PeachP4")
    isPlaying = true;
    if (this.src.includes('peach1o.png')) {
        audio = document.getElementById('AudioChomp');
        audio.volume = 0.5;
        audio.play()
        text.textContent = "Ребёнка-Грушу съели"
        text1.textContent = "Ты ужасный человек"
        text2.textContent = "Ужас"
        text3.textContent = "Ням-Ням"
        text4.textContent = "Это Вкусно"
        this.src = 'assets/peach2o.png';
        setTimeout(() => {
            isPlaying = false;
        }, 3500)
    } else {
        text.textContent = "Ребёнка-Грушу ещё не съели"
        text1.textContent = "Какой он вкус?"
        text2.textContent = "Он"
        text3.textContent = "..."
        text4.textContent = "Может ещё кусочек?"
        audio = document.getElementById('AudioChompRev');
        audio.volume = 0.5;
        audio.play()
        this.src = 'assets/peach1o.png';
        setTimeout(() => {
            isPlaying = false;
        }, 3500)
    }
  };