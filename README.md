# SQL Server Max Memory Calculator


### Idea

The idea is from Vlad Catrinescu. What we do is a fast and accessible web app.

### Formula
Formula for this calculator is described on the [codeplex project site for the original utility](https://sqlmem.codeplex.com/) in text, and even [expressed in C#](https://sqlmem.codeplex.com/SourceControl/latest#Form1.cs)

```
SQL Max Memory = TotalPhyMem - (NumOfSQLThreads * ThreadStackSize) - (1GB * CEILING(NumOfCores/4)) - OS Reserved 


NumOfSQLThreads = 256 + (NumOfProcessors*- 4) * 8 (* If NumOfProcessors > 4, else 0) 


ThreadStackSize = 2MB on x64 or 4 MB on 64-bit (IA64) 


OS Reserved = 20% of total ram for under if system has 15GB. 12.5% for over 20GB
```

This is the javascript representation of the algorythm:

```javascript
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

var maxMemory = (totalram - forOS - otherApps 
         - (sqlThreads * threadStackSize)
         - (1024 * Math.ceil(temp)));
```

### Building and developing

To build the project you must have nodejs, grunt, and npm.

```
npm install
grunt build
```

Alternatively, if you want to run it locally with a dev server.

```
grunt server
```
This will give you a livereload functionality where you can update the source code and see the changes directly in your browser without needing to reload the page.

### Hosting

The web apps is hosted on [Github Pages](https://help.github.com/articles/what-are-github-pages)

### Deploying

The web app is deployed with the git command [subtree](https://gist.github.com/cobyism/4730490).
```sh
git subtree push --prefix dist origin gh-pages
```

Before you do it for the first time, make sure you don't have a branch gh-pages.

### DNS
The SQL Max web app will be accessible at http://sqlmax.chuvash.eu. The DNS is configured with Github Pages and and an additional file [CNAME](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)

### Mobile optimization
The web app is optimized for mobiles. Here are two references that have been used:

- [Optimizing Mobile Web Apps for iOS](http://blog.teamtreehouse.com/optimizing-mobile-web-apps-ios)
- [iOS7 Web App Gist (by tfausak)](https://gist.github.com/tfausak/2222823)

### Authors and Contributors
- [Anatoly Mironov](https://github.com/mirontoli) (@mirontoli)
- [Erik Kronberg](https://github.com/eakron) (@eakron)

### License
The SQL MAX web app is licensed with the [MIT License](LICENSE).
