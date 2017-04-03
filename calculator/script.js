function add(a, b) {
  return a+b;
}

function sub(a, b) {
  return a-b;
}

function mul(a, b) {
  return a*b;
}

function div(a, b) {
  return a/b;
}

function intDiv(a, b) {
  return (a-a % b) / b;
}

console.log( add(30, true) );
console.log( sub(30, 30) );
console.log( mul(30, 'liza') );
console.log( div(30, 30) );
console.log( intDiv(33,30) );
console.log( intDiv(33) );
console.log( intDiv() );

