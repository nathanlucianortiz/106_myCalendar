var isItImportant = false; // flag
var detailsVisible = true;
var visibleDetails = true;

function toggleImportant(){
    if(isItImportant){
        $("#iconImp").addClass('fas').removeClass('far');
        isItImportant = false;
    }
    else{
        $("#iconImp").addClass('far').removeClass('fas');
        isItImportant = true;
    }
}

function toggleDetails(){
    if(detailsVisible){
    $("#secForm").hide();
    $("#iconSlash").hide();
    $("#iconEye").show();
    detailsVisible = false;
    }
    else{
    $("#secForm").show();
    $("#iconSlash").show();
    $("#iconEye").hide();
    detailsVisible = true;
    }
}

function createTask(){
    // get values from inputs
    var title = $("#txtTitle").val();
    var dueDate = $("#txtDate").val();
    var desc = $("#txtDescription").val();
    var location = $("#txtLocation").val();

    // apply validations (stops the process from continuing if rules not met) validate title:
    if(title.length < 5){
        // show the alert panel 
        $("#alertError").show();
        // start a timer to hide it, this is 4 seconds; 1 second = 1000
        // Arrow function
        setTimeout(() => $("#alertError").hide(),5000);

        return;
    }

    // create an object
    var task = new Task(title, isItImportant, dueDate, desc, location);

    // send object to server
    console.log(task);


    //display task
    displayTask(task);
}

function displayTask(task){
    var syntax = 
    `<div class='task'>
        <i class="fas fa-star task-star task-section"></i>
        <div class='task-desc'>
            <h5>${task.title}</h5>
            <label>${task.description}</label>
        </div>
        <label class='task-section'>${task.dueDate}</label>
        <label class='task-section'>${task.location}</label>
    </div>`;


    $("#pendingTasks").append(syntax);
}


function init(){
    console.log("My calendar");

    toggleDetails();

    // load data

    //hook events
    $("#iconImp").click(toggleImportant);
    $("#btnShowDetails").click(toggleDetails);
    $("#btnSave").click(createTask);
    $("#alertError").hide();
}


window.onload = init;

/*
*
* HTTP Requests
* http methods
* http status codes
*/