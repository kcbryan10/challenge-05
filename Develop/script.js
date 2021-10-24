
//save task to local storage
var textareaInput = document.querySelector(".content-input");
var saveButton = document.querySelector(".saveSchedule");
var textareaOutput = document.querySelector(".time-period")

saveButton.addEventListener("click", saveTasks);

textareaOutput.textContent=localStorage.getItem("content");
textareaInput.value= localStorage.getItem("content");

var saveTasks = function(){
    localStorage.setItem("content",textareaInput.value);
    textareaOutput.textContent = textareaInput.value;
};

console.log(saveTasks());

//using moment to display date and time

window.setInterval(function () {
    $("#currentDay").html(moment().format('ddd MMMM DD Y  H:mm:ss'))
}, 1000);

