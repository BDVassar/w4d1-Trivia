import { appState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawTrivia() {
  let trivia = appState.trivia
  let template = ''
  trivia.forEach(t => template += t.TriviaTemplate)
  setHTML('triviaCard', template)
}

export class TriviaController {

  constructor() {
    console.log('controller')
    appState.on('trivia', _drawTrivia)
    this.getTrivia()
  }

  async getTrivia() {
    try {
      await triviaService.getTrivia()
    } catch (error) {
      'error at Controller getter'
    }
  }

}