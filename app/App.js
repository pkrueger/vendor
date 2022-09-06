import { VendorController } from "./Controllers/VendorController.js";

class App {
  vendorController = new VendorController();
}

window["app"] = new App();
