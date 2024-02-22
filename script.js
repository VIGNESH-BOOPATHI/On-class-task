var div = document.createElement("div");
div.id = "myDiv";
div.innerHTML = "Hover over me";
document.body.append(div);

// Add mouseover event listener
div.addEventListener("mouseover", function() {
    // Change text color to red when mouse is over the div
    div.style.color = "red";
});

// Add mouseout event listener
div.addEventListener("mouseout", function() {
    // Reset text color to its original state when mouse moves out of the div
    div.style.color = "";
});


var submit_button= button_create("button","type","button","onclick","foo()","Submit");
document.body.append(submit_button);
var userDataDisplay = document.createElement("div");
document.body.append(userDataDisplay);




function button_create(tagname,attr1name,attr1value,attr2name,attr2value,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    ele.innerHTML=content;
    return ele;
}

function foo(){
var res =prompt("Enter the name: ");
userDataDisplay.innerHTML = ""; // Clear previous content
var userDataText = document.createTextNode(res);
userDataDisplay.appendChild(userDataText);
}