import { dateFormat } from "../core/utils/date"
import { Settings as CurrencySetting } from "../core/constants/settings"

export class DonateList {
  #donates
  #donatesItemHTML

  static defaultDonateListText = {
    DonatesTitle: 'Список донатів'
  }

  constructor(donates) {
    this.#donates = donates
  }

  #renderDonatesList(container) {
    this.#donatesItemHTML.innerHTML = ''
    this.#donates.forEach(donateItem => {
      const donateItemHTML = document.createElement('div')
      donateItemHTML.className = 'donate-item'
      const donateDateFormat = dateFormat(donateItem.date)
      donateItemHTML.innerHTML = `${donateDateFormat} - <b>${donateItem.amount}${CurrencySetting.currency}</b>`
      
      container.append(donateItemHTML)
    });
  }

  updateDonates(updatedDonates) {
    this.#donates = updatedDonates
    this.#renderDonatesList(this.#donatesItemHTML)
  }

  render() {
    const donatesContainer = document.createElement('div')
    donatesContainer.className = 'donates-container'
    const donatesTitle = document.createElement('h2')
    donatesTitle.className = 'donates-container__title'
    donatesTitle.innerText = DonateList.defaultDonateListText.DonatesTitle
    
    this.#donatesItemHTML = document.createElement('div')
    this.#donatesItemHTML.className = 'donates-container__donates'

    donatesContainer.append(
      donatesTitle,
      this.#donatesItemHTML
    )
    this.#renderDonatesList(this.#donatesItemHTML)
    return donatesContainer
  }
}