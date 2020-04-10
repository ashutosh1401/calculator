(function () {
  "use strict";

  var ele = function (element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  };
  var display = ele("#display");
  var number = ele(".num");
  var equal = ele("#equals-to");
  var oper = ele(".oper");
  var newNum = "",
    prevNum = "",
    result,
    operator;

  var showNum = function () {
    if (result) {
      newNum = this.getAttribute("data-num");
      result = "";
    } else {
      newNum += this.getAttribute("data-num");
    }

    display.innerHTML = newNum;
  };
  var moveNum = function () {
    prevNum = newNum;
    newNum = "";
    operator = this.getAttribute("data-oper");
    equals.setAttribute("data-result", "");
  };

  var displayOnScreen = function () {
    prevNum = parseFloat(prevNum);
    newNum = parseFloat(newNum);

    switch (operator) {
      case "plus":
        result = prevNum + newNum;
        break;
      case "minus":
        result = prevNum - newNum;
        break;
      case "times":
        result = prevNum * newNum;
        break;
      case "divide by":
        result = prevNum / newNum;
      default:
        result = newNum;
    } 
    result = parseFloat(result);
    if (!isFinite(result)) {
      alert("INVALID NUMBER");
    }
    display.innerHTML = result;
    equals.setAttribute("data-result", result);
    prevNum = 0;
    newNum = result;
  };

  var clear = function () {
    prevNum = "";
    newNum = "";
    display.innerHTML = "0";
    equals.setAttribute("data-result", result);
  };

  for (var i = 0; i < number.length; i++) {
    number[i].onclick = showNum;
  }

  for (var i = 0; i < oper.length; i++) {
    oper[i].onclick = moveNum;
  }

  equals.onclick = displayOnScreen;

  ele("#clear").onclick = clear;
})();
