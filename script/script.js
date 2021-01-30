let firstclass=0, economy=0,vat,total, subTotal;

function firstIncrement(){
    let value = parseInt(document.getElementById('firstClass').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
   let numberOfTicket= document.getElementById('firstClass').value = value;
    firstCalculation(numberOfTicket) 
}

function firstDecrement(){
    let value = parseInt(document.getElementById('firstClass').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>0){
        value--;
    } 
   let numberOfTicket= document.getElementById('firstClass').value = value;
    firstCalculation(numberOfTicket)   
}


function secondIncrement(){
    let value = parseInt(document.getElementById('economyClass').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
   let numberOfTicket= document.getElementById('economyClass').value = value;
   economyCalculation(numberOfTicket) 
}

function secondDecrement(){
    let value = parseInt(document.getElementById('economyClass').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>0){
        value--;
    } 
   let numberOfTicket= document.getElementById('economyClass').value = value;
   economyCalculation(numberOfTicket)   
}


function firstCalculation(numberOfTicket){
       firstclass=1
       firstclass=numberOfTicket*150
       finalCalculation()
}

function economyCalculation(numberOfTicket){
     economy=1
     economy=numberOfTicket*100
     finalCalculation()
}

function finalCalculation(){
    
     subTotal=firstclass+economy;
     vat= subTotal* 0.1
      total=subTotal+vat
     console.log(economy)
     document.getElementById("subTotal").innerHTML="$"+subTotal
     document.getElementById("vat").innerHTML="$"+vat
     document.getElementById("total").innerHTML="$"+total
}

function show(){
    if(subTotal && vat && total){
        alert("SubTotal: "+subTotal+"\nVat: "+vat+ "\nTotal: "+total+"\nCongratulations! Your Ticket has been booked")
    }else{
        alert("You have To book your ticket first")
    }
    
}