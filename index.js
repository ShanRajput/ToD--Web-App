let save = document.getElementById("save");
let input = document.getElementById("input");
let form1 = document.getElementById("form1");
let Delete = document.getElementById("Delete");

// var txt = document.getElementsByClassName('txt');

save.addEventListener("click", () => {
  let para = document.createElement("p");
  para.innerText = form1.value;
  if (form1.value == "") {
    return alert("Enter some text");
  }

  input.appendChild(para);
  form1.value = "";

  let btn1 = document.createElement("button");
  btn1.textContent = "Delete";
  input.appendChild(btn1);

  let btn2 = document.createElement("button");
  btn2.textContent = "finished";
  input.appendChild(btn2);

  btn1.addEventListener("click", () => {
    input.removeChild(para);
    input.removeChild(btn1);
  });

  btn2.addEventListener("click", () => {
    para.style.textDecoration = "line-through ";
    input.removeChild(btn2);
  });
});
