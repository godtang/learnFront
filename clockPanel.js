function rotateClockHands() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  var hourRotation = hours * 30 + minutes / 2;
  var minuteRotation = minutes * 6 + seconds / 10;
  var secondRotation = seconds * 6;

  hourRotation = Math.floor(hourRotation);
  minuteRotation = minuteRotation - (minuteRotation % 6);
  secondRotation = secondRotation - (secondRotation % 6);

  //console.log(`seconds=${seconds}, seconds degree=${secondRotation}, minutes=${minutes}, minutes degree=${minuteRotation}, hours=${hours}, hours degree=${hourRotation}, now="}`);

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  const hw_hourHand = document.querySelector("#hour-hand");
  const hw_minuteHand = document.querySelector("#second-hand");
  const hw_secondHand = document.querySelector(".hw-second");
  hw_hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
  hw_minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
  hw_secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
}
if (window.firstRun === undefined) {
  var hourHand = document.querySelector(".hour-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var secondHand = document.querySelector(".second-hand");
  // 第一次运行的逻辑
  window.firstRun = true;
  const clock = document.querySelector("body > div.hw-dial-plate");
  const scale = document.querySelector(
    "body > div.hw-dial-plate > div.hw-scale"
  );
  setInterval(rotateClockHands, 1000);
  for (let i = 1; i <= 5; i++) {
    var clonedElement = scale.cloneNode(true);
    clonedElement.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
    clock.appendChild(clonedElement);
  }
  rotateClockHands();
  document.querySelector("body > div.dial-plate").style.visibility = "visible";
}
