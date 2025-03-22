let arr=[45,18,40,5,10];

let a = arr.map((elemwnt,index, array) =>{
	console.log(elemwnt, index, array);
});

let c=arr.filter((element)=>{
	return element<=10;
})
console.log(c);


let b=arr.reduce((h1, h2)=>{
	return h1 + h2;
})
console.log(b);
