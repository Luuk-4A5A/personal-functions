function domInit(selector) {
  if(selector instanceof HTMLElement){this.elements = [selector];}
  else {this.elements = document.querySelectorAll(selector);}
  this.selector = selector;



  this.html = function(content) {
    this.elements.forEach((value, index, array) => {
      value.innerHTML = content;
    });
    return this;
  };

  this.getAttr = function(attr) {
    let tempArr = [];
     this.elements.forEach((value, index, array) => {
       var insertValue = value.getAttribute(attr);

      if(insertValue == 'true') {
        insertValue = true;
      } else if(insertValue == 'false') {
        insertValue = false;
      }
       tempArr.push(insertValue);
     });
     return tempArr;
  };

  this.toggleAttr = function(attr, firstAttr, secondAttr) {
    if(this.getAttr(attr)[0] == firstAttr) {
      this.setAttr(attr, secondAttr);
    } else {
      this.setAttr(attr, firstAttr);
    }

    return this;
  }

  this.setAttr = function(attr, value) {
    this.elements.forEach(function(newvalue) {
      newvalue.setAttribute(attr, value);
    });
  }

  this.addEvent = function(tempEvent, callback) {
    this.elements.forEach((value, index, array) => {
      value.addEventListener(tempEvent, callback);
    });
    return this;
  };

  this.append = function(elementType, text = '') {
    let node = document.createElement(elementType);
    node.innerHTML = text;
    this.elements.forEach(function(value, index, array) {
      value.appendChild(node);
    });
    return this;
  }

  this.removeElement = function(elementType, index = 0) {
    let elementTypes = document.querySelectorAll(this.selector + ' ' + elementType);
    elementTypes.forEach(function(value) {
      console.log(value);
    });
  }

  return this;
}

function dom(selector) {
  return new domInit(selector);
}





// hey mark voor placeholder.
