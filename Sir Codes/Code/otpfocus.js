//JS STARTS HERE
const parentEl = document.querySelector("#otpFieldArea");
const field1 = document.querySelector("#num1");
field1.focus();
parentEl.addEventListener("keyup", function (e) {
    console.log(e);
    if (e.target.tagName === "INPUT") {
        if (e.key === "Backspace") {
            e.target?.previousElementSibling?.focus();
        }

        //this line solves the bug...
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.target?.nextElementSibling?.focus();
        }
    }
});
