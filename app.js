var list=document.getElementById("list");
function addItem(){
//    input and list work
    var todo=document.getElementById('todo')
   var li=document.createElement('li')
   var listText=document.createTextNode(todo.value)

    li.appendChild(listText)
    
    
     //delete
var del=document.createElement("button")
var delText=document.createTextNode("DELETE")
del.setAttribute("class","Btn")
del.setAttribute("onclick","del(this)")
del.appendChild(delText)
li.appendChild(del)
list.appendChild(li)
todo.value=""
  
//edit btn
var edit=document.createElement("button")
var eidtText=document.createTextNode("EDIT")
edit.setAttribute("class","Btn")
edit.setAttribute("onclick","edit(this)")
edit.appendChild(eidtText)
li.appendChild(edit)
list.appendChild(li)

 


} 


function del(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}
function edit(e){
    var val=prompt("enter your todo",)
    e.parentNode.firstChild.nodeValue=val
}
