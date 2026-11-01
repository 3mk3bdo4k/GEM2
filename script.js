
/* =========================================
   GRAND EGYPTIAN MUSEUM
   Interactive JavaScript
   Prepared by: Abdelrahman Ahmed
   Scientific Committee
========================================= */

"use strict";


/* =========================================
   1. MUSEUM COLLECTION
========================================= */

const artifacts = [

    {
        id: 1,
        title: "تمثال رمسيس الثاني",
        category: "تماثيل",
        image: "images.jpg",
        description: "من أبرز المعالم الأثرية بالمتحف، ويستقبل الزائرين في البهو العظيم.",
        details: "يُعد تمثال الملك رمسيس الثاني من أبرز المعالم التي يراها زوار المتحف المصري الكبير. ويعكس التمثال عظمة الفن والنحت المصري القديم، وقوة حضور الملك في التاريخ المصري."
    },

    {
        id: 2,
        title: "كنوز توت عنخ آمون",
        category: "كنوز ملكية",
        image: "images (1).jpg",
        description: "مجموعة أثرية فريدة ترتبط بمقبرة الملك الشاب توت عنخ آمون.",
        details: "تضم مجموعة الملك توت عنخ آمون عددًا كبيرًا من القطع الجنائزية والملكية التي اكتُشفت في مقبرته بوادي الملوك عام 1922، وتُعد من أشهر المجموعات الأثرية في العالم."
    },

    {
        id: 3,
        title: "مراكب الملك خوفو",
        category: "مراكب",
        image: "مراكب الملك خوفو.jpg",
        description: "مراكب أثرية ترتبط بالملك خوفو وبعالم العقائد الجنائزية.",
        details: "يضم المتحف مساحة مخصصة لمراكب الملك خوفو، وهي من أهم الشواهد الأثرية على مهارة المصري القديم في صناعة السفن واستخدام الأخشاب."
    },

    {
        id: 4,
        title: "الدرج العظيم",
        category: "معالم المتحف",
        image: "الدرج العظيم.jpg",
        description: "مساحة معمارية مميزة تعرض تماثيل وقطعًا أثرية ضخمة.",
        details: "يُعد الدرج العظيم من أبرز المساحات الداخلية بالمتحف، حيث يعرض مجموعة من التماثيل والعناصر الأثرية الضخمة في مسار بصري يعرّف الزائر بعظمة الحضارة المصرية."
    },

    {
        id: 5,
        title: "المسلة المعلقة",
        category: "معالم المتحف",
        image: "المسله.jpg",
        description: "عنصر معماري فريد يتيح رؤية الجزء السفلي من المسلة.",
        details: "تُعد المسلة المعلقة من العناصر المعمارية المميزة في المتحف، وتسمح للزائر برؤية قاعدة المسلة من أسفل بطريقة غير تقليدية."
    },

    {
        id: 6,
        title: "التماثيل الملكية",
        category: "مقتنيات ملكية",
        image: "التماثيل الملكيه.jpg",
        description: "تماثيل تعكس ملامح الملوك والفن المصري القديم.",
        details: "تعكس التماثيل الملكية تطور أساليب النحت والتعبير الفني في مصر القديمة، وتوضح مكانة الملك في الحياة السياسية والدينية."
    },

    {
        id: 7,
        title: "الآثار الحجرية",
        category: "تماثيل",
        image: "الاثار الحجرية.jpg",
        description: "شواهد أثرية توضح براعة المصري القديم في تشكيل الحجر.",
        details: "تكشف الآثار الحجرية عن خبرة المصري القديم في اختيار الأحجار ونحتها ونقلها، وعن تطور تقنيات البناء والنحت عبر العصور."
    },

    {
        id: 8,
        title: "المقتنيات الجنائزية",
        category: "كنوز ملكية",
        image: "المقتنيات الجنائزية.jpg",
        description: "قطع ترتبط بالمعتقدات الجنائزية والحياة الأخرى.",
        details: "تساعد المقتنيات الجنائزية الباحثين على فهم معتقدات المصري القديم حول الموت والبعث والحياة الأخرى."
    }

];


/* =========================================
   2. COLLECTION DISPLAY
========================================= */

const artifactGrid = document.getElementById("artifactGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");


