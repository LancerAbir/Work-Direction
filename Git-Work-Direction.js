/**
 * * text
 * ! text
 * ? text
 * TODO: text
 * @param myParam


* !  ~~~˚∆˚~~~  Github Work Direction ~~~˚∆˚~~~


*! 01 Global user name & email set …………………
----------------------------------
** git config —global user.name “your name”
** git config —global user.email “your@email.com”


*! 02 Create New Folder …………………
-----------------------
** mkdir react_project —> create new folder name: react_project


*! 03 Create New File …………………
------------------
** touch app.js —> create new file name: app js


*! 04 Default …………………
------------------
** git init —> repository add by hidden
** git status —> নতুন কি হয়েছে টা show করবে
** git add (file name) —> git add only file
** git add . —> git add all file /
** git commit -m “text“ demo.js —> record message (individual file)
** git commit -am “text“ —> record message (all file)
** git log —> টোটাল কতো গুলা commit হইছে টা দেখাবে (commit-id সহ)
** git log - -oneline —> টোটাল কতো গুলা commit হইছে টা দেখাবে 1 link এ (commit-id সহ)
** git diff —> file এ কি modify ++ - - হয়েছে তা দেখার জন্য (staged ছাড়া)
** git diff -- staged —> file এ কি modify হয়েছে তা দেখার জন্য (staged অবস্তায়)
** git diff (commit id) (commit id) --> ২ commit মধ্যে কি পার্থক্য হয়েছে তা দেখা যাবে
** git show (commit id) —> commit করার পর ওই ফাইল এ কি কি ছিল টা show করবে
** git checkout (commit id) (file name) —> আগের অবস্তায় ফিরে যাবার জন্য
** git commit -am “text“ —> record message (all file)


*! 05 Delete File …………………
------------------
** git rm hello.js —> file delete করার জন্য (staging সারা)
** rm -rf .git  —> folder delete
** git reset HEAD lal.js —> file delete করার জন্য (staging সহ)


*! 06 Clone …………………
------------------
** git clone (repository link) (folder-name) —> repository থেকে computer project download হয়ে যাবে
** git add . + git commit -m “some text” + git push -u origin master —> total file upload in repository
** SSH (github profile e user name and email set করা হয় যাতে বার বার name & email দিতে না হয়)


*! 07 Branch …………………
------------------
** git branch  —> এখন কোন branch এ আছি তা দেখাবে।
** git branch (new branch name) —> create a new branch
** git checkout (branch name) —> এর branch থেকে অন্য branch যাওয়ার system
** git checkout -b (new branch name) —> create a new branch + switch this branch
** switch to master branch + git marge (branch
￼
 —> branch B data master branch e add hoye jabe


git remote add origin https://github.com/sabujhasansarker/demo.git


*! 08 Fork (অন্যের repository নিজের profile এ add করা & modify করে push করা + pull request author যদি মনে করে modify করা দরকার তাহলে marge করবে) …………………
------------------
** Fork button click + clone + modify + git push -u origin master + click new pull request button + comments (what i do modify)


*! 09 Uploaded Git File /Folder Delete …………………
------------------
** git rm --cached -r node_modules


*! 10 Status And Clean …………………
----------------------
** git stash —> temporary ভাবে file delete করা।
** git stash pop —> delete করা file পুনরায় ফিরিয়ে আনা।
** git stash list —> total কয়টা file temporary ভাবে delete করা হয়েছে তার list
** git stash clear —> stash করা files গুলোকে কে clear করা।


*! 11 Git Ignore (যেই ফাইল গুলো git এ upload করার দরকার নাই সেই ফাইল গুলাকে Git Ignore সেট করতে হয় যাতে সেই ফাইল git এ upload হবে না ) …………………
----------------------
** vim .gitignore  —>
** git add .gitignore —>













End----
**/