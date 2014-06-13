(function() {
  var calculateMemory;

  window.sqlmax || (window.sqlmax = {});

  calculateMemory = function(x, z) {
    return console.log(x, z);
  };

  window.sqlmax.calculateMemory = calculateMemory;

}).call(this);
