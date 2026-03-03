document.addEventListener("DOMContentLoaded", function() {

  const btn1 = document.getElementById("changeBtn");
  const text1 = document.getElementById("text1");

  if (btn1) {
    btn1.addEventListener("click", function() {
      text1.textContent = "やった！";
    });
  }

});

function copyCode(button) {
  const wrapper = button.closest(".code-wrapper");
  if (!wrapper) return;

  const code = wrapper.querySelector("code").innerText;

  navigator.clipboard.writeText(code).then(() => {
    button.textContent = "コピー完了！";
    setTimeout(() => {
      button.textContent = "コピー";
    }, 1500);
  });
}

const input = document.getElementById("liveInput");
const output = document.getElementById("liveOutput");

if (input && output) {
  input.addEventListener("input", function () {
    output.textContent = input.value;
  });
}

const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

if (colorBtn && colorText) {
  colorBtn.addEventListener("click", function () {
    colorText.classList.toggle("active-color");
  });
}

const addBtn = document.getElementById("addBtn");
const listArea = document.getElementById("listArea");

if (addBtn && listArea) {
  addBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "新しい項目";
    listArea.appendChild(li);
  });
}

const form = document.getElementById("sampleForm");
const message = document.getElementById("formMessage");

if (form && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "送信は止められました";
  });
}

const dataBtns = document.querySelectorAll(".dataBtn");

dataBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    document.body.style.background = btn.dataset.color;
  });
});

const todoInput = document.getElementById("todoInput");
const todoAdd = document.getElementById("todoAdd");
const todoList = document.getElementById("todoList");

if (todoAdd && todoInput && todoList) {
  todoAdd.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";
  });
}

const resetBtn = document.getElementById("resetColor");

if (resetBtn) {
  resetBtn.addEventListener("click", function () {
    document.body.style.background = "";
  });
}

const toggleBtn = document.getElementById("toggleBtn");
const box = document.getElementById("boxToggle");

if (toggleBtn && box) {
  toggleBtn.addEventListener("click", function () {
    box.classList.toggle("active");
  });
}

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (openModal && closeModal && modal) {
  openModal.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
}