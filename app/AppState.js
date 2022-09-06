import { Snack } from "./Models/Snack.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack("Chips", 1),
    new Snack("Reeses", 2),
    new Snack("M&Ms", 1.5),
  ];

  money = 0;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
