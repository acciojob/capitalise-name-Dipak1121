//your JS code here. If required.
let input = document.getElementById("fname");
input.addEventListener("blur", onBlur);

function onBlur(){
    console.log("I am blurred");
    console.log(input.value);
    console.log(input.value.toUpperCase());
	let str = input.value.toUpperCase();
    input.value = str;
}