import React, {useState} from 'react';
import './App.css';
import Card from './Card'

import Burger from './images/burger_jeff.jpg'
import Cheeky from './images/cheeky_jeff.jpg'
import Country from './images/country_jeff.jpg'
import Firm from './images/firm_jeff.jpg'
import Glasses from './images/glasses_jeff.jpg'
import Hat from './images/hat_jeff.jpg'
import Joyful from './images/joyful_jeff.jpg'
import Jumper from './images/jumper_jeff.jpg'
import Leafy from './images/leafy_jeff.jpg'
import Leather from './images/leather_jeff.jpg'
import Light from './images/light_jeff.jpg'
import Piano from './images/piano_jeff.jpg'
import Pool from './images/pool_jeff.jpg'
import Serious from './images/serious_jeff.jpg'
import Shh from './images/shh_jeff.jpg'
import Purple from './images/purple_jeff.jpg'
import Stef from './images/stef_jeff.jpg'
import Shorts from './images/shorts_jeff.jpg'
import Topless from './images/topless_jeff.jpg'
import Jazzy from './images/jazzy-jeff.jpg'

const jeffs = [Burger, Cheeky, Country, Firm, Glasses, Hat, Joyful, Jumper, Leafy, Leather, Light, Piano, Pool, Serious, Shh, Purple, Stef, Topless, Shorts]

const pickAJeff = () => { return jeffs[Math.floor(Math.random() * jeffs.length)]} 

function App() {

  const [count, setCount] = useState(0)
  const [jazzFound, setJazzFound] = useState(false)

  const upCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={Jazzy} onClick={() => setJazzFound(true)}/>
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
      <Card upCount={upCount} jeff={pickAJeff()} />
    </div>
  );
}

export default App;
