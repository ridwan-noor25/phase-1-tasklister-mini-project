document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page reload

    const taskText = input.value.trim(); // Get input value

    if (taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      list.appendChild(li); // Append to the list
    }

    input.value = ""; // Clear input field
  });
});