// =========================================
// 🌟 SYNTHIYA VISUALS WEBSITE JAVASCRIPT
// =========================================

// =========================================
// 🎉 PAGE LOADING ANIMATION
// =========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// =========================================
// 🌈 SMOOTH NAVIGATION ACTIVE LINK
// =========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop - 200){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
});

// =========================================
// ✨ FLOATING BUBBLES CREATOR
// =========================================
const bubblesContainer = document.createElement('div');
bubblesContainer.classList.add('bubbles');
document.body.appendChild(bubblesContainer);

for(let i = 0; i < 20; i++){

    const bubble = document.createElement('span');

    bubble.style.left = Math.random() * 100 + '%';

    bubble.style.width = Math.random() * 25 + 10 + 'px';

    bubble.style.height = bubble.style.width;

    bubble.style.animationDuration = Math.random() * 10 + 5 + 's';

    bubble.style.animationDelay = Math.random() * 5 + 's';

    bubblesContainer.appendChild(bubble);
}

// =========================================
// 🎬 REVEAL ANIMATION ON SCROLL
// =========================================
const revealElements = document.querySelectorAll('section');

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// =========================================
// 🤖 AI TOOLS BUTTONS
// =========================================
const buttons = document.querySelectorAll('button');

const titles = [
    'Magic ABC Song ✨',
    'Fun Dinosaur Dance 🦖',
    'Rainbow Learning Adventure 🌈',
    'Happy Counting Song 🔢',
    'Kids Animal Story 🐼'
];

const hooks = [
    'Clap your hands and start the magic ✨',
    'Can you dance like a dinosaur? 🦖',
    'Let’s sing and learn together 🎵',
    'Count with colorful balloons 🎈',
    'A magical surprise is waiting 👀'
];

const stories = [
    'A little rabbit learns ABC with magical stars.',
    'Three kids travel through rainbow world to learn numbers.',
    'A baby panda sings fun songs with animal friends.',
    'Magic crayons create a happy learning adventure.',
    'A dancing dinosaur teaches shapes and colors.'
];

buttons.forEach(button => {

    button.addEventListener('click', () => {

        // =========================================
        // 🎵 TITLE GENERATOR
        // =========================================
        if(button.innerText.includes('Title')){

            const randomTitle = titles[Math.floor(Math.random() * titles.length)];

            alert('🎬 Generated Title:\n\n' + randomTitle);
        }

        // =========================================
        // 🔥 HOOK GENERATOR
        // =========================================
        else if(button.innerText.includes('Hook')){

            const randomHook = hooks[Math.floor(Math.random() * hooks.length)];

            alert('🔥 Generated Hook:\n\n' + randomHook);
        }

        // =========================================
        // 📚 STORY GENERATOR
        // =========================================
        else if(button.innerText.includes('Story')){

            const randomStory = stories[Math.floor(Math.random() * stories.length)];

            alert('📖 Generated Story:\n\n' + randomStory);
        }
    });
});

// =========================================
// 🌟 HERO TEXT TYPING EFFECT
// =========================================
const heroTitle = document.querySelector('#home h2');

if(heroTitle){

    const text = heroTitle.innerText;

    heroTitle.innerText = '';

    let index = 0;

    function typeEffect(){

        if(index < text.length){

            heroTitle.innerText += text.charAt(index);

            index++;

            setTimeout(typeEffect, 60);
        }
    }

    typeEffect();
}

// =========================================
// 🎈 IMAGE FLOAT EFFECT
// =========================================
const allImages = document.querySelectorAll('img');

allImages.forEach(image => {

    image.addEventListener('mouseenter', () => {

        image.style.transform = 'translateY(-10px) scale(1.03)';
        image.style.transition = '0.4s';
    });

    image.addEventListener('mouseleave', () => {

        image.style.transform = 'translateY(0px) scale(1)';
    });
});

// =========================================
// 🌙 DARK MODE TOGGLE
// =========================================
const darkModeButton = document.createElement('button');

darkModeButton.innerText = '🌙 Dark Mode';

darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.zIndex = '9999';
darkModeButton.style.padding = '12px 20px';
darkModeButton.style.borderRadius = '50px';
darkModeButton.style.border = 'none';
darkModeButton.style.background = '#045b70';
darkModeButton.style.color = 'white';
darkModeButton.style.cursor = 'pointer';

document.body.appendChild(darkModeButton);

let darkMode = false;

darkModeButton.addEventListener('click', () => {

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background = '#062b36';
        document.body.style.color = 'white';

        darkModeButton.innerText = '☀️ Light Mode';
    }
    else{

        document.body.style.background = '#bfefff';
        document.body.style.color = '#045b70';

        darkModeButton.innerText = '🌙 Dark Mode';
    }
});

// =========================================
// 🎵 BACKGROUND MUSIC BUTTON
// =========================================
const musicButton = document.createElement('button');

musicButton.innerText = '🎵 Music';

musicButton.style.position = 'fixed';
musicButton.style.bottom = '80px';
musicButton.style.right = '20px';
musicButton.style.zIndex = '9999';
musicButton.style.padding = '12px 20px';
musicButton.style.borderRadius = '50px';
musicButton.style.border = 'none';
musicButton.style.background = '#ff7eb3';
musicButton.style.color = 'white';
musicButton.style.cursor = 'pointer';

document.body.appendChild(musicButton);

let musicPlaying = false;

musicButton.addEventListener('click', () => {

    if(!musicPlaying){

        alert('🎵 Add your kids music file later!');

        musicPlaying = true;
    }
    else{

        alert('⏸️ Music paused');

        musicPlaying = false;
    }
});

// =========================================
// 🌟 CONSOLE MESSAGE
// =========================================
console.log('✨ Synthiya Visuals Kids Website Loaded Successfully ✨');