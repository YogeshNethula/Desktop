var i = 0
const TaskList = [];
var task = {Id:0,task_Name:"something"};
function push_function(){
    if( document.getElementById("task_name").value!=""){
        if(TaskList.some(obj => obj.task_Name === document.getElementById("task_name").value)){
            document.getElementById("task_name").value=null;
            window.alert("Warning  Task already Exist");
        }else{
            var task = {Id:TaskList.length+1,task_Name: document.getElementById("task_name").value};
            TaskList.push(task);
            const node = document.createElement("li");
            node.innerHTML=`<p style="display:inline;"></p><p  style="display:inline;">${task.task_Name}</p>`+`<span><button type="button" value=${task.Id} onclick="update_function(this.value)" data-modal="form">UPDATE</button><button id="delete" type="button" value=${task.Id} onclick="delete_Element(this.value)" class="material-symbols-outlined btn" style="float:right;">cancel</button></span></li>`;
            document.getElementById("task_list").appendChild(node);
            document.getElementById("task_name").value=null;
    
        }
    }else alert("Empty Input field");         
}
function update_function(value){
    var itemNo = parseInt(value);
    document.getElementById("form").style.display="block";
    document.getElementById("add").addEventListener("click",function()  {
        if(document.getElementById("task_name2").value!=""){
            var obj = TaskList[itemNo-1];
            obj.task_Name=document.getElementById("task_name2").value;
            var list = document.getElementById("task_list").children[itemNo];
            list.querySelector("p:nth-child(2)").innerHTML =  obj.task_Name;
            itemNo = 0;
            document.getElementById("task_name2").value=null;
            document.getElementById("form").style.display="none";
        }else{alert("Empty Input field");}

    })

}   
function delete_Element(value){
    var item = parseInt(value);
    var index = TaskList.map(object => object.Id).indexOf(item);
    TaskList.splice(index,1);
    $('#task_list').children().eq(index+1).remove(); // remove third item, index 2
    console.log(item,TaskList,index);
    index=null;
    item=0;
    
}


        
