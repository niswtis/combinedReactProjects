import { useState } from 'react'
import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import heart from './images/heart.svg'
import horse from './images/horse.svg'

function AnimalShow({type}) {
  const [likes, setLikes] = useState(0)
  const svgMap = {
    bird, cat, cow, dog, gator, horse
  }; 

  const divClick = () => {
    setLikes(likes + 1)
  }

  return(
    <div onClick={divClick}>
      <div>{type}</div>
      <img src={svgMap[type]} alt={type} style={{ width: 100 }}></img>
      <img src={heart} alt={type} style={{ width: 10 + 10 * likes }}></img>
    </div>
  ); 
  
}

export default AnimalShow;
