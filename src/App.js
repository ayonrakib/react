// import React, { Component } from 'react';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// class MyButton2 extends React.Component{
//    render(){
//      console.log(this);
//     return(
//       <button id = {this.id}>Click me, too</button>
//     ) 
//   }
// }

// MyButton2.nextId = 1;

// function MyButton(abcd){
//   return (
//     <>
//       <button>Click Me for {abcd.value}</button>
//       <h1>My name is {abcd.name} and age is {abcd.age}</h1>
//     </>
//   )
// }

// isDigit
// input: character
// return: true if digit, false if not
// method:
//    1. jodi character er ACII value 48 and 57 er moddhe hoy:
//      1. return true
//    2. return false
// function isDigit(character) {
//   // console.log("character value is: ",character);
//   if(character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57){
//     // console.log("ascii value of character is: ", character.charCodeAt(0));
//     // console.log("valid digit");
//     return true;
//   }
//   // console.log("invalid digit");
//   return false;
// } 


// isOperatror
// input: character
// return: true if character, false if not
// method:
//    1. jodi character +,-,* ba / hoy:
//      1. return true
//    2. noile return false
// function isOperator(character) {
//   if(character === "+" || character === "-" || character === "*" || character === "/"){
//     return true;
//   }
//   return false;
// }


// performDivisionOrMultiplication -> multiple numbers
// input: expression list, operation as / or *
// return: exp list 
// method:
//    1. jotokkhon exp list e {operation} ase:
//      1. 1st index of operator
//      2. operator index bair korbo
//      3. jodi operator / hoy:
//        4. / index er ager dividend and porer divisor vaag kore result bair korbo
//      5. jodi operator * hoy:
//        6. * index er ager dividend and porer divisor vaag kore result bair korbo
//      7. log korbo result
//      8. operator index  theke 2 ta element kaatbo and result insert korbo
//      9. operator index -1 theke shuru kore 1 ta element kaatbo
//      10. log korbo final exp list
// function performDivisionOrMultiplication(expressionList, operator) {
//   while (expressionList.indexOf(`${operator}`) > -1) {
//     console.log(`The first index of ${operator} is: `, expressionList.indexOf(`${operator}`));
//     var index = expressionList.indexOf(`${operator}`);
//     if (operator === "/") {
//       var result = Number(expressionList[index-1]) / Number(expressionList[index+1]);
//     } else {
//       var result = Number(expressionList[index-1]) * Number(expressionList[index+1]);
//     }
//     console.log(`result of ${operator} is: `,result);
//     expressionList.splice(index,2,result.toString());
//     expressionList.splice(index-1,1);
//     console.log(`after ${operator}, exp list is: `, expressionList);
//   }
//   return expressionList;
// }


// evaluateFinalExpression
// input: exp list
// return: nothing, just log result
// method:
//    1. / operation korbo first e exp list er upore
//    2. * operation korbo exp list er upore
//    3. result hobe exp list er 0th element
//    4. exp list er 1st index theke shuru kore proti 2 index por por:
//      1. jodi current element + hoy:
//        1. result = result + porer element er int er sathe jog
//      2. jodi current element - hoy:
//        1. result = result - porer element er int er sathe jog
//    5. log korbo result
// function evaluateFinalExpression(expressionList) {
//   expressionList = performDivisionOrMultiplication(expressionList, "/");
//   expressionList = performDivisionOrMultiplication(expressionList, "*");
//   const [result, setResult] = useState(Number(expressionList[0]));
  // console.log("result is: ",result);
  // var result = Number(expressionList[0]);
  // console.log("result is: ",result);
  // for(var index = 1; index < expressionList.length; index += 2){
  //   if (expressionList[index] === "+") {
  //     result += Number(expressionList[index+1]);
  //   } else {
  //     result -= Number(expressionList[index+1]);
  //   }
  // }
  // console.log("result is: ",result);
// }

// evaluateExpressionOnCalculatorButtonPress
// Input: global expressionList, global stringNumber, character
// Return: none
// Method:
//    1. jodi character . hoy:
//      1. jodi string number er last character . na hoy othoba empty string hoy:
//        1. string number e append character
//    2. jodi character = hoy:
//      1. expression list e append string number
//      2. string number empty string
//      3. final expression evaluate korbo exp list er
//    3. othoba jodi character operator na hoy:
//      1. jodi character digit na hoy:
//        1. show modal with react
//      2. jodi character digit hoy:
//        1. jodi character empty string na hoy:
//          1. stringNumber e concat character
//          2. exp list log
//          3. string number log
//    4. othoba jodi character operator hoy:
//      1. jodi string number empty string na hoy and exp list er last element empty string na hoy and string number operator na hoy:
//        1. exp list e push string number
//        2. exp list e append ocharacter
//        3. string number hobe empty string
//      2. othoba jodi string number empty str hoy and character / and * na hoy:
//        1. string number a concat character

