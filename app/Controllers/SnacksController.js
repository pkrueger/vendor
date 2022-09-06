import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks() {
  let snacks = appState.snacks;
  let template = "";

  for (let snack of snacks) {
    template += snack.Template;
  }
  // @ts-ignore
  document.getElementById("snacks").innerHTML = template;
}

function _update() {
  // @ts-ignore
  document.getElementById("money").innerText = appState.money;
}

export class SnacksController {
  constructor() {
    _drawSnacks();
  }

  buySnack(name) {
    snacksService.buySnack(name);
    _update();
  }

  addQuarter() {
    snacksService.addQuarter();
    _update();
  }
}
