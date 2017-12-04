const content = dom('#content');
const editButtons = dom('button[editbutton]');
const contentp = dom('#content > p');

if(content.elements[0].children.length === 0) {
  content.append('p', '<br>');
}


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

  if(button.getAttr('pressed')[0] === true) {
    selection().appendElements(button.getAttr('editbutton')[0]);
  } else {
    selection().elementSplit(button.getAttr('editbutton'));
  }

});

content.addEvent('keyup', function(e) {

});

function SelectionInit() {
  this.selection = window.getSelection();
  this.range = this.selection.getRangeAt(0);
  this.newRange = document.createRange();


  this.appendElements = function(nodeName) {
    let newNode = document.createElement(nodeName);
    newNode.innerHTML = '&nbsp;';
    this.range.insertNode(newNode);

  }

  this.elementSplit = function() {
    let node = this.getSelectedNode().parentElement;
    // console.log(node);
    let newNode = document.createTextNode(".");
    node.appendChild(newNode);
    
    // console.log(this.newRange.commonAncestorContainer.nextSibling);


  }

  this.setCaretSpecific = function(element) {

  }

  this.setCaret = function() {
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


function placeCaretAfterNode(node) {
  if (typeof window.getSelection != "undefined") {
    var range = document.createRange();
    range.setStartAfter(node);
    range.collapse(true);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