function displayArtifacts(items) {

    if (!artifactGrid) return;

    artifactGrid.innerHTML = "";

    if (items.length === 0) {

        emptyState.hidden = false;
        return;

    }

    emptyState.hidden = true;

    items.forEach((artifact) => {

        const card = document.createElement("article");

        card.className = "artifact-card";

        const imageBox = document.createElement("div");
        imageBox.className = "artifact-image";

        const image = document.createElement("img");

        image.src = artifact.image;
        image.alt = artifact.title;
        image.loading = "lazy";

        image.onerror = () => {
            image.style.display = "none";
        };

        imageBox.appendChild(image);

        const category = document.createElement("span");
        category.className = "artifact-category";
        category.textContent = artifact.category;

        imageBox.appendChild(category);

        const info = document.createElement("div");
        info.className = "artifact-info";

        const title = document.createElement("h3");
        title.textContent = artifact.title;

        const description = document.createElement("p");
        description.textContent = artifact.description;

        const detailsButton = document.createElement("button");

        detailsButton.className = "artifact-details";
        detailsButton.type = "button";
        detailsButton.textContent = "اكتشف التفاصيل ←";

        detailsButton.addEventListener("click", () => {
            showArtifactDetails(artifact);
        });

        info.append(title, description, detailsButton);

        card.append(imageBox, info);

        artifactGrid.appendChild(card);

    });

}


function filterArtifacts() {

    const searchValue = searchInput.value.trim().toLowerCase();

    const selectedCategory = categoryFilter.value;

    const filtered = artifacts.filter((artifact) => {

        const matchesSearch =
            artifact.title.toLowerCase().includes(searchValue) ||
            artifact.description.toLowerCase().includes(searchValue) ||
            artifact.category.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            artifact.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayArtifacts(filtered);

}


searchInput.addEventListener("input", filterArtifacts);

categoryFilter.addEventListener("change", filterArtifacts);

displayArtifacts(artifacts);


/* =========================================
   3. ARTIFACT DETAILS
========================================= */

function showArtifactDetails(artifact) {

    const overlay = document.createElement("div");

    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 2000;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const modal = document.createElement("div");

    modal.style.cssText = `
        background: #f5f0e6;
        width: min(550px, 100%);
        padding: 35px;
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
        border: 2px solid #c7a45b;
        text-align: right;
        direction: rtl;
    `;

    const closeButton = document.createElement("button");

    closeButton.textContent = "✕";

    closeButton.style.cssText = `
        position: absolute;
        top: 12px;
        left: 15px;
        border: none;
        background: transparent;
        font-size: 22px;
        cursor: pointer;
    `;

    closeButton.setAttribute("aria-label", "إغلاق");

    closeButton.addEventListener("click", () => {
        overlay.remove();
    });

    const heading = document.createElement("h2");

    heading.textContent = artifact.title;

    heading.style.cssText = `
        margin-bottom: 15px;
        color: #92713b;
        font-size: 24px;
    `;

    const category = document.createElement("span");

    category.textContent = artifact.category;

    category.style.cssText = `
        display: inline-block;
        margin-bottom: 15px;
        color: #92713b;
        font-size: 12px;
    `;

    const description = document.createElement("p");

    description.textContent = artifact.details;

    description.style.cssText = `
        color: #514a3e;
        font-size: 14px;
        line-height: 2.3;
    `;

    modal.append(
        closeButton,
        heading,
        category,
        description
    );

    overlay.appendChild(modal);

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            overlay.remove();
        }

    });

    document.body.appendChild(overlay);

}


/* =========================================
   4. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   5. SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* =========================================
   6. QUIZ QUESTIONS
========================================= */

