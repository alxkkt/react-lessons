import { Component } from "react";

import "./Accordion.css";
import { items } from "./items";

const newItems = items.map((item) => ({ ...item, visible: false }));

class Accordion extends Component {
  state = {
    items: [...newItems],
  };
  toggleAnswer(id) {
    this.setState(({ items }) => {
      const itemsCopy = items.map((item) => ({ ...item }));
      const currentItem = itemsCopy.find((item) => item.id === id);
      currentItem.visible = !currentItem.visible;

      return {
        items: itemsCopy,
      };
    });
  }
  toggleAll(visible) {
    this.setState(({ items }) => {
      const itemsCopy = items.map((item) => ({ ...item, visible }));

      return {
        items: itemsCopy,
      };
    });
  }
  render() {
    const { items } = this.state;
    const elements = items.map(({ question, answer, id, visible }) => (
      <div
        className="accordion-item"
        key={id}
        onClick={() => this.toggleAnswer(id)}
      >
        <p className="title">{question}</p>
        <div className={visible ? "content is-expanded" : "content"}>
          <p>{answer}</p>
        </div>
      </div>
    ));

    return (
      <div className="accordion">
        <h1>FAQ</h1>
        <button
          type="button"
          className="btn"
          id="expand-all"
          onClick={() => this.toggleAll(true)}
        >
          Expand All
        </button>
        <button
          type="button"
          className="btn"
          id="collapse-all"
          onClick={() => this.toggleAll(false)}
        >
          Collapse All
        </button>
        {elements}
      </div>
    );
  }
}

export default Accordion;
