function domInit(selector) {
  this.selector = selector;
  this.elements = document.querySelectorAll(selector);


  this.html = function(content) {
    this.elements.forEach((value, index, array) => {
      value.innerHTML = content;
    })
    return this;
  };


//Get the value of a attribute from elements.
  this.getAttr = function(attr) {
    let tempArr = [];
     this.elements.forEach((value, index, array) => {
       tempArr.push(value.getAttribute(attr));
     });
     return tempArr;
  };

  this.addEvent = function(tempEvent, callback) {
    this.elements.forEach((value, index, array) => {
      value.addEventListener(tempEvent, callback);
    });
    return this;
  };

  this.value = function() {
    return this.elements[0].value;
  }

  this.values = function() {
    var array = [];
    this.elements.forEach(function(value, index, temparray) {
      array.push(value.value);
    });

    return array;
  }

  return this;
}


function dom(selector) {
  return new domInit(selector);
}



dom('#text').addEvent('keyup', function(e) {
  let text = dom('#text').elements[0].value.split('');
  var newText = '';
  text.forEach(function(value, index, array) {
    console.log();
    newText += randomCapitalLetter(value);
  });
  dom('#result').html(newText);
});


function randomCapitalLetter(letter) {
  let randomNumber = Math.round(Math.random() * 10);
  var newLetter = '';

  if(randomNumber > 5) {
    newLetter = letter.toUpperCase();
  } else {
    newLetter = letter;
  }
  return newLetter;
}
