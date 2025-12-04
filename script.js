const slides = [
    "Find a canvas assignment that supports Text Entry",
    'Click the embed button',
    'Paste the <span class="given-code" id="copyCode">Given Code</span>',
    "After pasting, click the embed button again",
    "Rat Games will be embedded, but for a better experience click the fullscreen button",
    "Done!",
    "Pro Tip - Keep the code bookmarked so you can access it whenever"
];

const copyPayload = `<p style="margin:0;padding:0;height:100vh;"><iframe src="https://ratgames.vercel.app" style="width:100%;height:100%;border:0;display:block;"></iframe></p>`;

let currentSlide = 0;

const slideText = document.getElementById("slideText");
const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepsButtons = document.getElementById("stepsButtons");

function updateSlide() {
    slideText.innerHTML = slides[currentSlide];
    slideImage.src = `https://4texas4.github.io/canvas-tutorial/${currentSlide + 1}.png`;

    prevBtn.style.display = currentSlide === 0 ? "none" : "block";
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block";

    document.querySelectorAll(".steps-buttons button").forEach((b, i) => {
        b.classList.toggle("active", i === currentSlide);
    });

    setTimeout(() => {
        const codeBtn = document.getElementById("copyCode");
        if (codeBtn) {
            codeBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(copyPayload);
                alert("Code copied!");
            });
        }
    }, 50);
}

prevBtn.onclick = () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
};

nextBtn.onclick = () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
};

for (let i = 0; i < slides.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = (i + 1 === 7) ? "Tip" : (i + 1);
    btn.onclick = () => {
        currentSlide = i;
        updateSlide();
    };
    stepsButtons.appendChild(btn);
}

updateSlide();
