// Animasi saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.9)";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease-out, transform 1s ease-out";
        document.body.style.opacity = "1";
        document.body.style.transform = "scale(1)";
    }, 100);
});

// Efek teks berkedip menyala
const glowText = document.createElement("style");
glowText.innerHTML = `
    @keyframes glow {
        0% { text-shadow: 0 0 10px #fff, 0 0 20px #ffdd57, 0 0 30px #ffdd57; }
        100% { text-shadow: 0 0 20px #fff, 0 0 30px #ff5733, 0 0 40px #ff5733; }
    }

    .glow-text {
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        color: white;
        animation: glow 1.5s infinite alternate;
    }
`;
document.head.appendChild(glowText);

// Efek loading animasi berkedip
const loadingText = document.createElement("style");
loadingText.innerHTML = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }

    .loading {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        color: white;
        text-align: center;
        animation: blink 1s infinite;
    }
`;
document.head.appendChild(loadingText);