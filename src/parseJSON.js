// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  // Code for objects
  if (json[0] === "{") {
    if (json === "{}") {
      return {};
    }
    var newObj = {};
    var noBrackets = json.substring(1, json.length - 1);
    noBrackets = noBrackets.replace(/ /g, '');
    var stringPairs = noBrackets.split(","); // ==> ["'3':'s'","'b':'2'"]
    stringPairs = stringPairs.map(function(element) {
      return element.split(":");
    });  // stringPairs => [['"3"', '"s"'], ['"b"', '"2"']]
    for (var i = 0; i < stringPairs.length; i++) {
      newObj[parseJSON(stringPairs[i][0])] = (stringPairs[i][1]);
    }
    for (var key in newObj) {
      parseJSON(newObj[key]);
    }
    return newObj;
  }

  // Code for arrays
  else if (json[0] === "[") {
    if (json === "[]") {
      return [];
    }
    var noBrackets = json.slice(1, json.length - 1);
    noBrackets = noBrackets.replace(/ /gi, '');
    var elementStrings = noBrackets.split(",");
    for (var i = 0; i < elementStrings.length; i++) {
      elementStrings[i] = parseJSON(elementStrings[i]);
    }
    return elementStrings;

  // Code for basic values
  } else if (json[0] == '"') {
    return json.slice(1,json.length-1);
  } else if (json === "true") {
    return true;
  } else if (json === "false") {
    return false;
  } else if (json === "null") {
    return null;
  } else {
    return Number(json);
  }
};

