function addtask(){
    let input=document.querySelector("#input")
    let task=input.value.trim()
    if(task=="")return
    let li=document.createElement("li")

  let items=document.querySelectorAll("li")
  for(let i=0;i<items.length;i++){
    if(items[i].textContent.trim()==task.trim()){
        alert("The task is already given")
        return}
    }
        let checkbox=document.createElement("input")
    checkbox.type="checkbox"
    checkbox.name="taskname"
    let text=document.createTextNode(" "+task)
    li.appendChild(checkbox)
    li.appendChild(text)
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            li.style.textDecoration="line-through"
        li.style.opacity="0.6"}
        else{
            li.style.textDecoration="none"
            li.style.opacity="1"
        }
    })
    document.querySelector("#task").appendChild(li)
    input.value=""
}
let button=document.querySelector("#button")
    button.addEventListener("click",addtask)
    let removebutton=document.querySelector("#remove")
    removebutton.addEventListener("click",function()
    {let items=document.querySelectorAll("#task li")
        for(let item of items)
        {
            let checkbox= item.querySelector("input")
            if(checkbox.checked){
                item.remove()}
        }
        
    })
    
document.addEventListener("DOMContentLoaded", function() {

    let input = document.querySelector("#input");

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addtask();
        }
    });

});



