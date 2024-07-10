import React, { useState } from "react";
import NameForm from "./components/NameForm";
import PokemonDisplay from "./components/PokemonDisplay";
import VersionDisplay from "./components/versionDisplay";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1>Quel Pokémon es-tu?</h1>
      <NameForm onSubmit={setName} />
      {name && <PokemonDisplay name={name} />}
      <VersionDisplay />
    </div>
  );
}

export default App;
