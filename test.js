//get input from user
const userInput = document.querySelector("#ItemAdded");
const submitInput = document.querySelector("#submitItem");
const textDiv = document.querySelector("#testDiv");
const mbtn = document.querySelector("#delbtn");
const total = document.querySelector("#taskno");
const alertdiv = document.querySelector(".altdiv");
const rembtn = document.querySelector("#rem");

let objArray = [];

function currentTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  return time;
}
function del(item) {
  item.remove();
}
function totalTask() {
  let all = objArray.length;
  // console.log(all +1);

  return all + 1;
}
function isElementExist(element, array) {
  return array.includes(element);
}

submitInput.addEventListener("click", () => {
  if (userInput.value.length === 0) {
    alert("please enter value");
  } else {
    const details = {
      name: userInput.value,
      date: new Date().toDateString(),
      status: "false",
      time: currentTime(),
      tasks: totalTask(),
    };

    function checkItem() {
      for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].name === details.name) {
          return true;
        }
      }
    }
    function getItems() {
      if (checkItem() === true) {
        setTimeout(function () {
          alertdiv.style.display = "block";
        }, 0);

        setTimeout(function () {
          alertdiv.style.display = "none";
        }, 1000);
        alertdiv.innerHTML = "The Task already Exist";
        return;
      } else {
        objArray.push(details);
        getArrayItems();
        total.innerHTML = details.tasks;
        console.log(objArray);
      }
    }
  }
  getItems();
});

//for all tasks
function getArrayItems() {
  textDiv.innerHTML = " ";
  if (objArray.length > 0) {
    objArray.forEach((details) => {
      let liTag = ` <div
            id="testDiv2"
        style="
          border: none;
          max-width: 150px;
          padding: 20px;
          border-radius: 10px;

        "
      >

        <h1 style="text-align: center">${details.name}</h1>
        <p style="text-align: center">${details.date}</p>
        <p style="text-align: center">${details.status}</p>
        <p style="text-align: center">${details.time}</p>
      <div id="noVisible"
      style="
      flexwrap:wrap;gap:2px;
      ;
      ">
          <button class="button1"><img src="/images/icons8-edit-50.png" alt="check" srcset=""></button>
    <button class="button1"><img src="/images/icons8-checkmark-64.png" alt="check" srcset=""></button>
    <button  id="rem" class="button1"><img  src="/images/icons8-remove-48.png" alt="check" srcset=""></button>
     
</div>
      </div>
    `;
      textDiv.insertAdjacentHTML("beforeend", liTag);
    });
  }
}
function getTodoItems() {}
function getCompleteTasks() {}


