// getName();
// // myName();
// console.log(x);
// console.log(getName);
// console.log(y);
// console.log(z);

// var x = 2;
// var c = 2;
// function getName() {
//   console.log("Hello");
//   console.log(c);
// }

// const myName = function newName() {
//   console.log("Hello");
// };

// var y = {
//   a: 1,
//   b: 2,
// };

// var z = ["a", "b"];

function add(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

console.log(add(2)(2)(2));
