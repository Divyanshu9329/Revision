function init(){
    namebox = document.getElementById('name');
    rollbox = document.getElementById('rollNum');
    branchbox = document.getElementById('branch');
    jsbox = document.getElementById('js');
    dbmsbox = document.getElementById('dbms');
    dsabox = document.getElementById('dsa');

    tb = document.getElementById('tb');
}

function add(evt){

    evt.preventDefault();

    var roll = rollbox.value;
    var name = namebox.value;
    var branch = branchbox.value;
    var js = parseFloat(jsbox.value);
    var dbms = parseFloat(dbmsbox.value);
    var dsa = parseFloat(dsabox.value);

    var total = (js + dbms + dsa) /3;
    console.log(total);


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

    evt.r
    
}