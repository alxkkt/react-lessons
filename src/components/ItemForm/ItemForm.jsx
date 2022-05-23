import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ItemForm.module.css";
import { initialState } from "./initialState";

class ItemForm extends Component {
  state = {
    ...initialState,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      ...initialState,
    });
  };
  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    this.setState({ [name]: newValue });
  };
  render() {
    const { name, quantity, price, urgency } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Название</label>
        <input
          type="text"
          name="name"
          value={name}
          required={true}
          onChange={this.handleChange}
        />
        <label htmlFor="">Количество</label>
        <input
          type="text"
          name="quantity"
          value={quantity}
          required={true}
          onChange={this.handleChange}
        />
        <label htmlFor="">Цена</label>
        <input
          type="text"
          name="price"
          value={price}
          required={true}
          onChange={this.handleChange}
        />
        <label htmlFor="">срочная покупка</label>
        <input
          type="checkbox"
          name="urgency"
          checked={urgency}
          required={true}
          onChange={this.handleChange}
        />
        <select name="type" onChange={this.handleChange}>
          <option value="chemicals">бытовая химия</option>
          <option value="goods">продукты</option>
          <option value="other">другое</option>
        </select>
        <button type="submit">добавить</button>
      </form>
    );
  }
}

export default ItemForm;
