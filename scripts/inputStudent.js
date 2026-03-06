import { renderStudentList } from "./studentList.js";
import { students, Student } from "./student.js";

const input = document.getElementById("studentName");
export function addStudent() {
  if (input.value.length === 0) {
    return alert("Please enter a student name.");
  }

  students.push(new Student(input.value));
  renderStudentList();

  input.value = "";
}
