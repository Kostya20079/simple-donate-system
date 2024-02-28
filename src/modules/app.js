import { DonateForm } from './donate-form'
import{ DonateList } from './donate-list'

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
export default class App {
  #donateForm
  #donateList

  constructor() {
    this.#donateForm = new DonateForm()
    this.#donateList = new DonateList(mockDonates)
  }
  run() {
    document.body.append(
      this.#donateForm.render(),
      this.#donateList.render(),
    )
  }
}