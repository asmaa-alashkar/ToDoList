/////// Code it yourself :)

$("#btnAdd").on('click',function(){
    if($('#taskInput').val())
    {
        let taskDiv=$("<div><input class='task' type = 'text'><button class='done'>Done</button><button class='delete'>Delete</button></div>");
        $(".tasksBox").append(taskDiv);
        taskDiv.find(".task").val($('#taskInput').val());

        $(taskDiv.find(".done")).on('click',function(){
            $(taskDiv).toggleClass("TaskDone");
        });
        $(taskDiv.find(".delete")).on('click',function(){
            taskDiv.remove();
        });
    }
    else{
        alert("write a task, please!")
    }
});



