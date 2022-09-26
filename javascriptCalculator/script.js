let input = 0;
let output = "";
let limit = "digit limit met";
let end = 0;
let dec = 0;
let check = false;

document.getElementById("actual-input").innerHTML=input;
document.getElementById("actual-output").innerHTML=output;

function clearValue() {
    input = 0;
    output = "";
    end = 0;
    dec = 0;
    document.getElementById("actual-input").innerHTML=input;
    document.getElementById("actual-output").innerHTML=output;  
}

function currentReload() {
    document.getElementById("actual-input").innerHTML=input
    document.getElementById("actual-output").innerHTML=output;
}

function useOperator(opp) {
    switch(opp) {
        case "add":
            dec = 0;
            if (end != 0) {
                output = (end + "+") ;
                input = "+";
                document.getElementById("actual-input").innerHTML = input;
                document.getElementById("actual-output").innerHTML =  output;
                break;
            } else {
                input = "+";
                document.getElementById("actual-input").innerHTML = input;
                
                if (output[output.length-1] == "+" || output[output.length-1] == "-" || output[output.length-1] == "/" || output[output.length-1] == "*") {
                    if (output[output.length-2] == "+" || output[output.length-2] == "-" || output[output.length-2] == "/" || output[output.length-2] == "*") {
                        output = output.substring(0, (output.length-2)) + "+";
                    } else {
                        output = output.substring(0, (output.length-1)) + "+";
                    }
                } else {
                    output+="+";
                }
                document.getElementById("actual-output").innerHTML = output;
                break;
            }
        case "subtract":
            dec = 0;
            if (end!=0) {
                output = (end + "-") ;
                input = "-";
                document.getElementById("actual-input").innerHTML = input;
                document.getElementById("actual-output").innerHTML =  output;
                break;
            } else {
                input = "-";
                document.getElementById("actual-input").innerHTML = input;
                if (output[output.length-2] == "+" || output[output.length-2] == "-" || output[output.length-2] == "/" || output[output.length-2] == "*") {
                    if (output[output.length-1] == "+" || output[output.length-1] == "-" || output[output.length-1] == "/" || output[output.length-1] == "*") {
                        output = output.substring(0, (output.length-1)) + "-";
                    } else {
                        output+="-";
                    }
                } else {
                    output+="-";
                }
        
                document.getElementById("actual-output").innerHTML = output;
                break;
            }
        case "divide":
            dec = 0;
            if (end!=0) {
                output = (end + "/");
                input = "/";
                document.getElementById("actual-input").innerHTML = input;
                document.getElementById("actual-output").innerHTML =  output;
                break;
            } else {
                input = "/"
                document.getElementById("actual-input").innerHTML = input;
                if (output[output.length-1] == "+" || output[output.length-1] == "-" || output[output.length-1] == "/" || output[output.length-1] == "*") {
                    if (output[output.length-2] == "+" || output[output.length-2] == "-" || output[output.length-2] == "/" || output[output.length-2] == "*") {
                        output = output.substring(0, (output.length-2)) + "/";
                    } else {
                        output = output.substring(0, (output.length-1)) + "/";
                    }
                } else {
                    output+="/";
                }
                document.getElementById("actual-output").innerHTML =  output;
                break;
            }
        case "multiply":
            dec = 0;
            if (end!=0) {
                output = (end + "*") ;
                input = "*";
                document.getElementById("actual-input").innerHTML = input;
                document.getElementById("actual-output").innerHTML =  output;
                break;
            } else {
                input = "*"
                document.getElementById("actual-input").innerHTML = input;
                if (output[output.length-1] == "+" || output[output.length-1] == "-" || output[output.length-1] == "/" || output[output.length-1] == "*") {
                    if (output[output.length-2] == "+" || output[output.length-2] == "-" || output[output.length-2] == "/" || output[output.length-2] == "*") {
                        output = output.substring(0, (output.length-2)) + "*";
                    } else {
                        output = output.substring(0, (output.length-1)) + "*";
                    }
                } else {
                    output+="*";
                }
                document.getElementById("actual-output").innerHTML =  output;
                break;
            }
        case "equals":
            check = true;
            end = eval(output);
            output += ("=" + end);
            input = "";
            document.getElementById("actual-input").innerHTML = end;
            document.getElementById("actual-output").innerHTML = output;
            break;
    }
}

