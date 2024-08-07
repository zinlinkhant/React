import List from "./List.jsx";
import Item from "./Item.jsx";
import Form from "./Form.jsx";
import { useState } from "react";
export default function App() {
  const add = (content,name)=>{
    const id = data[data.length - 1].id + 1;
    setData([...data,{id,content,name}])
  }
  const [data] = useState([
    {id:1,content:"hello world",name:"alice"},
    {id:2,content:"react is fun",name:"react"},
    {id:3,content:"I learn react",name:"me"},
  ])
 return (
 <div style={{ maxWidth: 600, margin: "20px auto" }}>
 <h1>Yaycha</h1>
 <List>
  {data.map(item=>{
    return <Item key={item.id} content={item.content} name={item.name}/>
  })}
 </List>
 <Form add={add}/>
 </div>
 );
}