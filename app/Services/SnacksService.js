// @ts-nocheck
import { appState } from "../AppState.js";
class SnacksService {
  buySnack(name) {
    let snack = appState.snacks.find((s) => s.name == name);

    if (appState.money >= snack.price) {
      console.log("You bought", snack.name);
      appState.money -= snack.price;
      console.log(appState.money);
    } else {
      console.log("Poor ass bitch");
    }
  }

  addQuarter() {
    (appState.money += 0.25).toFixed(2);
  }
}

export const snacksService = new SnacksService();
