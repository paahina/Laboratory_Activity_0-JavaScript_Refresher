export class Student {
  #name;
  #isPresent;
  constructor(name) {
    this.#name = name;
    this.#isPresent = false;
  }
  get name() {
    return this.#name;
  }
  get isPresent() {
    return this.#isPresent;
  }
}

export const students = [new Student("Cyrus Robles")];
