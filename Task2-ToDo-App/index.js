var i = 0
const TaskList = [];
var task = {Id:0,task_Name:"something"};
function push_function(){
    var task = {Id:TaskList.length+1,task_Name: document.getElementById("task_name").value};
    console.log(task);
    TaskList.push(task);
    console.log(TaskList);
    const node = document.createElement("li");
    node.innerHTML=`<p style="display:inline;">${task.Id}.</p>  <p  style="display:inline;">${task.task_Name}</p>`+`<span><button type="button" value="${task.Id}" onclick="update_function(this.value)" data-modal="form">UPDATE</button><button id="delete" type="button" value="${task.Id}" onclick="delete_Element(this.value)" class="material-symbols-outlined btn" style="float:right;">cancel</button></span></li>`;
    document.getElementById("task_list").appendChild(node);
    

            
}
function update_function(Id){
    document.getElementById("form").style.display="block";
    document.getElementById("add").addEventListener("click",function(Id)  {
        var obj = TaskList[parseInt(Id)];
        obj=document.getElementById("task_name2").value;
        var list = document.querySelectorAll("#task_list li p:nth-child(2)");
        list[Id-1].innerHTML=obj.task_Name;
    })

}        

        
