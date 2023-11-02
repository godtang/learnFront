function rotateClockHands() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const hourRotation = hours * 30 + minutes / 2;
  const minuteRotation = minutes * 6 + seconds / 10;
  const secondRotation = seconds * 6;

  //console.log(`seconds=${seconds}, seconds degree=${secondRotation}, minutes=${minutes}, minutes degree=${minuteRotation}, hours=${hours}, hours degree=${hourRotation}, now="}`);

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  document.querySelector("body > div.dial-plate").style.visibility = "visible";
}
if (window.firstRun === undefined) {
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
}
