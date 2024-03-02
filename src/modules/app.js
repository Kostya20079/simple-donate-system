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
  #state

  constructor() {
    this.#state = {
      donates: [],
      totalAmount: 0,
    }
    this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))
    this.#donateList = new DonateList(mockDonates, this.#state.donates)
  }

  createNewDonate(newDonate) {
    console.log(newDonate);
    this.#state.donates.push(newDonate)
    this.#state.totalAmount += newDonate.amount
    this.#donateList.updateDonates(this.#state.donates)
    this.#donateForm.updateTotalAmount(this.#state.totalAmount)
  }

  run() {
    document.body.append(
      this.#donateForm.render(),
      this.#donateList.render(),
    )
  }
}