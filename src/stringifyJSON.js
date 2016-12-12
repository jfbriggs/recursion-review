// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Code for basic values
  if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (typeof obj === "number" || typeof obj === "boolean") {
    return "" + obj;
  } else if (typeof obj === "function" || obj === undefined) {
    
  } else if (obj === null || obj === NaN) {
    return "null";

  } else if (Array.isArray(obj)) {
    // Array code
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return "[" + result.join(",") + "]";

  } else {
    // Object code
    var result = [];
    for (key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== "function") {
        result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return "{" + result.join(",") + "}";
  }
};

