import { useState } from "react";
import { Item } from "./Item";
import { List } from "./List";
import { Form } from "./Form";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello, World", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };
  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        {data.map((item) => {
          return <Item key={item.id} content={item.content} name={item.name} />;
        })}
      </List>

      <Form add={add}></Form>
    </div>
  );
}
