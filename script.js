//your JS code here. If required.
var student = {
  name: "John Doe"
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  // Get all keys of the object
  return Object.keys(this);
};

