function isArray1(arr) {
	return Array.isArray(arr);
}
function isArray2(arr) {
	return arr instanceof Array;
}


console.log( isArray1([1,2,3]) );
console.log( isArray2(["1","2","3"]) );

function range() {
  
  var arr = [];

  if (arguments.length == 1) {
    for (var i=0; i<arguments[0]; i++) {
      arr.push(i);
    }
  } else {
    for (var i=arguments[0]; i<arguments[1]; i++) {
      arr.push(i);
    }
  }   

  return arr;
}

console.log( range(5) )
console.log( range(1, 5) )


function compact(arr) {
  
  var newArr = arr.filter(function(num) {
    return num > 0;
  });
  
  return newArr;
}

function compact2(arr) {
  var newArr = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]) 
    }
  }

  return newArr;
}

console.log( compact([1,-3,-2,3,-3,0]));
console.log( compact2([1,-3,-2,3,-3,0]) );


function sum1(arr) {
  
  var res = arr.reduce(function(sum, current) {
    return sum + current;
  });
  
  return res;
}

function sum2(arr) {
  
  var res = arr.reduceRight(function(sum, current) {
    return sum + current;
  });
  
  return res;
}

console.log( sum1([1,2,3,4,5]) );
console.log( sum2([1,-3,-2,3,-3,0]) );

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; 
  }

  return Object.keys(obj);
}

console.log( unique([1,2,3,4,1]) );

function last(arr) {
  return arr[arr.length - 1];
}

console.log( last([1,2,3,4]) );

function excludeLast(arr, count) {
  if (count == "undefined") {
    var count = 1;
  }
  arr.splice(arr.length - count, count);
  
  return arr;
}

console.log( excludeLast([1,2,3,4], 2) );