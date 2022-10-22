import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {

  }

  send(event) {
    event.preventDefault()

    console.log("TODO: send request in AJAX")
  }
}
