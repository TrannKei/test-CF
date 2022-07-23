const input = [1,6,7,10,-2,-8,-1]
let max = 0 ;
for (let i = 0; i < input.length - 1; i++){
    if ((input[i]* input[i+1]) > max)
    {
        max = (input[i] * input[i+1])
    }
    
    
}

console.log(max);
