const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    japanese: [
        "いいえ",
        "本当にそれでいいんですか?",
        "本当に本当ですか??",
        "そんなに確信しているのですか???",
        "もう一度考え直してみませんか?",
        "二度目のチャンスを信じてみませんか?",
        "なぜそんなに冷たいのですか?",
        "話し合うことはできませんか?",
        "もうこれ以上お願いしません!",
        "これ以上は傷つきます!",
        "意地悪しないでください!",
        "どうしてこんなことをするんですか?",
        "チャンスをください!",
        "お願いです、やめてください!",
        "もう一度、最初から始めましょう.."
    ]
};

const answers_yes = {
    english: "Yes",
    japanese: "はい"
};

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    const questionHeading = document.getElementById("question-heading");
    if (language === "japanese") {
        questionHeading.textContent = "私のバレンタインになってくれますか?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    yes_button.innerHTML = answers_yes[language];

    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    const successMessage = document.getElementById("success-message");
    if (language === "japanese") {
        successMessage.textContent = "やったー、またすぐ会いましょう :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}