let num=[1,2,3,4,5];

for (var i = 0; i < num.length; i++) {
	console.log(num[i]);
}

for(let ii of num){ //simple loop to access data from the array
	console.log(ii);
}

for(let i in num){ //return key
	console.log(i);
}

const arr = [1, 2, 3, 4, 5];

num.forEach((item) => {
    console.log(item);
});