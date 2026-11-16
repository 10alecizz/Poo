import { Member } from "./Member.js";

class TeamDirectoryApp {
  constructor() {
    this.members = [];
    this.selectedDepartment = "All";
    this.container = document.getElementById("member-container");
    this.filterSelect = document.getElementById("department-filter");
  }

  async init() {
    try {
      const response = await fetch("team.json");
      const data = await response.json();
      this.members = data.map((memberData) => new Member(memberData));

      this.populateFilterOptions();
      this.setupEventListeners();
      this.render();
    } catch (error) {
      console.error("Error loading team data:", error);
    }
  }

  populateFilterOptions() {
    const departments = [...new Set(this.members.map((m) => m.department))];
    departments.forEach((dept) => {
      const option = document.createElement("option");
      option.value = dept;
      option.textContent = dept;
      this.filterSelect.appendChild(option);
    });
  }

  setupEventListeners() {
    this.filterSelect.addEventListener("change", (e) => {
      this.selectedDepartment = e.target.value;
      this.render();
    });
  }

  render() {
    this.container.innerHTML = "";
    const membersToRender =
      this.selectedDepartment === "All"
        ? this.members
        : this.members.filter((m) => m.department === this.selectedDepartment);

    membersToRender.forEach((member) => {
      this.container.appendChild(member.render());
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new TeamDirectoryApp();
  app.init();
});
