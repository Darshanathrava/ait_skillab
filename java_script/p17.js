let stds=[
{code:101,scores:80},
{code:102,scores:75},
{code:103,scores:70}
]
let total = 0
for(let {scores} of stds){
    total+=scores
}
console.log(total)