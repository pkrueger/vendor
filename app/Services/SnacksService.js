import { appState } from "../AppState.js";
class SnacksService {
  testIfWorking() {
    for (let snack of appState.snacks) {
      console.log("New snack get!", snack.name);
    }
  }
}

export const snacksService = new SnacksService();