// var expressionList = [];
// var stringNumber = "";
// function evaluateExpressionOnCalculatorButtonPress(character){
//   if(character === "."){
//     if(stringNumber.charAt(stringNumber.length-1) !== "." || stringNumber === ""){
//       stringNumber += character;
//     }
//   }
//   else if(character === "="){
//     expressionList.push(stringNumber);
//     stringNumber = "";
//     console.log("The expression list is: ", expressionList);
//     evaluateFinalExpression(expressionList);
//   }
//   else if(!(isOperator(character))){
//     if(!(isDigit(character))){
//       // showModal();
//       // console.log("character is not a digit");
//     }
//     else {
//       if(character !== ""){
//         stringNumber += character;
//         console.log("expression list in isDigit function is: ",expressionList);
//         console.log("string number list is: ",stringNumber);
//       }
//     }
//   }
//   else if(isOperator(character)){
//     if(stringNumber !== "" && expressionList[expressionList.length -1] !== "" && !(isOperator(stringNumber))){
//       expressionList.push(stringNumber);
//       console.log("The final element of exp list is: ", typeof expressionList[expressionList.length -1]);
//       expressionList.push(character);
//       stringNumber = "";
//       console.log("expression list is: ",expressionList);
//     }
//     else if(stringNumber === "" && character !== "/" && character !== "*"){
//       stringNumber += character;
//       console.log("With operator, the string number is: ",stringNumber);
//     }
//   }
// }


// function performAction(buttonValue, operation)
// buttonValue = "AC"
// operation = []


// function CalculatorButton(props){
//   return (
//     <div id = {`btn-${props.value}`} onClick={() => evaluateExpressionOnCalculatorButtonPress(`${props.value}`)}>
//       {props.value}
//     </div>
//   )
// }


function App(){
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setresult] = useState(0);
  // updateFirstNumber
  // input: event
  // return: none
  // method:
  //    1. setNumber1 method call
  function updateFirstNumber(event) {
    setNumber1(Number(event.target.value));
    console.log("updateFirstNumber => number1: ",number1);
  }
  // updateSecondNumber
  // input: event
  // return: none
  // method:
  //    1. setNumber2 method call
  function updateSecondNumber(event) {
    setNumber2(Number(event.target.value));
    console.log("updateSecondNumber => number2: ",number2);
  }

  // add
  // input: none
  // return: none
  // method:
  //    1. setresult with a + b
  function add() {
    setresult(number1+number2);
    console.log("setresult => result is: ",result);
  }

  // subtract
  // input: none
  // return: none
  // method:
  //    1. setresult with a - b
  function subtract() {
    setresult(number1-number2);
    console.log("setresult => result is: ",result);
  }

  // multiply
  // input: none
  // return: none
  // method:
  //    1. setresult with a * b
  function multiply() {
    setresult(number1*number2);
    console.log("setresult => result is: ",result);
  }

  // divide
  // input: none
  // return: none
  // method:
  //    1. setresult with a / b if b != 0
  function divide() {
    if(number2 !== 0){
      setresult(number1/number2);
      console.log("setresult => result is: ",result);
    }
    else{
      console.log("The divisor cannot be zero!");
    }

  }

  return (
    <div id = "numbersBlock">
      <div id = "firstNumber">
        <input placeholder = "first number" onChange = {updateFirstNumber}></input>
      </div>
      <div id = "secondNumber">
        <input placeholder = "second number" onChange = {updateSecondNumber}></input>
      </div>
      <div>
        <button onClick = {() => console.log("First Number: ",number1, " and second number: ",number2)}>Print Both Numbers</button>
      </div>
      <div>
        <div id = "add">
          <button  onClick = {add}>Add</button>
        </div>
        <div id = "subtract">
          <button  onClick = {subtract}>Subtract</button>
        </div>
        <div id = "multiply">
          <button  onClick = {multiply}>Multiply</button>
        </div>
        <div id = "divide">
          <button  onClick = {divide}>Divide</button>
        </div>
      </div>
      <div>
        <button onClick = {() => console.log("result value is: ",result)}>Show Result</button>
      </div>
    </div>
  )
}

export default App;