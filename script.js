```javascript
const puzzlePage = document.getElementById("puzzlePage");
const hero = document.querySelector(".hero");
const mainPage = document.getElementById("mainPage");

const puzzleAnswer = document.getElementById("puzzleAnswer");
const puzzleResult = document.getElementById("puzzleResult");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");

const startBtn = document.getElementById("startBtn");

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");


/* BAŞLANGIÇ */

puzzlePage.style.display = "flex";
hero.style.display = "none";
mainPage.style.display = "none";


/* BULMACALAR */

const puzzles = [
    {
        question: "Bebişlerimizin isimleri ne olacak? 👶❤️",
        answers: [
            "aras ve ayça",
            "aras ayça",
            "ayça ve aras",
            "aras ayca"
        ]
    },

    {
        question: "Biz hangi tarihte sevgili olduk? ❤️",
        answers: [
            "11.01.2025",
            "11/01/2025",
            "11 01 2025"
        ]
    },

    {
        question: "En sevdiğim kişi kim? 🥰",
        answers: [
            "yasemin"
        ]
    },

    {
        question: "Beni ne kadar çok seviyorsun? ❤️",
        answers: [
            "sonsuz",
            "sonsuz kadar",
            "çok"
        ]
    },

    {
        question: "Bütün bulmacaları çözdüğünde seni bekleyen kişi kim? 💘",
        answers: [
            "umut"
        ]
    }
];

let currentPuzzle = 0;


/* CEVABI TEMİZLE */

function temizle(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c");
}


/* BULMACA KONTROL */

function checkAnswer() {

    const answer = temizle(puzzleAnswer.value);

    if (answer === "") {

        puzzleResult.innerHTML =
            "✍️ Önce bir cevap yaz bebeğim ❤️";

        return;
    }

    const correct =
        puzzles[currentPuzzle].answers.some(function (cevap) {

            return temizle(cevap) === answer;

        });


    if (correct) {

        puzzleResult.innerHTML =
            "✅ Doğru cevap! ❤️";

        currentPuzzle++;


        if (currentPuzzle >= puzzles.length) {

            setTimeout(function () {

                puzzlePage.style.display = "none";

                hero.style.display = "flex";
                hero.style.opacity = "1";

            }, 1000);

            return;
        }


        setTimeout(function () {

            document.getElementById("puzzleNumber").innerText =
                "Bulmaca " + (currentPuzzle + 1) + " / 5";

            document.getElementById("puzzleQuestion").innerText =
                puzzles[currentPuzzle].question;

            puzzleAnswer.value = "";

            puzzleResult.innerHTML = "";

            puzzleAnswer.focus();

        }, 800);

    } else {

        puzzleResult.innerHTML =
            "❌ Yanlış cevap 😏 Bir daha düşün bakalım ❤️";

    }
}


/* CEVAP BUTONU */

checkAnswerBtn.addEventListener("click", checkAnswer);


/* TELEFONDA ENTER */

puzzleAnswer.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkAnswer();

    }

});


/* BAŞLA BUTONU */

startBtn.addEventListener("click", function() {

    hero.style.opacity = "0";

    setTimeout(function() {

        hero.style.display = "none";

        mainPage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts();

    }, 600);

});


/* UÇAN KALPLER */

function createHearts() {

    setInterval(function() {

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.top =
            window.innerHeight + "px";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        heart.style.color = "#ff2d55";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "5s linear";

        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                "translateY(-120vh)";

            heart.style.opacity = "0";

        }, 10);


        setTimeout(function() {

            heart.remove();

        }, 5000);

    }, 350);

}


/* BİRLİKTE GEÇEN GÜNLER */

function updateLoveCounter() {

    const start =
        new Date("2025-01-11T00:00:00");

    const now =
        new Date();

    const diff =
        now - start;

    const days =
        Math.floor(
            diff / 1000 / 60 / 60 / 24
        );

    const counter =
        document.getElementById("loveCounter");


    if (counter) {

        counter.innerHTML =
            "Seninle " +
            days +
            " gündür birlikteyiz ❤️";

    }

}

updateLoveCounter();

setInterval(updateLoveCounter, 60000);


/* FİNAL SÜRPRİZİ */

surpriseBtn.addEventListener("click", function() {

    surpriseBtn.style.display = "none";

    surpriseMessage.style.display = "block";


    for (let i = 0; i < 20; i++) {

        setTimeout(function() {

            const heart =
                document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom =
                "-30px";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.zIndex = "9999";

            heart.style.pointerEvents = "none";

            heart.style.transition =
                "transform 4s linear, opacity 4s";

            document.body.appendChild(heart);


            setTimeout(function() {

                heart.style.transform =
                    "translateY(-110vh) rotate(360deg)";

                heart.style.opacity = "0";

            }, 100);


            setTimeout(function() {

                heart.remove();

            }, 4200);

        }, i * 100);

    }

});
```
