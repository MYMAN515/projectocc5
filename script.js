const topics = {
    changes: {
        slides: [
            "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    hygiene: {
        slides: [
            "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    confidence: {
        slides: [
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

const screens = {
    home: document.getElementById("homepage"),
    slides: document.getElementById("slideScreen"),
    completion: document.getElementById("completionScreen")
};

const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const slideImage = document.getElementById("slideImage");
const homeBtn = document.getElementById("homeBtn");
const backBtn = document.getElementById("backBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

let activeTopic = null;
let slideIndex = 0;

const showScreen = (screenKey) => {
    Object.values(screens).forEach((screen) => screen.classList.remove("active"));
    screens[screenKey].classList.add("active");
    progressBar.classList.toggle("visible", screenKey === "slides");
};

const updateSlide = () => {
    if (!activeTopic) {
        return;
    }

    const slides = topics[activeTopic].slides;
    slideImage.src = slides[slideIndex];
    const progress = ((slideIndex + 1) / slides.length) * 100;
    progressFill.style.width = `${progress}%`;
    prevBtn.disabled = slideIndex === 0;
};

const startTopic = (topicKey) => {
    activeTopic = topicKey;
    slideIndex = 0;
    updateSlide();
    showScreen("slides");
};

const completeTopic = () => {
    showScreen("completion");
    progressFill.style.width = "0%";
};

homeBtn.addEventListener("click", () => {
    activeTopic = null;
    showScreen("home");
});

backBtn.addEventListener("click", () => {
    if (!activeTopic) {
        return;
    }
    if (slideIndex > 0) {
        slideIndex -= 1;
        updateSlide();
    } else {
        showScreen("home");
    }
});

prevBtn.addEventListener("click", () => {
    if (slideIndex > 0) {
        slideIndex -= 1;
        updateSlide();
    }
});

nextBtn.addEventListener("click", () => {
    if (!activeTopic) {
        return;
    }
    const slides = topics[activeTopic].slides;
    if (slideIndex < slides.length - 1) {
        slideIndex += 1;
        updateSlide();
    } else {
        completeTopic();
    }
});

restartBtn.addEventListener("click", () => {
    activeTopic = null;
    showScreen("home");
});

slideImage.addEventListener("click", () => {
    nextBtn.click();
});

Array.from(document.querySelectorAll(".topic-card")).forEach((card) => {
    card.addEventListener("click", () => {
        const topicKey = card.dataset.topic;
        startTopic(topicKey);
    });
});

showScreen("home");
