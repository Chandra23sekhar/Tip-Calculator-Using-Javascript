// Function for custom user input.
function askinp(){
    document.getElementById("hide-cus").style.display = 'none';
    document.getElementById("custom").style.display = 'inline';
    var x = document.getElementById("custom").textContent;
    document.getElementById("percent").innerHTML = x;
}
tip = 0 //Global variable
// Function for reloading the page on reset.
function res(){
    location.reload();
}

function five_tip(){
    var tip_per = parseInt(document.getElementById('five').value);
    tip = tip_per;
}


function ten_tip(){
    var tip_per = parseInt(document.getElementById('ten').value);
    tip = tip_per;
}

function fifteen_tip(){
    var tip_per = parseInt(document.getElementById('fifteen').value);
    tip = tip_per;
}

function twentyfive_tip(){
    var tip_per = parseInt(document.getElementById('twentyfive').value);
    tip = tip_per;
}

function fifty_tip(){
    var tip_per = parseInt(document.getElementById('fifty').value);
    tip = tip_per;
}

// Function for calculating final tip per person.
function calc(){
    var bill_amount;
    var tip_percent = 0;
    var no_of_people;
    
    //Only if user selects a custom input.
    if(document.getElementById("custom").value.length != 0){
        var custom_val = document.getElementById("custom").value;
        tip = custom_val;
    }

    //Final calculation.
    bill_amount = parseFloat(document.getElementById("bill_amt").value);
    no_of_people =  parseInt(document.getElementById("no_ppl").value);
    var total_amt = ((tip / 100) * bill_amount);
    var tot_per_person = parseFloat((total_amt + bill_amount) / no_of_people);
    document.getElementById("percent").innerHTML = tot_per_person.toFixed(2);
    document.getElementById("final-tip").innerHTML = total_amt.toFixed(2);
}   
