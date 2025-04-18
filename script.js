let marks=99;

if(marks>0 && marks<35)
{
	console.log("You are fail: " ,marks);
}
else if(marks>35 && marks<60)
{
	console.log("First class: " ,marks);
}
else if(marks>60 && marks<75)
{
	console.log("Second class: " ,marks);
}
else if(marks>75 && marks<100)
{
	console.log("Distinction: " ,marks);
}
else
{
	console.log("You enterd wrong number..");
}