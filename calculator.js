function clr(){
    document.getElementById("result").value=""
}
function display(val){
    document.getElementById("result").value+=val
}
function equate(){
    let x = document.getElementById("result").value
    let y = eval(x) // this is a predefined function which will evaluate the expression that is sent by the user.
    document.getElementById("result").value=y
}