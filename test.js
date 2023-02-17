


//get input from user
const userInput = document.querySelector("#ItemAdded")
const submitInput = document.querySelector("#submitItem")
const textDiv = document.querySelector("#testDiv")
const mbtn =document.querySelector("#delbtn")

//read input value
//array to store the object elements
//delete function

let objArray = []


submitInput.addEventListener(
    "click", () => {
        
        if (userInput.value.length === 0) {
            alert("please enter value")
        }
        else{
        const details = {
            name: userInput.value,
            date: new Date().toDateString(),
            status: "false",
           
            
            
        }
           
            console.log(details);
            objArray.push(details)
            getArrayItems()
            

}
    }
)

//this function will use the details object to feed a
//div with values call it after abjarray.push
// functionto acces objarray items
function getArrayItems ( ) {
    textDiv.innerHTML = ""
    if (objArray.length > 0) {
        objArray.forEach(
            (details) => {
                let liTag = ` <div
            id="testDiv2"
        style="
          border: 2px solid black;
          max-width: 150px;
          padding: 20px;
          border-radius: 10px;
        "
      >
        <h1 style="text-align: center">${details.name}</h1>
        <p style="text-align: center">${details.date}</p>
        <p style="text-align: center">${details.status}</p>
      
        

      </div>
    `
            textDiv.insertAdjacentHTML("beforeend",liTag)}
        )
        
    }
}