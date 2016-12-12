// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
   var result = [];
   function findElement(elemnet) {
      if (elemnet.classList.contains(className)) {
        result.push(elemnet);
      }
      for (var i = 0; i < elemnet.children.length;i++) {
         findElement(elemnet.children[i],className);
      }
   }

   findElement(document.body)
   return result;
};
