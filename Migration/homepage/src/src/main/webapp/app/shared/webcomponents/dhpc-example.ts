class DhExampleComponent extends HTMLElement {
  private readonly shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.update();
  }

  update() {
    const template = `
      <style>
        .counter {
          font-size: 25px;
        }
      </style>
      <div class="counter">
        <b>Hello from dhpc-example component!</b>
      </div>
    `;
    this.shadow.innerHTML = template;
  }
}

window.customElements.define('dhpc-example', DhExampleComponent);
