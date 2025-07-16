document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const taskInput = document.getElementById("new-task-description");
    const priorityInput = document.getElementById("priority");

    const task = taskInput.value.trim();
    const priority = priorityInput.value;

    if (task === "") return; // Don't add empty tasks

    const li = document.createElement("li");
    li.textContent = task + " ";

    // Color based on priority
    if (priority === "high") {
      li.style.color = "red";
    } else if (priority === "medium") {
      li.style.color = "orange";
    } else {
      li.style.color = "green";
    }

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    form.reset(); // Clear input and dropdown
  });
});
