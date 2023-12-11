/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    this.result = 0;
  }

  add(num){
    this.result+=num;
  }
  subtract(num){
    this.result-=num;
  }
  multiply(num){
    this.result*=num;
  }
  divide(num){
    if(num == 0)
    throw new Error("Invalid");
    this.result/=num;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  removeSpaces(expression){
    let expr = "";
    for(let i = 0;i < expression.length;i++){
      if(expression[i] != ' '){
        expr+=expression[i];
      }
    }

    return expr;
  }

  getExprArray(expression){

    let flag = true;
    let decimal = 1;
    let ans = [];
    let num = 0;
    for(let i = 0;i < expression.length;i++){

      let ch = expression[i];
      if(ch == '+' || ch == '-' || ch == '/' || ch== '*' || ch == ")")
      { 
        if(ans[ans.length-1] == ')')
        ans.push(ch)
        else{
          ans.push(num);
          ans.push(ch);
          num  = 0;
          flag = true;
          decimal = 1;
        }
      }
      else if(ch == '(')
        ans.push(ch);
      else if(ch == ')'){
        if(ans[ans.length-1] == ')')
        ans.push(ch)
        else{
          ans.push(num);
          ans.push(ch);
          num  = 0;
          flag = true;
          decimal = 1;
        }
      }
      else if(ch == '.'){
        flag = false;
      }
      else{
        if(ch >= '0' && ch <= '9'){
          if(flag)
          num = (num*10)+(ch-'0');
          else
          {
            num = num + ((ch-'0')*(Math.pow(0.1,decimal)));
            decimal++;
          }
        }
        else
        { 
          // console.log(ch);
          throw new Error("Invalid Input");

        }
      }
    }
    if(expression[expression.length-1]!=')')
    ans.push(num)


    return ans;
  }

  value = {
    '+':0,
    '-':0,
    '*':1,
    '/':1,
    '(':-1
  };

  getPostfix(expression){
    let expr = this.removeSpaces(expression)
    expr = this.getExprArray(expr)
    // console.log(expr);
    let mystack = []
    let postfix = []

    for(let i = 0;i < expr.length; i++){

      let ch = expr[i];

      if(ch == '+' || ch == '-' || ch == '/' || ch == '*'){
        //keep popping mystack till find a less symbol or (

        while(mystack.length > 0){

          // let last = mystack.pop();
          if(this.value[mystack[mystack.length-1]] >= this.value[ch]){
            postfix.push(mystack.pop());
          }
          else{
            break;
          }
        }
        mystack.push(ch);
        
      }
      else if(ch == '('){
        // console.log(mystack);
        mystack.push(ch);
      }
      else if(ch == ')'){
        
        // console.log(mystack);
        // break;
        while((mystack.length > 0) && (mystack[mystack.length-1]!='(')){
          let a = mystack.pop();
          // console.log(a);
          postfix.push(a);
        }
        if(mystack.length == 0)
        throw new Error("Invalid Parenthesis");
        mystack.pop();
      }
      else
      postfix.push(ch);
    }
    while(mystack.length>0){
      if(mystack[mystack.length-1] == '(')
      throw new Error("Invalid Parenthesis");
      postfix.push(mystack.pop());
    }

    return postfix;

  }

  evaluatePostfix(post_exp){
    // console.log(post_exp);
    let mystack = [];
    for(let i = 0;i < post_exp.length;i++){
      
      let cur = post_exp[i];
      if(cur == '+' || cur == '-' || cur == '/' || cur == '*'){
        let b = mystack.pop();
        let a = mystack.pop();
        // console.log(a+ " "+ b );
        if(cur == '+'){
          mystack.push(a+b);
        }
        if(cur == '-'){
          mystack.push(a-b);
        }
        if(cur == '/'){
          if(b == 0)
          throw new Error("Division by zero");
          mystack.push(a/b);
        }
        if(cur == '*'){
          mystack.push(a*b);
        }
      }
      else
      {mystack.push(cur);}
    }

    return mystack[0];
  }

  calculate(expression){

    let temp = this.getPostfix(expression);
    this.result = this.evaluatePostfix(temp);
    
  }
}

// let x = new Calculator();
// console.log(x.calculate('(2.5 + 1.5) * 3'));
// z = x.getPostfix(`10 +   2 *      (   6 - ((     4 + 1))     /     2) + 7`);
// console.log(z)

module.exports = Calculator;
