const boxes = document.getElementsByClassName("box");
const colordlg = document.getElementById("colordlg");
const bordertool = document.querySelector("#bordertool");
for(let box of boxes)
    box.addEventListener("click", function(sender){
        sender = this;
        colordlg.click();
        colordlg.onchange = function(){
            sender.style.backgroundColor = colordlg.value;
        };
    }, false);
bordertool.addEventListener("input", function(){
    for(let box of boxes)
        box.style.borderRadius = this.value+"px";
}, false);