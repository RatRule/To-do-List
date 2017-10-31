
function newActivity() {

  var item=document.getElementById("item").value;
  if(item){

    var list=document.getElementById("list");
    var activity=document.createElement("li");
    activity.className="newEntry";
    list.appendChild(activity);
    activity.innerHTML = "<p style='width:95%; display: inline-block;'>"+item+"</p>"
                        +"<button onclick='deleteParent(this)' class=\"del-btn\">X</button>";

    // var text=document.createTextNode(item);
    // activity.appendChild(text);
    //
    //
    // var deleteActivity=document.createElement("button");
    // deleteActivity.onclick = function(){
    //   var elementItem=document.getElementsByTagName("li")[l];
  	// var parent=elementItem.parentNode;
  	// parent.removeChild(elementItem);
    // };
    // deleteActivity.className="deleteEntry";
    // list.appendChild(deleteActivity);
    // var btnText=document.createTextNode("X");
    // deleteActivity.appendChild(btnText);

  }
  document.getElementById("item").value = "";
}



function deleteParent(element){
      parent=element.parentNode;
      parent.parentNode.removeChild(parent);
}

// for(var btn of document.getElementsByClassName("del-btn")){
//   btn.addEventListener("click", function(){
//     alert('del');
//     parent=btn.parentNode;
//     parent.parentNode.removeChild(parent);
//   });
// }
