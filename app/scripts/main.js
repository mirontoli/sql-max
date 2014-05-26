'use strict';
/*var app = */
(function() {
  var elements = {
    result: document.getElementById('result'),
    totalram:  document.getElementById('totalram'),
    cores: document.getElementById('cores'),
    architecture: document.getElementById('architecture'),
    otherram: document.getElementById('otherram')
  };
  var values = {
    totalram: elements.totalram.value,
    cores: elements.cores.value,
    architecture: elements.architecture.value,
    otherram: elements.otherram.value
  };
  function numberWithCommas(x) {
    //http://stackoverflow.com/a/2901298/632117
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  var calculateMemory = function() {
    //everything in MB
    var oneGb = 1000; //MB

    // "hard coded" options
    var architecture = values.architecture;
    var totalram = parseInt(values.totalram) * oneGb;
    var corenumber = parseInt(values.cores);
    var otherApps = parseInt(values.otherram);


    //thread stack sizes in MB
    var threadStackSizes = { 'x86': 1, 'x64': 2, 'IA64': 4 };

    var threadStackSize = threadStackSizes[architecture];

    var osReservedPart = totalram < (20 * oneGb) ? 0.2 : 0.125;
    var forOS = totalram * osReservedPart;
    var coretemp = corenumber > 4 ? 0 : corenumber;
    var sqlThreads = 256 + (coretemp - 4) * 8;
    var temp = corenumber / 4;

    var maxMemory = (totalram - forOS - otherApps - (sqlThreads * threadStackSize) - (1024 * Math.ceil(temp)));
    return Math.ceil(maxMemory);
  };

  var handleChangeEvent = function(e) {
    var id = e.target.id;
    values[id] = elements[id].value;
    elements.result.innerText = numberWithCommas(calculateMemory());
  };

  elements.architecture.addEventListener('change', handleChangeEvent);
  elements.totalram.addEventListener('change', handleChangeEvent);
  elements.cores.addEventListener('change', handleChangeEvent);
  elements.otherram.addEventListener('change', handleChangeEvent);

  elements.result.innerText = numberWithCommas(calculateMemory());
})();
/*

 */
