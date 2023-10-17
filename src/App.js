import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackingList from "./ParkingList";
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const comfirmed = window.confirm(
      "Are you sure you want to empty the whole list?"
    );
    if (comfirmed) setItems(() => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
