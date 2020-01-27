import CoutnersBox from "./components/CoutnersBox.js";

class App {
  render() {
    const app = document.createElement("div");
    app.append(new CoutnersBox().render());

    return app;
  }
}

export default App;
