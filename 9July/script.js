function init(){
    namebox = document.getElementById('name');
    rollbox = document.getElementById('rollNum');
    branchbox = document.getElementById('branch');
    jsbox = document.getElementById('js');
    dbmsbox = document.getElementById('dbms');
    dsabox = document.getElementById('dsa');

    tb = document.getElementById('tb');
    setupData();
}

function setupData(){
    var data = localStorage.getItem("StudentData");
    //console.log(data);
    var stuData = JSON.parse(data);
    for(var sd of stuData){
        var roll = sd.roll;
        var name = sd.name;
        var branch = sd.branch;
        var js = parseFloat(sd.js);
        var dbms = parseFloat(sd.dbms);
        var dsa = parseFloat(sd.dsa);

        createRow(roll,name,branch,js,dbms,dsa);
    }
    
}

function createRow(roll,name,branch,js,dbms,dsa){
    
    var total = js + dbms + dsa;

    var td1 = document.createElement('td');
    td1.innerText = roll;
    var td2 = document.createElement('td');
    td2.innerText = name;
    var td3 = document.createElement('td');
    td3.innerText = branch;
    var td4 = document.createElement('td');
    td4.innerText = js
    var td5 = document.createElement('td');
    td5.innerText = dbms;
    var td6 = document.createElement('td');
    td6.innerText = dsa;
    var td7 = document.createElement('td');
    td7.innerText = total;
    var td8 = document.createElement('td');
    var btn = document.createElement('button')
    btn.innerText = "Delete";
    btn.onclick = function(){
        //tr.remove();
        // another way
        // btn.parentElement.parentElement.remove();
        // another Way
        // this.parentElement.parentElement.remove();
        // another way

        var status = confirm("Are you sure to delete this:")
        if(status){
            tr.remove();
        }
    }
    td8.appendChild(btn);


    var tr = document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8)

    tb.appendChild(tr);
}

function add(evt){

    evt.preventDefault();

    var roll = rollbox.value;
    var name = namebox.value;
    var branch = branchbox.value;
    var js = parseFloat(jsbox.value);
    var dbms = parseFloat(dbmsbox.value);
    var dsa = parseFloat(dsabox.value);

    createRow(roll, name, branch, js, dbms, dsa);

    evt.target.reset();
    
}


function save () 
    {
        var stud =[]
        var rows = tb.querySelectorAll('tr');
        // alert(rows.length);

        for(var row of rows){
            var tds = row.querySelectorAll("td");

            var obj = {
                roll : tds[0].innerText,
                name : tds[1].innerText,
                branch : tds[2].innerText,
                js : tds[3].innerText,
                dbms : tds[4].innerText,
                dsa : tds[5].innerText
            }
            stud.push(obj);
        }
        // console.log(stud);

        // var str = JSON.stringify(stud);
        // console.log(str);
        // var data = JSON.parse(str);
        // console.log(data);

        localStorage.setItem("StudentData", JSON.stringify(stud));
        alert("Data Saved.");

    }