export class DonateForm {
  #minDonate
  #maxDonate
  #donateForm
  #totalAmount

  static defaultDonateText = {
    LabelText: 'Введіть суму в $',
    DonateButtonText: 'Задонатити',
  }

  static defaultDonateValues = {
    min: 1,
    max: 100,
  }

  constructor(minValue, maxValue) {
    this.#minDonate = minValue || DonateForm.defaultDonateValues.min
    this.#maxDonate = maxValue || DonateForm.defaultDonateValues.max
  }

  #renderAmountInput() {
    const amountInputLabel = document.createElement('label')
    amountInputLabel.className = 'donate-form__input-label'
    amountInputLabel.innerText = DonateForm.defaultDonateText.LabelText

    const amountInput = document.createElement('input')
    amountInput.className = 'donate-form__donate-input'
    amountInput.name = 'amount'
    amountInput.type = 'number'
    amountInput.max = this.#maxDonate
    amountInput.min = this.#minDonate
    amountInput.required = 'required'

    amountInputLabel.append(amountInput)
    return amountInputLabel
  }

  #renderDonateButton() {
    const button = document.createElement('button')
    button.className = 'donate-form__submit-button'
    button.type = 'submit'
    button.innerText = DonateForm.defaultDonateText.DonateButtonText

    return button
  }


  render() {
    this.#donateForm = document.createElement('form')
    this.#donateForm.className = 'donate-form'
    this.#totalAmount = document.createElement('h1')
    this.#totalAmount.id = 'total-amount'

    const donateInput = this.#renderAmountInput()
    const donateButton = this.#renderDonateButton()

    this.#donateForm.append(
      this.#totalAmount, 
      donateInput,
      donateButton
    )

    return this.#donateForm
  }
}