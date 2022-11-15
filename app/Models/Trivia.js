import { generateId } from "../Utils/generateId.js"


export class Trivia {
  constructor(data) {
    this.id = generateId()
    this.category = data.category
    this.correct_answer = data.correct_answer
    this.difficulty = data.difficulty
    this.question = data.question
    this.type = data.type
    this.answers = data.incorrect_answers
    this.answers.push(this.correct_answer)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
    this.answers.sort(() => Math.random() - .5)
  }




  get TriviaTemplate() {
    return `
      <section class="row justify-content-center">${this.category}</section>
          <section class="row justify-content-center">${this.difficulty}</section>
          <section class="row justify-content-center">${this.question}</section>
          <section class="row justify-content-center">
            <div class="card text-center col-12 col-md-6">${this.answers[0]}</div>
            <div class="card text-center col-12 col-md-6">${this.answers[1]}</div>
            <div class="card text-center col-12 col-md-6">${this.answers[2]}</div>
            <div class="card text-center col-12 col-md-6">${this.answers[3]}</div>
        </section>`
  }
}