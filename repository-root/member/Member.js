export class Member {
  constructor(memberData) {
    this.name = memberData.name;
    this.role = memberData.role;
    this.department = memberData.department;
    this.availability = memberData.availability;
  }

  render() {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
      <h3>${this.name}</h3>
      <p><strong>Role:</strong> ${this.role}</p>
      <p><strong>Department:</strong> ${this.department}</p>
      <p><strong>Status:</strong> ${this.availability}</p>
    `;

    return card;
  }
}
