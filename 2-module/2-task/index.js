function isEmpty(obj) {
  var counter = 0;
  for (var key in obj) {
      counter++;
  }
  if (counter == 0) {
      return true;
  }
  else {
      return false;
  }
}