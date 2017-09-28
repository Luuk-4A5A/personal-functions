function gatherFormData(formTagName, callback) {
  let string = '';
  let formData = document.querySelectorAll(formTagName);
  let cleanFormTagName = formTagName.slice(1, -1);

  for(var i = 0; i < formData.length; i++) {
    var name = formData[i].attributes.item(cleanFormTagName).value;
    string += name + '=' +  formData[i].value + '&';
    callback(formData[i].attributes.item(cleanFormTagName), formData[i].value);
  }
  string = string.slice(0, -1);
  return string;
}

//use the tag to get all the information needed, give the tag a value to give the name to the value.
var data = gatherFormData('[data-form-information]', (response, value) => {
  //foreach of the elements a callback gets called with the tag and value as a argument.
  console.log(response, value);
});

console.log(data);
