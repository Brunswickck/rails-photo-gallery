import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"
// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["51.4545° N, 2.5879° W"],
      typeSpeed: 100,
      loop: false
    })
  }
}
