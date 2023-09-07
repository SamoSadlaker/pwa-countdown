let h = 0;
let m = 0;
let s = 15;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let countdown = h * 60 * 60 * 1000 + m * 60 * 1000 + 12 * 1000;
let now = new Date().getTime();
let after = new Date(now + countdown).getTime();


let timer = setInterval(() => {
  now = new Date().getTime();
  let diff = new Date(after - now).getTime();
  if (diff < 1000) {
    clearInterval(timer);
  }

  hours.textContent = Math.floor(diff / (1000 * 60 * 60));
  minutes.textContent = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)));
  seconds.textContent = Math.floor((diff % (1000 * 60 * 60) % (1000 * 60)) / 1000);
}, 1000);
//______________________________

const button = document.querySelector("#verify");
button.addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle('active');
});

document.querySelector("#yes").addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove('active');
});
