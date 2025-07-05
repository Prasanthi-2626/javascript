let isweekend = false;
let time = 14;

if(isweekend){
    if(time<12){
        console.log("Good morninng on the weekend!");
    } else{
        console.log("Good afternoon on the weekend!");
    }
}
else{
    if(time<12){
        console.log("Good morning on a weekday!");
    }
    else{
        console.log("Good afternoon on a weekday")
    }
}