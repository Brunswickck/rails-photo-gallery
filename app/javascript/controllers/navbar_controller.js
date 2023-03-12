import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  displayNavbar() {
    this.element.classList.add('navmargin')
  }
  hideNavbar() {
    this.element.classList.remove('navmargin')
  }
}
