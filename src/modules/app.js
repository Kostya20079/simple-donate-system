import { DonateForm } from './donate-form'
import{ DonateList } from './donate-list'
import * as Utils from '../core/utils/date-sum';

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
      donates: mockDonates,
      totalAmount: 0,
    }
    this.#state.totalAmount = Utils.calculateSumOfNumbers(this.#state.donates.map(donate => donate.amount))
    this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))
    this.#donateList = new DonateList(this.#state.donates)
  }

  createNewDonate(newDonate) {
    console.log(newDonate);
    this.#state.donates.unshift(newDonate)
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