function randomNum(size){
  return Math.floor(Math.random() * size)
}

const parts = {
  pushYourself: ["Do it.", "Do it now.", "because no one else is going to do it for you.","you will feel great when you will achieve it.", "stop only if you are done.","Don't stop."],
  dreamIt: ["Build it", "Do it","Believe it","Create it","Do bigger","Go for it"],
  yourLimitation: ["Comfort Zones", "it's just imagination", "stop before it's done","to giveup easily","it's impossible"]
}

function greetWithQuotes(){
  console.log('Random Quote')
  for(let i in parts){
    if(i === 'pushYourself'){
      console.log(`Push youself, ${parts[i][randomNum(parts[i].length)]}`)
    }else if(i === 'dreamIt'){
      console.log(`Dream it. ${parts[i][randomNum(parts[i].length)]}.`)
    }else{
      console.log(`Your limitation, ${parts[i][randomNum(parts[i].length)]}`)  
      }
    }
  }

greetWithQuotes()