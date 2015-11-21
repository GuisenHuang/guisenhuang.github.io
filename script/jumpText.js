Array.prototype.slice.call(document.querySelectorAll('.jump-text')).forEach(function makeMeJump (element){
  var nodeList = Array.prototype.slice.call(element.childNodes);
  nodeList.forEach(function(node, index, array) {
    if(node.nodeType === 3) { //if the current node is a textnode
      var innerHTML = '';
      var span = document.createElement('span');
      node.nodeValue.split('').forEach(function(char) {
        if (char !== ' ') {
          innerHTML += '<span class="jump-letter">' + char + '</span>';
        } else {
          innerHTML += ' ';
        }
      });
      span.innerHTML = innerHTML;
      element.replaceChild(span, node);
    } else { // if the current node is not a textnode
      makeMeJump(node);
    }
  });
});