let string = "";
let input = document.getElementById("inputtext");
let numbuttons = document.querySelectorAll(".numbutton");
Array.from(numbuttons).forEach((numbutton) => {
  numbutton.addEventListener("click", (e) => {
    string += e.target.innerHTML;
    input.innerHTML = string;
  });
});
let eqbutton = document.getElementById("equal");
eqbutton.addEventListener("click", (e) => {
  string = eval(string);
  input.innerHTML = string;
});
let resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", (e) => {
  string = "0";
  input.innerHTML = string;
});
let delbutton = document.getElementById("del");
delbutton.addEventListener("click", (e) => {
  string = string.slice(0, string.length - 1);
  input.innerHTML = string;
});

var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    document.body.classList.remove("theme1", "theme2", "theme3");
    if (index == 0) {
      document.body.classList.toggle("theme1");
      console.log(index);
    } else if (index == 1) {
      document.body.classList.toggle("theme2");
      console.log(index);
    } else if (index == 2) {
      document.body.classList.toggle("theme3");
      console.log(index);
    }

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
