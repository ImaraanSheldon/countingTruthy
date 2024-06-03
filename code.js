// truth thingy
function boolMaker(boolName, boolDec){
    return boolName = boolDec;
  }
  let tArr = [boolMaker("Imaraan", true),boolMaker("Nicki", false),boolMaker("Robyn", true),boolMaker("Keira", true)]
  
  function filterTrueBool(array) {
    return array.filter(item => typeof item === 'boolean' && item === true);
  }
  console.log(filterTrueBool(tArr).length); // Output: [true, true, true]