const currentTime = document.getElementById("current-time");
function UTCtimer() {
  const time = new Date();

  const UTChours = time.getUTCHours().toString().padStart(2, "0");
  const UTCminutes = time.getUTCMinutes().toString().padStart(2, "0");
  const timer = `${UTChours}: ${UTCminutes}`;
  console.log(timer);
  currentTime.textContent = timer;
}
UTCtimer();
