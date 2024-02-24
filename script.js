let users=[]
var isedit= false;
var currentuser;
function onSubmit(){
    if(isedit){
        var userindex = users.findIndex(function(user){
            if(user.id == currentuser){
                return true;
            }
        });

    users[userindex].name=document.getElementById("name").value;
    users[userindex].email=document.getElementById("email").value;
    users[userindex].mobile=document.getElementById("mobile").value;
    users[userindex].country=document.getElementById("country").value;
    users[userindex].state=document.getElementById("state").value;
    users[userindex].city=document.getElementById("city").value;
    clearForm()
    generateTable()
    isedit=false;
    }
    else{
        var userData = {}
    userData.id=users.length + 1;
    userData.name=document.getElementById("name").value;
    userData.email=document.getElementById("email").value;
    userData.mobile=document.getElementById("mobile").value;
    userData.country=document.getElementById("country").value;
    userData.state=document.getElementById("state").value;
    userData.city=document.getElementById("city").value;
    users.push(userData);
    generateTable();
}
    }

function generateTable(){
   document.getElementById("userTableBody").innerHTML="";
   users.forEach(function(user){
    var tr = document.createElement("tr");
    

    var idTd = document.createElement("td");
    idTd.innerText=user.id;
    tr.appendChild(idTd);

    var nameTd = document.createElement("td");
    nameTd.innerText=user.name;
    tr.appendChild(nameTd);

    var emailTd = document.createElement("td");
    emailTd.innerText=user.email;
    tr.appendChild(emailTd);

    var mobileTd = document.createElement("td");
    mobileTd.innerText=user.mobile;
    tr.appendChild(mobileTd);

    var countryTd = document.createElement("td");
    countryTd.innerText=user.country;
    tr.appendChild(countryTd);

    var stateTd = document.createElement("td");
    stateTd.innerText=user.state;
    tr.appendChild(stateTd);

    var cityTd = document.createElement("td");
    cityTd.innerText=user.city;
    tr.appendChild(cityTd);

    var actionTd = document.createElement("td");
    var editbtn = document.createElement("button");
    editbtn.setAttribute("class","btn btn-primary");
    editbtn.innerText="Edit";
    editbtn.onclick = function(){
        editUser(user.id);
    }
    actionTd.appendChild(editbtn);

    var deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","btn btn-danger");
    deletebtn.innerText="Delete";
    deletebtn.onclick=function(){
        deleteUser(user.id);
    }
    actionTd.appendChild(deletebtn);

    tr.appendChild(actionTd);

    var tableBody = document.getElementById("userTableBody");
    tableBody.appendChild(tr);
    clearForm()
   })
}

function clearForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("mobile").value="";
    document.getElementById("country").value="";
    document.getElementById("state").value="";
    document.getElementById("city").value="";

}

function deleteUser(id){
    var userindex = users.findIndex(function(user){
        if(user.id == id){
            return true;
        }
    })
    users.splice(userindex,1)
    generateTable();
}

function editUser(id){
    var userindex = users.findIndex(function(user){
        if(user.id == id){
            return true;
        }
    })

    document.getElementById("name").value = users[userindex].name;
    document.getElementById("email").value = users[userindex].email;
    document.getElementById("mobile").value = users[userindex].mobile;
    document.getElementById("country").value = users[userindex].country;
    document.getElementById("state").value = users[userindex].state;
    document.getElementById("city").value = users[userindex].city;
    isedit= true;
    currentuser=id;
}
