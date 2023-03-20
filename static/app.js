const matchBtn = document.getElementById("match-btn");
const output = document.getElementById("output");

matchBtn.addEventListener("click", function () {
  const regexStr = document.getElementById("regex").value;
  const regex = new RegExp(regexStr, "g");
  const input = document.getElementById("input").value;
  const matches = input.match(regex);
  if (matches !== null) {
    output.innerHTML = `<p>マッチング結果:</p><ul>${matches.map(match => `<li>${match}</li>`).join('')}</ul>`;
  } else {
    output.innerHTML = "<p>マッチングなし</p>";
  }
});
