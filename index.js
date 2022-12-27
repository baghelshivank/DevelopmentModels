
function createInput(){
    var inpobj = document.getElementsByTagName('input');
    var num = inpobj.length;
    var dibba = document.createElement('div');
    var input = document.createElement('input');
    input.type = "text";
    var btn = document.createElement('button');
    var str = 'input'+num;
    btn.id = str;
    btn.innerHTML = '&times;';
    btn.setAttribute("onclick" , "deleteInput("+"'"+str+"'"+")");  // btn.setAttribute("onclick" , "deleteInput('" +str+ "')");
    // btn.onclick = deleteInput(str);
    input.name = "input"+num;
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(dibba);
    dibba.appendChild(input);
    dibba.appendChild(btn);
    dibba.appendChild(document.createElement('br'));
}
function deleteInput(id){
    // console.log(id);
    document.getElementById(id).parentElement.style.display='none';
    // document.getElementsByName(id)[0].style.display='none';

}