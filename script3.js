document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "В ритме сердца хлоп",
        "быть счастливым чтоб",
        "Вдохновения ток", "до мурашек чтоб",
        "Жизнь одна у нас", "смысл здесь сейчас",
        "Быть собой мой друг", "непростой путь",
    ];

    const delay = 33;
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    displayLyrics();
});

