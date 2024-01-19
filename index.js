const boxEl = document.querySelector(".box");
const scoreEl = document.querySelector(".scores");
const illegalEl = document.querySelector(".illegal");

function getLocationBox(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const boxTopLocation = Math.floor(mouseX - boxEl.getBoundingClientRect().top);
  const boxLeftLocation = Math.floor(mouseY - boxEl.getBoundingClientRect().left);

  // console.log(boxLeftLocation)

  return {
    top: boxTopLocation,
    left: boxLeftLocation,
  };
}

let count = 1;
let illegal = 0;

function getEventKeys(event) {
  let letters = "abcdefghijklmnopqrstuzwxyz";
  const ourText = event.key;
  const div = document.createElement("div");
  div.classList.add("text");
  div.innerText = ourText;

  const boxLocation = getLocationBox(event);
  div.style.left = `${boxLocation.left}px`;
  div.style.top = `${boxLocation.top}px`;

  const checkLetter = letters
    .split("")
    .every((char) => !ourText.includes(char));

  if (!checkLetter) {
    scoreEl.innerText = count++;
  } else {
    illegalEl.innerText = illegal++;
  }
  boxEl.appendChild(div);
}

document.addEventListener("keypress", getEventKeys);

document.addEventListener("click", getLocationBox);
