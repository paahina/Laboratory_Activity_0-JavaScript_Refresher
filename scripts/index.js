import { students } from "./student.js";

function renderStudentList() {
  document.querySelector(".student-lists").innerHTML = `
    ${renderStudents()}
  `;
  function renderStudents() {
    let html = "";

    students.forEach((student) => {
      html += `
      <li class="student-box">
        <div class="student-name">
          <p>${student.name}</p>
          <p class="student-status hidden">status</p>
        </div>
        <button class="button present">Mark Present</button>
        <button class="button absent">Mark Absent</button>
        <button class="button remove">Remove</button>
      </li>
      `;
    });

    return html;
  }
}

renderStudentList();
