
function Caculate() {
    let flag = 0;
    let caculation = document.querySelectorAll('input[name="pheptinh"]');
    for (let i = 0; i < caculation.length; i++) {
        if (caculation[i].checked)
            flag++;
    }
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    if (flag === 0)
        document.querySelector("#notify").innerHTML = "Chưa chọn phép tính";
    else if(isNaN(parseFloat(num1))===true || isNaN(parseFloat(num2))===true){
        document.querySelector("#notify").innerHTML = "Số không hợp lệ, hãy kiểm tra lại";
    }
    else {
        if (document.querySelector("#cong").checked == true) {
            document.querySelector("#result").value = parseFloat(num1) + parseFloat(num2);
        }
        if (document.querySelector("#tru").checked == true) {
            document.querySelector("#result").value = parseFloat(num1) - parseFloat(num2);
        }
        if (document.querySelector("#nhan").checked == true) {
            document.querySelector("#result").value = parseFloat(num1) * parseFloat(num2);
        }
        if (document.querySelector("#chia").checked == true) {
            document.querySelector("#result").value = parseFloat(num1) / parseFloat(num2);
        }
    }
}

function isNumberChecking1() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    if (isNaN(num1) === true) {
        document.querySelector("#notify").innerHTML = "Số thứ nhất không phải số thực";
    }
    else{
        document.querySelector("#notify").innerHTML = "";
    }
}

function isNumberChecking2() {
    let num2 = parseFloat(document.querySelector("#num2").value);
    if (isNaN(num2) === true) {
        document.querySelector("#notify").innerHTML = "Số thứ hai không phải số thực";
    }
    else{
        document.querySelector("#notify").innerHTML = "";
    }
}
