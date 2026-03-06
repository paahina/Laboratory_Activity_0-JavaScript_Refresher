export class Student {
  #id;
  #name;
  #isPresent;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#isPresent = false;
  }
  get name() {
    return this.#name;
  }
  get isPresent() {
    return this.#isPresent;
  }
  get id() {
    return this.#id;
  }
}

export const students = [new Student(1, "Cyrus Robles")];
