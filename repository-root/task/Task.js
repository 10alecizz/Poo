export class Task {
  constructor(taskData, onComplete) {
    this.text = taskData.text;
    this.category = taskData.category;
    this.completed = taskData.completed;
    this.onComplete = onComplete;
  }

  render() {
    const item = document.createElement("div");
    item.className = `task-item ${this.completed ? "completed" : ""}`;

    item.innerHTML = `
      <div>
        <span class="task-text">${this.text}</span>
        <span class="category-tag">(${this.category})</span>
      </div>
      <button class="complete-btn" ${this.completed ? "disabled" : ""}>
        ${this.completed ? "Completed" : "Complete"}
      </button>
    `;

    const button = item.querySelector("button");
    button.addEventListener("click", () => {
      this.completed = true;
      if (this.onComplete) this.onComplete();
    });

    return item;
  }
}
