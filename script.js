secondsHand = document.getElementById('seconds-hand');
minutesHand = document.getElementById('minutes-hand');
hoursHand = document.getElementById('hours-hand');  

function rotate() {
  date = new Date();
  seconds = date.getSeconds();
  minutes = date.getMinutes();
  hours = date.getHours();
  secondsHand.style.transform = `rotate(${seconds * 6}deg)`
  minutesHand.style.transform = `rotate(${minutes * 6 + seconds/10}deg)`
  hoursHand.style.transform = `rotate(${hours * 30 + minutes/2}deg)`
}

setInterval(rotate, 100);