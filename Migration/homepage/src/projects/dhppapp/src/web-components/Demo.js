export class Demo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });

    const text = document.createElement("span");

    text.textContent = "Hello World";

    shadow.appendChild(text);
  }
}

customElements.define('x-demo', Demo);
