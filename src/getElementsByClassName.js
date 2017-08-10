// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // empty array to store matching dom elements with className
  var elements = [];
  // init document.body for childNode search
  var body = document.body;
  // checkNodes recursively searches through child nodes looking for more child nodes and matching class
  var checkNodes = function(body) {
    // base case return if no matching class and no more child nodes to explore
    if(!body.classList && !body.hasChildNodes()) {
      return;
    }
    // if element has classes and specificially contains className, push to elements array
    if(body.classList && body.classList.contains(className)) {
      elements.push(body);
    }
    // loop over element that has child nodes
    if(body.hasChildNodes()) {
      for(var i = 0; i < body.childNodes.length; i++) {
        // general recursive case to call checkNodes on child element and explore deeper
        checkNodes(body.childNodes[i]);
      }
    };
  };
  // init invocation of checkNodes starting with document.body
  checkNodes(body);
  // return found elements with class className
  return elements;
};