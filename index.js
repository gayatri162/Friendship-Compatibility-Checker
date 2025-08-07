// This function runs when the form is submitted
document.getElementById("compatibilityForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents page reload

  const name1 = document.getElementById("yourName").value.trim();
  const name2 = document.getElementById("friendName").value.trim();

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  // Generate random percentage
  let score = Math.floor(Math.random() * 101); // 0 to 100

  // Show result on the page
  const resultElement = document.getElementById("result");
  resultElement.innerText = `${name1} and ${name2} are ${score}% compatible as friends! ❤️`;
});