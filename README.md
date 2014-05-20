# SQL Server Max Memory Calculator


### Idea

The idea is from Vlad Catrinescu. What we do is a fast and accessible web app.

### Formula
Formula for this calculator is described on the [codeplex project site for the original utility](https://sqlmem.codeplex.com/) in text, and even [expressed in C#](https://sqlmem.codeplex.com/SourceControl/latest#Form1.cs)

```
**SQL Max Memory** = TotalPhyMem - (NumOfSQLThreads * ThreadStackSize) - (1GB * CEILING(NumOfCores/4)) - OS Reserved 


NumOfSQLThreads = 256 + (NumOfProcessors*- 4) * 8 (* If NumOfProcessors > 4, else 0) 


ThreadStackSize = 2MB on x64 or 4 MB on 64-bit (IA64) 


OS Reserved = 20% of total ram for under if system has 15GB. 12.5% for over 20GB
```

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

### Authors and Contributors
- Anatoly Mironov (@mirontoli)

### License
The SQL MAX web app is licensed with the [MIT License](LICENSE).