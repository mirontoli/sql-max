'use strict';
/*var app = */
(function() {
	var elements = {
		result: document.getElementById('result')
	};
	elements.result.innerText = 'XXX';
})();
/*
//everything in MB
var oneGb = 1024; //MB

// "hard coded" options
var architecture = "x64";
var totalram = parseInt("8GB") * oneGb;
var corenumber = 4;
var otherApps = 0;


//thread stack sizes in MB
var threadStackSizes = { "x86": 1, "x64": 2, "IA64": 4 };

var threadStackSize = threadStackSizes[architecture];

var osReservedPart = totalram < (20 * oneGb) ? 0.2 : 0.125;
var forOS = totalram * osReservedPart;
var coretemp = corenumber > 4 ? 0 : corenumber;
var sqlThreads = 256 + (coretemp - 4) * 8;
var temp = corenumber / 4;

var maxMemory = (totalram - forOS - otherApps - (sqlThreads * threadStackSize) - (1024 * Math.ceil(temp)));
*/