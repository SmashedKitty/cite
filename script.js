const template = document.getElementById('DynamcP');
const container = document.getElementById('Peaches');

function setupPeachBehavior(postElement) {
    const img = postElement.querySelector('.ImgPeach');
    const audioChomp = postElement.querySelector('.AudioChomp');
    const audioChompRev = postElement.querySelector('.AudioChompRev');
    
    let isPlaying = false;
    let wasEaten = false;

    img.onclick = function() {
        if (isPlaying) return;
        isPlaying = true;
        
        if (this.src.includes('peach1o.png')) {
            // Съели грушу
            if (audioChomp) {
                audioChomp.volume = 0.5;
                audioChomp.currentTime = 0;
                audioChomp.play();
            }
            
            this.src = 'assets/peach2o.png';
            
            if (!wasEaten) {
                addNewPeach();
                wasEaten = true; 
            }
            
        } else {
            // Вернули грушу
            if (audioChompRev) {
                audioChompRev.volume = 0.5;
                audioChompRev.currentTime = 0;
                audioChompRev.play();
            }
            
            this.src = 'assets/peach1o.png';
        }
        
        setTimeout(() => {
            isPlaying = false;
        }, 3500);
    };
}

function addNewPeach() {
    const newPost = template.content.cloneNode(true);
            container.append(newPost);
            const lastPost = container.lastElementChild;
            setupPeachBehavior(lastPost);
}

addNewPeach();

const templateM = document.getElementById('PostMY');
const containerM = document.getElementById('MyBlock');

function addMyPost(photo, title, t1) {

    let clone = templateM.content.cloneNode(true);
    
    const img = clone.querySelector('.MyImg');
    const h1 = clone.querySelector('.MH1');
    const p1 = clone.querySelector('.MP1');
    
    img.src = photo;
    h1.textContent = title;
    p1.textContent = t1;
    
    containerM.appendChild(clone);
}

const posts = [
  { img: 'assets/shrimp.jpeg', title: 'Крутой момент из жизни', desc: 'Это был я' },
  { img: 'assets/fly.png', title: 'Это я сыграл муху', desc: 'Сыграл на все сто' },
  { img: 'assets/saddam-eyebrow.webp', title: 'Интересный факт', desc: 'Секреты жуков' },
  { img: 'assets/t2x2.jpeg', title: 'Коломенский маньяк на свободе', desc: 'Его боялись даже чеченцы' },
  { img: 'assets/minion.jpeg', title: 'Мама я съел брата', desc: 'Закончился киндер - сюрприз' },
  { img: 'assets/tony.jpeg', title: 'Удивительные люди', desc: 'Приготовил кебаб сидя в яме' },
  { img: 'assets/noodle.jpeg', title: 'Лаб не будет', desc: 'Да-Да' },
  { img: 'assets/Preg.jpeg', title: 'Кто вас ждет', desc: 'Гадание на таро' },
  { img: 'assets/cat.jpg', title: 'Ваш ребенок в опасности', desc: 'Как элиты похищают детей?' },
  { img: 'assets/lipstick.jpg', title: 'Помадка', desc: 'Лучше чем говяжьи анусы' },
  { img: 'assets/legenda.jpg', title: 'Наше лучшее прошлое', desc: 'Как жили самые успешные люди' },
  { img: 'assets/odekolon.jpg', title: 'Лучшее для лучших', desc: 'Только для приема внутрь' },
  { img: 'assets/ashala.jpg', title: 'فجّر البرتقالة الصغيرة', desc: 'المجد للرب' },
  { img: 'assets/Yee.jpg', title: 'Новости с запада', desc: 'Как изменился Кани-вест' },
  { img: 'assets/bee.jpg', title: 'Секрет Магаданских пчел', desc: 'Слишком громко' },
  { img: 'assets/game.jpg', title: 'Правила игры изменились', desc: 'Узнайте как выиграть' },
  { img: 'assets/choise.jpg', title: 'Что выбирают умные люди', desc: 'Секрет успеха так близок' },
  { img: 'assets/alien.jpg', title: 'Они пришли', desc: 'Берегите ножки' },
  { img: 'assets/Max.jpg', title: 'Что общего у пользователей MAX', desc: 'Учёные выяснили' },
  { img: 'assets/mod.jpg', title: 'Завтра', desc: 'Завтра' },
  { img: 'assets/aliens.jpg', title: 'Держитесь братья', desc: 'Серых славян забирают' },
  { img: 'assets/fish.jpg', title: 'Ни ест ни пьет', desc: 'Помогите' },
  { img: 'assets/crash.jpg', title: 'ДТП в Могилёве', desc: 'Кровь, кишки, ужасы' },
  { img: 'assets/mouse.jpg', title: 'Что скрывают американские мультики', desc: 'Как нас промывают' },
  { img: 'assets/bog.jpg', title: 'Кто на самом деле создал землю?', desc: 'Это был я' },
  { img: 'assets/mrk.jpg', title: 'Полумуж?', desc: 'Секреты биоинженерии' },
  { img: 'assets/isaac.jpg', title: 'Самые популярные высказывания айзека', desc: 'Кхмм...' },
  { img: 'assets/chel.jpg', title: 'Согрел на работе', desc: 'Как живут в африке' },
  { img: 'assets/squirl.jpg', title: 'Крутые белки', desc: 'Очень крутые' },
  { img: 'assets/gaydar.jpg', title: 'Как 5G вышки влияют на нас', desc: 'Сигнал потерян' },
  { img: 'assets/rodeo.jpg', title: 'Тайная жизнь дачников', desc: 'Такое и не только' },
  { img: 'assets/catT.jpg', title: 'Новое изобритение китайцев', desc: 'Как нас обманывают' }
];

posts.forEach(post => {
  addMyPost(post.img, post.title, post.desc);
});


