content.addEvent('keyup', function(e) {

});


content.addEvent('mouseup', function(e) {

});

function editButtonsInit() {
  this.create = function(elementName) {
    return document.createElement(elementName);
  }

  this.strong = function() {
    return this.create('strong');
  }

  this.u = function() {
    return this.create('u');
  }

  this.em = function() {
    return this.create('em');
  }

  return this;
}


function editButton(functionName, element) {
  obj = new editButtonsInit();

  let methods = get_methods_in_object(obj);

  if(!in_array(functionName[0], methods)) {
    return false;
  }

  return obj[functionName[0]](element);
}

function get_methods_in_object(objectInstance) {
  let methods = Object.getOwnPropertyNames(objectInstance).filter(function(filter) {
    return typeof objectInstance[filter] === 'function';
  });

  return methods;
}

function in_array(search, array) {
  var in_array = array.filter(function(value, index, array) {return search == value;});
  if(in_array.length === 1){
    return true;
  }
  return false;
}








//
//
//

const content = dom('#content');
const editButtons = dom('button[editbutton]');
let currentElement = [];
let letterArray = [];

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};


editButtons.addEvent('click', function(e) {
  let button = dom(this);
  button.toggleAttr('pressed', true, false);
  button.toggleAttr('class', 'selected', 'none');
  selection().setCaret(content.elements[0]);
  letterArray = [];
});

content.addEvent('keyup', function(e) {
  let nodes = [];
  editButtons.elements.forEach(function(value) {
    let element = dom(value);
    if(element.getAttr('pressed')[0]) {
      nodes.push(element.getAttr('editButton')[0]);
    }
  });


  var charCode = e.which || e.keyCode;
  var charStr = String.fromCharCode(charCode);
  if (/[a-z0-9]/i.test(charStr)) {
   letterArray.push(e.key);
  }

  selection().appendElements(nodes, letterArray);

});

function SelectionInit() {
  this.selection = window.getSelection();
  this.range = this.selection.getRangeAt(0);
  this.newRange = document.createRange();


  this.appendElements = function(nodes, letters) {
    let node = '';
    let words = letters.reduce(function(curr, next) {
      return curr += next;
    });

    nodes.forEach(function(value) {
      node += '<' + value + '>';
    });

    node += words;

    nodes = nodes.reverse();
    nodes.forEach(function(value) {
      node += '</' + value + '>';
    });


    let text = this.range.commonAncestorContainer.textContent.splice(this.range.startOffset, 0, node);
    let frag = this.range.createContextualFragment(text);
    this.range.commonAncestorContainer.textContent = '';
    this.range.deleteContents();
    this.range.insertNode(frag);
    this.range.collapse(true);
    letterArray = [];
    this.setCaret(dom('#content'));


  }

  this.replaceText = function(newText) {

  }

  this.setCaret = function(element) {
    this.selection.removeAllRanges();
    this.newRange.setStart(this.range.commonAncestorContainer, this.range.startOffset);
    this.selection.addRange(this.newRange);
    return this;
  }

  this.pasteHtmlAtCaret = function(html) {
    if (this.selection.getRangeAt && this.selection.rangeCount) {
      this.range.deleteContents();
      var frag = this.range.createContextualFragment(html);
      this.range.insertNode(frag);
      this.range.collapse(true);
    }

    return this;
  }

  this.getSelectedNode = function() {
    var node = this.selection.anchorNode;

    if (!node && document.selection) {
      this.selection = document.selection;
      var range = this.selection.getRangeAt ? this.selection.getRangeAt(0) : this.selection.createRange();
      node = range.commonAncestorContainer ? range.commonAncestorContainer : range.parentElement ? range.parentElement() : range.item(0);
    }

    if (node) {
      return (node.nodeName == "#text" ? node.parentNode : node);
    }

  }

  return this;
}

function selection() {
  return new SelectionInit();
};

//hoi ik ben luuk horsman en ik ben 18 jaar oud, ik ben op het moment bezig om zo veel mogelijk tijd te besteden aan het maken van een mooie editor, hopelijk gaat dit mij goed af, maar op het moment komt er nog niet zo veel van.....

content.appendElement('p', 'tab');
// content.appendElement('p', 'maaaaaaaaar ik ben dus luuk');
