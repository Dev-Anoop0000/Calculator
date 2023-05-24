let calc1 = document.getElementById("calc1");
let calc2 = document.getElementById("calc2");



let input1 = document.getElementById("input1");
let result1 = document.getElementsByTagName("span")[0];
let buttons1 = document.querySelectorAll(".btn1");
let array1 = Array.from(buttons1);


array1.forEach((buttons1) => {
    buttons1.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            result1.innerHTML = eval(input1.value);
        } else if (e.target.innerHTML == "AC") {
            input1.value = "";
            result1.innerHTML = "";
        } else if (e.target.innerHTML == "Del") {
            let d = input1.value.substring(0, input1.value.length - 1);
            input1.value = d;
        } else {
            input1.value += e.target.innerHTML;
        }

        // ------ Percentage --------
        if (e.target.innerHTML == "%") {
            // incomplete
        }
        if (input1.value == false) {
            result1.innerHTML = "";
        }
    })

})

console.log(array1);


// 22222222222222222222 


let input2 = document.getElementById("input2");
let result2 = document.getElementsByTagName("span")[1];
let buttons2 = document.querySelectorAll(".btn2");
let array2 = Array.from(buttons2);


array2.forEach((buttons2) => {
    buttons2.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            result2.innerHTML = eval(input2.value);
        } else if (e.target.innerHTML == "AC") {
            input2.value = "";
            result2.innerHTML = "";
        } else if (e.target.innerHTML == "Del") {
            let d = input2.value.substring(0, input2.value.length - 1);
            input2.value = d;
        } else {
            input2.value += e.target.innerHTML;
        }

        // ------ Percentage --------
        if (e.target.innerHTML == "%") {
            // incomplete
        }
        if (input2.value == false) {
            result2.innerHTML = "";
        }
    })

})
console.log(array2);