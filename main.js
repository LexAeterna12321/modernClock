const shortArm = document.querySelector(".shortArm");
const longArm = document.querySelector(".longArm");

const timePasses = () => {
  const currTime = new Date();
  let currHours = currTime.getHours();
  const currMinutes = currTime.getMinutes();

  if (currHours > 12) {
    currHours -= 12;
  } else if (currHours === 0) {
    currHours = 12;
  }
  const shortArmDegs = currHours * 30;
  const longArmDegs = currMinutes * 6;

  shortArm.style.transform = `rotateZ(${shortArmDegs}deg)`;
  longArm.style.transform = `rotateZ(${longArmDegs}deg)`;

  window.requestAnimationFrame(timePasses, 6000);
};

timePasses();
