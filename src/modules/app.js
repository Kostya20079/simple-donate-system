import { DonateForm } from './donate-form'

export default class App {
  #donateForm

  constructor() {
    this.#donateForm = new DonateForm()
  }
  run() {
    const donateFormHTML = document.body.append(this.#donateForm.render())
    return donateFormHTML
  }
}