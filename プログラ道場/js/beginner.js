document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const code = button.parentElement.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    button.innerText = "コピー済み";
    setTimeout(() => button.innerText = "コピー", 2000);
  });
});

const questions = [
  {
    question: "タブにはなんと表示される？",
    correct: "テストページ"
  },
  {
    question: "画面のいちばん大きな文字は何？",
    correct: "ようこそ"
  },
  {
    question: "段落として表示される文章はどれ？",
    correct: "これは練習用のページです。"
  }
];

const choicesData = [
  "HTML",
  "ようこそ",
  "これは練習用のページです。",
  "こんにちは",
  "テストページ",
  "body",
  "meta",
  "head",
  "ページタイトル",
  "段落"
];

let currentQuestion = 0;
let selectedText = "";

const questionText = document.getElementById("questionText");
const choicesContainer = document.getElementById("choices");
const dropZone = document.getElementById("dropZone");

function loadQuestion() {
  questionText.innerText = questions[currentQuestion].question;
  dropZone.innerText = "ここにドラッグ";
  document.getElementById("dragResult").innerText = "";

  choicesContainer.innerHTML = "";

  choicesData.forEach(text => {
    const div = document.createElement("div");
    div.className = "choice";
    div.innerText = text;
    div.draggable = true;

    div.addEventListener("dragstart", (e) => {
      selectedText = e.target.innerText;
    });

    choicesContainer.appendChild(div);
  });
}

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.innerText = selectedText;
});

function checkAnswer() {
  const result = document.getElementById("dragResult");

  if (dropZone.innerText === questions[currentQuestion].correct) {
    result.innerText = "🎉 正解！";
    result.style.color = "green";

    currentQuestion++;

    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      questionText.innerText = "すべて正解！お疲れさま！";
      choicesContainer.innerHTML = "";
      dropZone.style.display = "none";
    }

  } else {
    result.innerText = "❌ もう一度考えてみよう";
    result.style.color = "red";
  }
}

loadQuestion();

const codeInput = document.getElementById("codeInput");
const previewArea = document.getElementById("previewArea");

codeInput.addEventListener("input", () => {
  previewArea.innerHTML = codeInput.value;
});

function checkPractice() {
  const result = document.getElementById("practiceResult");
  const userCode = codeInput.value.replace(/\s/g, "");

  if (userCode === "<h1>はじめてのHTML</h1>") {
    result.innerText = "🎉 正解！h1タグが正しく書けています！";
    result.style.color = "green";
  } else {
    result.innerText = "❌ タグや文字をもう一度確認してみよう。";
    result.style.color = "red";
  }
}

const codeInput2 = document.getElementById("codeInput2");
const previewArea2 = document.getElementById("previewArea2");

codeInput2.addEventListener("input", () => {
  previewArea2.innerHTML = codeInput2.value;
});

const codeInput3 = document.getElementById("codeInput3");
const previewArea3 = document.getElementById("previewArea3");

codeInput3.addEventListener("input", () => {
  previewArea3.innerHTML = codeInput3.value;
});

const codeInput4 = document.getElementById("codeInput4");
const previewArea4 = document.getElementById("previewArea4");

codeInput4.addEventListener("input", () => {
  previewArea4.innerHTML = codeInput4.value;
});

const codeInput6 = document.getElementById("codeInput6");
const previewArea6 = document.getElementById("previewArea6");

codeInput6.addEventListener("input", () => {
  previewArea6.innerHTML = codeInput6.value;
});

const cssInput = document.getElementById("cssInput");

cssInput.addEventListener("input", () => {
  let oldStyle = document.getElementById("dynamic-style");
  if (oldStyle) oldStyle.remove();

  const style = document.createElement("style");
  style.id = "dynamic-style";
  style.innerHTML = cssInput.value;

  document.head.appendChild(style);
});