function inputUpdate(str) {
    if (check == true) {
        if (input != "/" && input != "*" && input != "+" && input != "-") {
            let reset = false;
            for (let i = 0; i < output.length; i++) {
                if (output[i] == "=") {
                    reset = true;
                }
            }
            if (reset == true) {
                clearValue();
            }
            check = false;        
        }
        
    }


    if (input.length == 22) {
        document.getElementById("actual-input").innerHTML=limit;
    } 

    if (input === 0 || input == "+" || input == "-" || input == "*" || input == "/") {
        switch(str) {
            case "decimal":
                if (dec == 0) {
                    input = "0.";
                    output += "0.";
                    dec += 1;
                }
                break;
            case "zero":
                input = "0";
                output += "0";
                break;
            case "one":
                input = "1";
                output += "1";
                break;
            case "two":

                input = "2";
                output += "2";

                break;
            case "three":
                input = "3";
                output += "3";
                break;
            case "four":
                input = "4";
                output += "4";
                break;
            case "five":
                input = "5";
                output += "5";
                break;
            case "six":
                input = "6";
                output += "6";
                break;
            case "seven":
                input = "7";
                output += "7";
                break;
            case "eight":
                input = "8";
                output += "8";
                break;
            case "nine":
                input = "9";
                output += "9";
                break;
            }
    } else {
        if (output == "0") {
            switch(str) {
                case "one":
                    input = "1";
                    output = "1";
                    break;
                case "two":
                    input = "2";
                    output = "2";
                    break;
                case "three":
                    input = "3";
                    output = "3";
                    break;
                case "four":
                    input = "4";
                    output = "4";
                    break;
                case "five":
                    input = "5";
                    output = "5";
                    break;
                case "six":
                    input = "6";
                    output = "6";
                    break;
                case "seven":
                    input = "7";
                    output = "7";
                    break;
                case "eight":
                    input = "8";
                    output = "8";
                    break;
                case "nine":
                    input = "9";
                    output = "9";
                    break;
                }
        } else {
            switch(str) { 
                case "decimal":
                    if (dec == 0) {
                        input += ".";
                        output += ".";
                        dec += 1;
                    }
                    break;
                case "zero":
                    if (input != "0") {
                        input += "0";
                        output += "0";
                    }
                    break;
                case "one":
                    if (input[0] != "0") {
                        input += "1";
                        output += "1";
                    } else {
                        input = "1";
                        output = (output.slice(0,output.length-1) + "1");
                    }
                    break;
                case "two":
                    if (input[0] != "0" || input == "/") {
                        input += "2";
                        output += "2";
                    } else {
                        input += "2";
                        output = (output.slice(0,output.length-1) + "2");
                    }
                    break;
                case "three":
                    if (input[0] != "0") {
                        input += "3";
                        output += "3";
                    } else {
                        input = "3";
                        output = (output.slice(0,output.length-1) + "3");
                    }
                    break;
                case "four":
                    if (input[0] != "0") {
                        input += "4";
                        output += "4";
                    } else {
                        input = "4";
                        output = (output.slice(0,output.length-1) + "4");
                    }
                    break;
                case "five":
                    if (input[0] != "0") {
                        input += "5";
                        output += "5";
                    } else {
                        input = "5";
                        output = (output.slice(0,output.length-1) + "5");
                    }
                    break;
                case "six":
                    if (input[0] != "0") {
                        input += "6";
                        output += "6";
                    } else {
                        input = "6";
                        output = (output.slice(0,output.length-1) + "6");
                    }
                    break;
                case "seven":
                    if (input[0] != "0") {
                        input += "7";
                        output += "7";
                    } else {
                        input = "7";
                        output = (output.slice(0,output.length-1) + "7");
                    }
                    break;
                case "eight":
                    if (input[0] != "0") {
                        input += "8";
                        output += "8";
                    } else {
                        input = "8";
                        output = (output.slice(0,output.length-1) + "8");
                    }
                    break;
                case "nine":
                    if (input[0] != "0") {
                        input += "9";
                        output += "9";
                    } else {
                        input = "9";
                        output = (output.slice(0,output.length-1) + "9");
                    }
                    break;
                }
        }
    }
    if (input.length < 22) {
        currentReload();
    }
    
}


function showReal() {
    document.getElementById("actual-input").innerHTML="success";
}

