confirm("Check Positive And Negatiev");
let user_input = parseInt(prompt("Enter Any Number "))

if(user_input===0){
    document.write(`You Enter = ${user_input}   `);
 }else{
        if(user_input>0){
            document.write(`Your " ${user_input} " is Positive Number `);
        }else if(user_input<0){
            document.write(`Your " ${user_input} " is Negative Number `);
        }
    }
   