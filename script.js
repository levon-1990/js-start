const arr = [
    "hello",
    234,
    [3, 5, 9, 0],
    {name:"john", age: 23, favorit_films: ["test", "hello", "esim"]},
    23,
    "Mike",
    2345
];

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "object" && arr[i].favorit_films){
        
     console.log(`film1:${arr[i].favorit_films[0]}`);
     console.log(`film2:${arr[i].favorit_films[1]}`);
     console.log(`film3:${arr[i].favorit_films[2]}`);  
    }  
    
}




