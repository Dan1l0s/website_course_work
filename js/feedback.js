function send() {
  if (document.querySelector("input").value == "" || !document.querySelector("input").value.includes("@") || !document.querySelector("input").value.includes(".") || !(document.querySelector("input").value.includes("com") || document.querySelector("input").value.includes("ru")))
  {
    document.querySelector("input").style.borderBottomColor = "red";
    return;
  }
  document.querySelector("input").style.borderBottomColor = "black";
  document.getElementById("submit").onclick = undefined;
  document.getElementById("submit").style.cursor = "default";
  document.getElementById("submit").style.color = "black";
  document.getElementById("submit").onmouseenter = (e) => {
    e.target.style.color = "black";
  };
  document.getElementById("submit").innerHTML = "Спасибо за отзыв!";
  var params = JSON.stringify(
    {
    from: document.querySelector("input").value,
    msg: document.querySelector("textarea").value,
  });
  console.log(params);
  // var request = new XMLHttpRequest();
  // request.open("POST", "http://ip:port/sendFeedback"); // - server address
  // request.send(params);
}