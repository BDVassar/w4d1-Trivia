import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"


class TriviaService {
  async getTrivia() {
    // @ts-ignore
    const res = await axios.get('https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple')
    appState.trivia = res.data.results.map(triviaData => new Trivia(triviaData))
    console.log(appState.trivia)
  }


}

export const triviaService = new TriviaService()