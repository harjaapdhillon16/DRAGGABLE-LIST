import logo from "./logo.svg";
import "./App.css";

import ListOfCard from "./component/ListOfCard";

const headers = [
  { title: "imageurl", key: "image" },
  { title: "id", key: "id" },
  { title: "name", key: "name" },
];

const imageurl =
  "https://images.unsplash.com/photo-1620722706047-aa21b798df30?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const data = [
  { name: "Harry", imageurl, id: 133 },
  { name: "Harry", imageurl, id: 133 },
  { name: "Harry", imageurl, id: 133 },
  { name: "Harry", imageurl, id: 133 },
  { name: "Harry", imageurl, id: 133 },
  { name: "Harry", imageurl, id: 133 },
];

function App() {
  return <ListOfCard headers={headers} data={data} />;
}

export default App;
