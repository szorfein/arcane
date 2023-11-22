+++
title= "Git Workflow"
date = 2023-11-10

[taxonomies]
tag = ["git"]

[extra]
description = "Optimise your git workflow."
+++

This workflow work mainly on 2 branches:
+ `main`
+ `devel`

# Start a project

The branch `main` contain only stable code, kind of `production` version.
`devel` contain all the future works/stuff/feature planned, but not yet fully tested.

Start by create the `devel` branch on your repository:

```sh
git checkout -b devel
git push origin devel
```

You can call this branche: dev, develop or anything you want.

# Features

Features are added into the `devel` branch

```sh
git checkout -b colorscheme devel
...wrote code to build your feature...
```

Once time terminated, create a commit:

```sh
git commit -a -S -m "new colorscheme done"
```

If we have other commit/work to do, push the feature branch:

```sh
git push origin colorscheme
```
When you have done all the features, merge them to the `devel` branch:

```sh
git checkout devel
git merge colorscheme # only for little commit (less than 5 lines)
git merge --no-ff colorscheme
```
Destroy the branch if you have done, keep if not sure.

```sh
git branch -d colorscheme
git push origin -d colorscheme # remove the branch on github
git push origin devel
```
When all features are finish, create a release !

# Release

Release are started into the `devel` branch:

```sh
git checkout -b release-1.2 devel
git commit -a -S -m "version 1.2"
```
If we have other commit/work on the branch, push on github

```sh
git push origin release-1.2
```
When finished, merge it into 'Main' and 'Develop'

```sh
git checkout main
git merge --no-ff release-1.2
git tag -a -s -m "Release v1.2 - September 2022" 1.2
```
For the release message (in Github) example:

```markdown
September 2022 - v1.2

### Notable changes
* Most important change from the changelog
* Second important change from the changelog

[All Changes](https://github.com/szorfein/spior/blob/master/CHANGELOG.md)
```

To delete a tag:

```sh
git tag -d X
git fetch origin tag X
```
Merge into devel

```sh
git checkout devel
git merge --no-ff release-1.2
```
Delete the release

```sh
git branch -d release-1.2
```
And push all the release and tag to your git repository:

```sh
git push origin --all
git push origin --tags
```
Or more manually if you have a lot of private branches:

```sh
git push origin devel
git checkout main
git push origin main
git push origin 1.2 # the tag
```
Push the tag: https://git-scm.com/book/en/v2/Git-Basics-Tagging

```sh
git tag
git show 1.2
git push origin 1.2
```
# Issue

When issue come, create a new branch on `main` this time, with the issue number:

```sh
git checkout -b Hotfix-1.2.1 main
...wrote codes to fix the issue...
```
Once time finish, make a commit:

```sh
git commit -a -S -m "Hotfix done"
```
If we have other commit/work, push on github

```sh
git push origin Hotfix-1.2.1
```
When we finish

```sh
git commit -a -S -m "Fix issue #1 - v1.2.1"
```
When issue is solved, merge it into `main` and `devel` branch:

```sh
git checkout main
git merge --no-ff Hotfix-1.2.1
git tag -a -s -m "Release v1.2.1 - September 2022" 1.2.1
```
Into devel

```sh
git checkout devel
git merge --no-ff Hotfix-1.2.1
```
Remove the Hotfix

```sh
git branch -d Hotfix-1.2.1
git push origin -d Hotfix-1.2.1
```
And push all

```sh
git push origin --all
git push origin --tags
```
#### References
+ https://nvie.com/posts/a-successful-git-branching-model/
+ https://www.red-gate.com/simple-talk/devops/tools/getting-started-with-gitflow/