const questions = [

    {
        question: "أين يقع المتحف المصري الكبير؟",

        answers: [
            "الإسكندرية",
            "بالقرب من أهرامات الجيزة",
            "الأقصر",
            "أسوان"
        ],

        correct: 1,

        explanation: "يقع المتحف المصري الكبير بالقرب من أهرامات الجيزة."
    },

    {
        question: "أي ملك ترتبط به مجموعة أثرية شهيرة بالمتحف؟",

        answers: [
            "توت عنخ آمون",
            "أحمس",
            "إخناتون",
            "منقرع"
        ],

        correct: 0,

        explanation: "تضم مجموعة توت عنخ آمون كنوزًا أثرية اكتُشفت في مقبرته."
    },

    {
        question: "ما اسم المساحة التي تعرض تماثيل ضخمة داخل المتحف؟",

        answers: [
            "قاعة الموسيقى",
            "الدرج العظيم",
            "قاعة البحار",
            "المكتبة الملكية"
        ],

        correct: 1,

        explanation: "الدرج العظيم من أبرز المساحات الداخلية بالمتحف."
    },

    {
        question: "ما الهدف الأساسي من مركز الترميم والحفظ؟",

        answers: [
            "صناعة آثار جديدة",
            "بيع القطع الأثرية",
            "دراسة الآثار وحفظها وترميمها",
            "تخزين الكتب فقط"
        ],

        correct: 2,

        explanation: "يعمل المركز على دراسة القطع الأثرية وحفظها وترميمها."
    },

    {
        question: "ماذا تعني المراقبة البيئية في المتاحف؟",

        answers: [
            "مراقبة الزوار فقط",
            "متابعة الحرارة والرطوبة والضوء",
            "زيادة الإضاءة باستمرار",
            "تغيير مكان الآثار يوميًا"
        ],

        correct: 1,

        explanation: "تساعد المراقبة البيئية في ضبط الظروف المحيطة بالقطع الأثرية."
    },

    {
        question: "ما المقصود بالتحليل غير الإتلافي؟",

        answers: [
            "فحص الأثر دون إحداث تلف متعمد فيه",
            "تكسير الأثر لمعرفة مكوناته",
            "تنظيف الأثر بالماء فقط",
            "نقل الأثر إلى مكان آخر"
        ],

        correct: 0,

        explanation: "يساعد التحليل غير الإتلافي على دراسة القطع مع الحفاظ عليها."
    },

    {
        question: "بأي ملك ترتبط مراكب الملك خوفو؟",

        answers: [
            "رمسيس الثاني",
            "توت عنخ آمون",
            "خوفو",
            "تحتمس الثالث"
        ],

        correct: 2,

        explanation: "المراكب مرتبطة بالملك خوفو."
    },

    {
        question: "ما الهدف من التوثيق الرقمي للآثار؟",

        answers: [
            "إخفاء معلومات القطع",
            "تسجيل البيانات ونتائج الدراسة",
            "استبدال الآثار بنسخ ورقية",
            "التخلص من القطع القديمة"
        ],

        correct: 1,

        explanation: "يساعد التوثيق الرقمي في حفظ بيانات القطع وتسهيل دراستها."
    }

];


/* =========================================
   7. QUIZ ELEMENTS
========================================= */

const quizStart = document.getElementById("quizStart");
const quizPlay = document.getElementById("quizPlay");
const quizResult = document.getElementById("quizResult");

const visitorNameInput = document.getElementById("visitorName");

const startQuizButton = document.getElementById("startQuiz");
const nextQuestionButton = document.getElementById("nextQuestion");

const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");

const progressBar = document.getElementById("progressBar");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const quizFeedback = document.getElementById("quizFeedback");

const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const finalScore = document.getElementById("finalScore");

const showCertificateButton = document.getElementById("showCertificate");
const restartQuizButton = document.getElementById("restartQuiz");

const certificate = document.getElementById("certificate");
const certificateName = document.getElementById("certificateName");
const certificateScore = document.getElementById("certificateScore");
const certificateDate = document.getElementById("certificateDate");

const printCertificateButton = document.getElementById("printCertificate");
const hideCertificateButton = document.getElementById("hideCertificate");


/* =========================================
   8. QUIZ VARIABLES
========================================= */

let currentQuestion = 0;
let score = 0;
let visitorName = "";
let answerSelected = false;


/* =========================================
   9. START QUIZ
========================================= */

startQuizButton.addEventListener("click", () => {

    visitorName = visitorNameInput.value.trim();

    if (visitorName.length < 3) {

        alert("من فضلك اكتب اسمك بشكل صحيح قبل بدء الاختبار.");

        visitorNameInput.focus();

        return;

    }

    currentQuestion = 0;
    score = 0;

    quizStart.hidden = true;
    quizResult.hidden = true;
    quizPlay.hidden = false;

    certificate.hidden = true;

    showQuestion();

});


