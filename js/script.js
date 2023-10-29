let input1 = document.getElementById("input");
let allClear = document.getElementById("all_clear");
let equal1 = document.getElementById("equal1");
let del = document.getElementById("del");
let button1 = document.getElementsByTagName("button");

function value1(num){
	input1.value += num;
}

allClear.addEventListener("click",function(){
	input1.value = "";
})

equal1.addEventListener("click",function(){
	let ans = eval(input1.value)
	input1.value = ans;
	
});

del.addEventListener("click",function(){
	input1.value = input1.value.slice(0,-1);
});

