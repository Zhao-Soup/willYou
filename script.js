const messages = [
    "Are you sure?👀",
    "Really sure??🥲",
    "Are you positive?🙂",
    "Pookie please...😣",
    "Just think about it!😉",
    "If you say no, I will be really sad...😥",
    "I will be very sad...😫",
    "I will be very very very sad...🤐",
    "Ok fine, I will stop asking...😨",
    "Just kidding, say yes please! ❤️",
    "Don't make me bring out the puppy eyes 🥺",
    "You're breaking my tiny pixel heart 💔",
    "What if I say pretty please?",
    "Pretty please with a cherry on top? 🍒",
    "I’ll owe you one. Or ten.",
    "Do it for the vibes ✨",
    "My happiness depends on this 😢",
    "You wouldn’t say no to me... would you?",
    "I baked you a virtual cookie 🍪",
    "Saying yes will make everything better!",
    "Think of the children! (or at least this app)",
    "Imagine how awesome you'll feel saying yes 😎",
    "Don’t make me cry 😭",
    "Just imagine the joy of clicking YES!",
    "I believe in you... to say yes!",
    "Yes is just three letters away...",
    "Say yes and I’ll stop bugging you (maybe)",
    "C’mon bestie don’t do me like this 🫠",
    "This message is certified YES-core ✅",
    "You're only one click away from greatness!",
    "Let’s make this happen 🔥",
    "If not now, when? If not you, who? 👀",
    "Still thinking? That’s okay… but say yes 🥹",
    "You’re literally so close to making my day 🌈",
    "The universe wants you to say yes 🌌",
    "A yes a day keeps the sadness away 🧃",
    "I’ve never wanted anything more in my life 😩",
    "Say yes and unlock premium good vibes 🪄",
    "Last chance... until the next one 😅",
    "Seriously, you’ll make my code so happy 💻❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}