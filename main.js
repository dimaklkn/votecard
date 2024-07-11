// element variables
const submitBtn = document.querySelector(".votesubmit");
const percentage1 = document.querySelector(".votecard__percentage1");
const percentage2 = document.querySelector(".votecard__percentage2");
const percentage3 = document.querySelector(".votecard__percentage3");

// Event listeners
submitBtn.addEventListener("click", () => {
  const numbers = getRandomNumbers();
  percentage1.textContent = `${numbers.num1}%`;
  percentage2.textContent = `${numbers.num2}%`;
  percentage3.textContent = `${numbers.num3}%`;

  document.documentElement.style.setProperty("--votebar1", `${numbers.num1}%`);
  document.documentElement.style.setProperty("--votebar2", `${numbers.num2}%`);
  document.documentElement.style.setProperty("--votebar3", `${numbers.num3}%`);
});

// FUNCTIONS
function getRandomNumbers() {
  // Generate a random number between 0 and 100
  const num1 = Math.floor(Math.random() * 101);
  const scope = 100 - num1;
  const num2 = Math.floor(Math.random() * scope);
  const num3 = 100 - num1 - num2;
  return { num1, num2, num3 };
}
