const subtitles = ["I am Full Stack Developer", "I am an Avid Gamer", "I am an Enthusiastic Traveller"];
const subtitleElement = document.querySelector(".subtitle.subtitle-typed");
let index = 0;
let charIndex = 0;
let currentSubtitle = '';
let typingSpeed = 150;
let pauseBetweenLines = 2000;

function type() {
    if (charIndex < subtitles[index].length) {
        currentSubtitle += subtitles[index].charAt(charIndex);
        subtitleElement.textContent = currentSubtitle;
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetweenLines);
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentSubtitle = currentSubtitle.substring(0, currentSubtitle.length - 1);
        subtitleElement.textContent = currentSubtitle;
        charIndex--;
        setTimeout(deleteText, typingSpeed / 2);
    } else {
        index = (index + 1) % subtitles.length;
        setTimeout(type, typingSpeed);
    }
}

type();