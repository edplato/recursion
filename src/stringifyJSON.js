// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check for individual type BASE CASES undefined,null,number,string
  if(obj === undefined) {
    return undefined;
  } else if(obj === null) {
    return null;
  } else if(typeof obj === 'number') {
    return obj.toString();
  } else if(typeof obj === 'string') {
    return '"' + obj + '"';
  // array and object types will require recursion to iterate through nested objects
  } else if(Array.isArray(obj)) {
    return '[' + obj.reduce(function(accumulator, currentIndex) {
      return accumulator.concat(stringifyJSON(currentIndex));
    }, []).join(',') + ']';
  } else if(typeof obj === 'object'){
    return '{' + Object.keys(obj).reduce(function(accumulator, currentKey) {
      if(obj[currentKey] === undefined){
        return accumulator;
      } else if(obj[currentKey] !== undefined) {
        return accumulator.concat(['"' + currentKey + '":' + stringifyJSON(obj[currentKey])]);
      } else {
        return accumulator + '{}';
      }
    }, []).join(',') + '}'
  }
};