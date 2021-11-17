var age = 100;

var name = "KEN";

function foo() {
  var age = 99;
  bar();
}

function bar() {
  console.log(this.age);
}

foo();
