import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="intro"
export default class extends Controller {
  connect() {
    this.element.classList.add('dissappear')
  }

  // dissappear() {
  //   this.element.classList.add('d-none')
  // }
}
