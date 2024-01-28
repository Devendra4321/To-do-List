let btn = document.querySelector("button");
let list = document.querySelector("#taskList");

btn.addEventListener("click", function () {
  //   console.log("btn clicked");
  let inp = document.querySelector("input");
  // console.log(inp);

  if (inp.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = `${inp.value}  <button style="margin-left:40px">x</button>`;
    inp.value = "";
    list.appendChild(li);
  }
});

list.addEventListener("click", function (e) {
  // console.log(event.target.nodeName);
  // console.log(event.target.parentElement);

  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  }
});
