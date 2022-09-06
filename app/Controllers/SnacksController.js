import { snacksService } from "../Services/SnacksService.js";

export class SnacksController {
  constructor() {
    snacksService.testIfWorking();
  }
}
