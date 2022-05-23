import { Component } from "react";
import BuyList from "./components/BuyList";
import ItemForm from "./components/ItemForm";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    items: [],
  };
  addItem = (data) => {
    this.setState(({ items }) => {
      const newItem = { ...data, id: nanoid() };

      return {
        items: [...items, newItem],
      };
    });
  };
  deleteItem = (idx) => {
    this.setState(({ items }) => {
      const itemsCopy = items.map((item) => ({ ...item }));

      itemsCopy[idx].deleted = true;

      return {
        items: itemsCopy,
      };
    });
  };
  render() {
    return (
      <div>
        <ItemForm onSubmit={this.addItem} />
        <BuyList items={this.state.items} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
