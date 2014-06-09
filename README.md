# SQL Server Max Memory Calculator

SQL Max, SQL Server Max Memory Calculator, available at ([sqlmax.chuvash.eu](http://sqlmax.chuvash.eu)), is a simple, nevertheless, a very powerful web application for calculating max memory for SQL Server. If you don't set the max memory, the SQL Server will occupy almost all of your server's RAM. 

SQL Max is optimized for mobiles and can be used even when you are offline, even though it works perfectly in a desktop browser. 

### Idea

The original idea of a tool for calculating the SQL Server Max Memory comes from [Vlad Catrinescu](http://about.me/vladcatrinescu), SharePoint MVP, who wrote a very popular whitepaper SQL Server Performance in a SharePoint Environment:
- [Free Whitepaper: Maximizing SQL 2012 Performance for SharePoint 2013 Whitepaper](http://spvlad.com/XNkPi2)

Despite of the formula (see below) in the whitepaper, Vlad Catrinescu also provided a tool for calculating max memory, a windows forms application that is freely downlodable at [sqlmem.codeplex.com](http://sqlmem.codeplex.com)

Our project is to take this idea a step further and make it available directly in your browser, on desktop at work, or on the go in your mobile. This mobile web app will also be available for offline access. Simply put, why should you dowload a zip file, extract and run the .exe file? Perhaps you cannot run executable files due restrictions, or perhaps you are not running Windows at all. 

### Design principles

There are a few design principles that are important in the development of the SQL Max:
- Accurate calculations achieved through automatic tests while developing
- Mobile first.
- Performance is very important. Avoid downloading external fonts and icons. Use web safe fonts
- ...

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

### Automatic tests
...

### Authors and Contributors
- [Anatoly Mironov](https://github.com/mirontoli) (@mirontoli)
- [Erik Kronberg](https://github.com/eakron) (@eakron)
- [Johannes Milling](https://github.com/Johesmil) (@johesmil)
- [Björn Roberg](https://github.com/roobie) (@roobie)
- [Stina Qvarnström](https://github.com/stinaq) (@stinaq)
- [Vlad Catrinescu](http://about.me/vladcatrinescu) (@vladcatrinescu)

### License
The SQL MAX web app is licensed with the [MIT License](LICENSE).
