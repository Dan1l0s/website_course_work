function send() {
  if (document.querySelector("input").value == "") 
  {
    document.querySelector("input").style.borderBottomColor = "red";
    return;
  }
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
  var request = new XMLHttpRequest();
  // request.open("POST", "http://5.228.43.423:9999/sendFeedback"); // - server address
  // request.send(params);
}