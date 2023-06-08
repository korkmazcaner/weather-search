import { useState } from "react";
import Search from "./Search";
import Card from "./Card";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState(null);
  // key= API sağlıyıcınsan alınan Key
  const key = "d432c41fa4c3c2bfbc4a81b57b40bdcc";
  // axios fecth yerine kullanılır react kütüphanesidir.
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}&units=metric`
    )
    .then((res) => {
      setCity(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <div className="App p-4">
      <Search setSearchInput={setSearchInput} />
      <Card city={city} />
    </div>
  );
}

export default App;