/* =========================================
   10. DISPLAY QUESTION
========================================= */

function showQuestion() {

    answerSelected = false;

    const question = questions[currentQuestion];

    questionCounter.textContent =
        `السؤال ${currentQuestion + 1} من ${questions.length}`;

    scoreCounter.textContent = `النتيجة: ${score}`;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    questionText.textContent = question.question;

    quizFeedback.textContent = "";

    quizFeedback.className = "quiz-feedback";

    answersContainer.innerHTML = "";

    nextQuestionButton.disabled = true;

    nextQuestionButton.textContent =
        currentQuestion === questions.length - 1
            ? "عرض النتيجة ←"
            : "السؤال التالي ←";


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer-option";

        button.textContent = answer;

        button.addEventListener("click", () => {

            selectAnswer(index, button);

        });

        answersContainer.appendChild(button);

    });

}


/* =========================================
   11. CHECK ANSWER
========================================= */

function selectAnswer(selectedIndex, selectedButton) {

    if (answerSelected) return;

    answerSelected = true;

    const question = questions[currentQuestion];

    const allButtons =
        answersContainer.querySelectorAll(".answer-option");


    allButtons.forEach((button) => {

        button.disabled = true;

    });


    if (selectedIndex === question.correct) {

        score++;

        selectedButton.classList.add("correct");

        quizFeedback.textContent =
            "إجابة صحيحة! " + question.explanation;

        quizFeedback.classList.add("success");

    } else {

        selectedButton.classList.add("wrong");

        allButtons[question.correct].classList.add("correct");

        quizFeedback.textContent =
            "إجابة غير صحيحة. " + question.explanation;

        quizFeedback.classList.add("error");

    }


    scoreCounter.textContent = `النتيجة: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    nextQuestionButton.disabled = false;

}


/* =========================================
   12. NEXT QUESTION
========================================= */

nextQuestionButton.addEventListener("click", () => {

    if (!answerSelected) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

});


/* =========================================
   13. FINISH QUIZ
========================================= */

function finishQuiz() {

    quizPlay.hidden = true;

    quizResult.hidden = false;

    finalScore.textContent =
        `${score} / ${questions.length}`;


    if (score === questions.length) {

        resultTitle.textContent = "ممتاز! أنت خبير بالمتحف";

        resultMessage.textContent =
            "لقد أجبت عن جميع الأسئلة بشكل صحيح. أحسنت!";

    } else if (score >= 6) {

        resultTitle.textContent = "أداء رائع!";

        resultMessage.textContent =
            "لديك معرفة ممتازة بالمتحف المصري الكبير.";

    } else if (score >= 4) {

        resultTitle.textContent = "أحسنت المحاولة!";

        resultMessage.textContent =
            "لقد حققت نتيجة جيدة، ويمكنك إعادة الاختبار لتحسينها.";

    } else {

        resultTitle.textContent = "رحلة تعلم جديدة!";

        resultMessage.textContent =
            "تعرف أكثر على المتحف ثم حاول مرة أخرى.";

    }

}


/* =========================================
   14. GENERATE CERTIFICATE
========================================= */

showCertificateButton.addEventListener("click", () => {

    certificateName.textContent = visitorName;

    certificateScore.textContent =
        `${score} / ${questions.length}`;

    const today = new Date();

    certificateDate.textContent =
        today.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    certificate.hidden = false;

    certificate.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================================
   15. PRINT / SAVE PDF
========================================= */

printCertificateButton.addEventListener("click", () => {

    window.print();

});


/* =========================================
   16. HIDE CERTIFICATE
========================================= */

hideCertificateButton.addEventListener("click", () => {

    certificate.hidden = true;

});


/* =========================================
   17. RESTART QUIZ
========================================= */

restartQuizButton.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    certificate.hidden = true;

    quizResult.hidden = true;

    quizPlay.hidden = true;

    quizStart.hidden = false;

    visitorNameInput.value = visitorName;

    quizStart.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================================
   18. INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    displayArtifacts(artifacts);

    console.log(
        "Grand Egyptian Museum website loaded successfully."
    );

    console.log(
        "Prepared by Abdelrahman Ahmed - Scientific Committee."
    );

});
