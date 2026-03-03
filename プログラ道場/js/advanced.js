document.addEventListener("DOMContentLoaded", function () {

  const todoInput = document.getElementById("todoInput");
  const addTodo = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const clearAll = document.getElementById("clearAll");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentFilter = "all";

  /* ===== 初期表示 ===== */
  renderTodos();

  /* ===== 追加 ===== */
  addTodo.addEventListener("click", function () {
    const text = todoInput.value.trim();
    if (text === "") return;

    todos.push({
      id: Date.now(),
      text: text,
      completed: false
    });

    saveTodos();
    renderTodos();
    todoInput.value = "";
  });

  /* ===== 全削除 ===== */
  clearAll.addEventListener("click", function () {
    todos = [];
    saveTodos();
    renderTodos();
  });

  /* ===== フィルター ===== */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      renderTodos();
    });
  });

  /* ===== 保存 ===== */
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  /* ===== 描画 ===== */
  function renderTodos() {
    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
      filtered = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
      filtered = todos.filter(todo => todo.completed);
    }

    filtered.forEach(todo => {

      const li = document.createElement("li");
      if (todo.completed) li.classList.add("completed");

      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button class="complete-btn">✓</button>
          <button class="delete-btn">✕</button>
        </div>
      `;

      /* 完了切替 */
      li.querySelector(".complete-btn").addEventListener("click", function () {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
      });

      /* 削除 */
      li.querySelector(".delete-btn").addEventListener("click", function () {
        todos = todos.filter(t => t.id !== todo.id);
        saveTodos();
        renderTodos();
      });

      todoList.appendChild(li);
    });
  }

});

function copyCode(button) {
  const wrapper = button.closest(".code-wrapper");
  const code = wrapper.querySelector("code").innerText;

  navigator.clipboard.writeText(code).then(() => {
    button.textContent = "コピー完了";
    setTimeout(() => {
      button.textContent = "コピー";
    }, 1500);
  });
}

function toggleAnswer(button) {
  const box = button.nextElementSibling;

  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "解答を閉じる";
  } else {
    box.style.display = "none";
    button.textContent = "解答を見る";
  }
}

async function loadUser() {
  const box = document.getElementById("userBox");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!res.ok) {
      throw new Error("通信失敗");
    }

    const data = await res.json();

    box.innerHTML = `
      <p><strong>名前:</strong> ${data.name}</p>
      <p><strong>メール:</strong> ${data.email}</p>
      <p><strong>会社:</strong> ${data.company.name}</p>
    `;

  } catch (error) {
    box.innerHTML = `<p style="color:red;">エラー発生</p>`;
  }
}

function toggleBossExplanation(button) {
  const box = button.nextElementSibling;

  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "解説を閉じる";
  } else {
    box.style.display = "none";
    button.textContent = "解説を見る";
  }
}

function toggleFinalBoss(button) {
  const box = button.nextElementSibling;

  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "解説を閉じる";
  } else {
    box.style.display = "none";
    button.textContent = "解説を見る";
  }
}

const commentMap = new Map();

comments.forEach(comment => {
  commentMap.set(
    comment.postId,
    (commentMap.get(comment.postId) || 0) + 1
  );
});

function toggleBossFast(button) {
  const box = button.nextElementSibling;

  if (box.style.display === "none") {
    box.style.display = "block";
    button.textContent = "解説を閉じる";
  } else {
    box.style.display = "none";
    button.textContent = "解説を見る";
  }
}