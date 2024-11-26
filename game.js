let words = ['javascript', 'aspnet', 'java', 'python', 'delphi', 'php', 'react'];
//let words = ['naovaibuscar'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = Array(selectedWord.length).fill('_');
let wrongLetters = [];
let attempts = 6;

function updateWord() {
    document.getElementById('word').textContent = displayedWord.join(' ');
}

function guessLetter() {
    let input = document.getElementById('letter-input');
    let letter = input.value.toLowerCase();
    input.value = '';
    input.focus();

    if (letter.length !== 1 || wrongLetters.includes(letter) || displayedWord.includes(letter)) {
        return;
    }

    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
        updateWord();
    } else {
        wrongLetters.push(letter);
        attempts--;
        document.getElementById('wrong-letters').textContent = `Letras erradas: ${wrongLetters.join(', ')}`;
        //document.getElementById('forca-image').src = `D:\Projetos\Portifolio\images\game${6 - attempts}.png`;
    }

    checkGameStatus();
}

function checkGameStatus() {
    const messageElement = document.getElementById('message');
    
    if (!displayedWord.includes('_')) {
        // Se a palavra não tiver mais underscores, o jogador ganhou
        messageElement.innerHTML = `<p style="color: green; text-align: center;">Você ganhou!</p>`;
    } else if (attempts === 0) {
        // Se as tentativas chegarem a 0, o jogador perdeu
        messageElement.innerHTML = `<p style="color: red; text-align: center;">Você perdeu! A palavra era: ${selectedWord}</p>`;
    }
}

updateWord();