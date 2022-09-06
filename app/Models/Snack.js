export class Snack {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  get Template() {
    return /*html*/ `
      <div class="col-4 text-center">
        <h3>${this.name}</h3>
        <h4>${this.price}</h4>
        <button class="btn" onclick="app.snacksController.buySnack('${this.name}')">
          BUY
        </button>
      </div>
    `;
  }
}
