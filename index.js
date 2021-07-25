readlinesync=require('readline-sync');
var unit,pre,final , sum;
	 let max=0;
	 let average=0;
	 var totalsum=0;
for (var i=1;i<=3;i++)
{

	unit=0,pre=0,final=0,sum=0;
	console.log("enter details of student "+i);

	var name=readlinesync.question("may i know your name ?");
var unit=(readlinesync.question("enter your unit test marks "));
var pre=(readlinesync.question("enter your pre-final test marks "));
var final=(readlinesync.question("enter your final test marks "));

sum=Number(unit)+Number(pre)+Number(final);

	console.log("total marks "+ sum);
	totalsum=totalsum+sum;
if(sum>=max){
max=sum;
}
average=totalsum/3


	
}
console.log("the highest  MARKS IS " +max);
var avg=readlinesync.question("do you want the average of marks");
if(avg==="yes")
{
	console.log(average);
}


