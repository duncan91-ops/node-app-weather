const form = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch("http://localhost:3000/weather?address=" + location)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        messageOne.textContent = `Error: ${data.error}`;
        return;
      }
      messageOne.textContent = data.place_name;
      messageTwo.textContent = data.result;
    });
});
