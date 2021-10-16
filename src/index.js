function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} until{end}`);

  for (var i = start; i <= end; i++) {
    //log the number between some start and end point
    console.log("hitting index", i);
  }
}

console.log("~~~ logNumbers ~~~");
logNumbers(1, 2);

function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`); //console.log start and end

  function recurse(i) {
    console.log("hitting index", i);

    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}
console.log("~~~");
logNumbersRecursively(1, 3);
