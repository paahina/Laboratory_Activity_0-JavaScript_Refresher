import { students } from "./student.js";

export function renderStudentList() {
  document.querySelector(".student-lists").innerHTML = `
    ${renderStudents()}
  `;

  document.querySelectorAll(".js-button-present").forEach((button) => {
    button.addEventListener("click", (e) => {
      const student = students.find(
        (student) => student.id === Number(e.target.dataset.studentId),
      );
      document
        .querySelector(`.studentId-${student.id}`)
        .classList.add("mark-present");
    });
  });

  document.querySelectorAll(".js-button-absent").forEach((button) => {
    button.addEventListener("click", (e) => {
      const student = students.find(
        (student) => student.id === Number(e.target.dataset.studentId),
      );
      document
        .querySelector(`.studentId-${student.id}`)
        .classList.add("mark-absent");
    });
  });
  document.querySelectorAll(".js-button-remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.dataset.studentId);
    });
  });
  function renderStudents() {
    let html = "";

    students.forEach((student) => {
      html += `
      <li class="student-box studentId-${student.id}">
        <div class="student-name">
          <p>${student.name}</p>
          <p class="student-status hidden">status</p>
        </div>
        <button class="button present js-button-present" data-student-id="${student.id}">Mark Present</button>
        <button class="button absent js-button-absent" data-student-id="${student.id}">Mark Absent</button>
        <button class="button remove js-button-remove" data-student-id="${student.id}">Remove</button>
      </li>
      `;
    });

    return html;
  }
}
