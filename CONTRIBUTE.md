# How to Contribute to This Site

The club website is in constant need of changes, issue fixes and new contributions.

- If you __find a problem__ on the website, submit an issue.
- If you have __ideas for changing/improving the website__, create an issue and describe your ideas.
- If you want to fix some of the existing issues, fork the repository and make a pull request

__No prior experience contributing to open source projects?__
No problem. Here are some resources to get you started:

- [Git Basics][git-basics] - Basics of Git
- [Getting started with Git][getting-started] - Guide on installing and starting to use Git
- [Git Cheatsheet][git-cheats] - Github's Git cheat sheet
- [How to Contribute][open-source-guide] - This guide by Alaina Kafkes describes how to contribute to projects on Github; if you're completely lost, or just need a refresher on the basics, this is a good place to start
- [How to Create a Pull Request on GitHub][create-pull-req]
- [Markdown Cheatsheet][md-cheats] - Markdown is the standard for writing documents, issues, and pull requests. This cheatsheet has basically all the important syntax for it
- [Markdown Compiler][dillinger] - Compiles Markdown to a number of formats, so you can preview the docs you write

[md-cheats]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[dillinger]: https://dillinger.io/
[git-cheats]: https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
[open-source-guide]: https://medium.com/clarifai-champions/99-pr-oblems-a-beginners-guide-to-open-source-abc1b867385a
[git-basics]: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
[getting-started]: https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git
[create-pull-req]: https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
[git-desktop-guide]: https://help.github.com/desktop/guides/getting-started-with-github-desktop/

## How to fix an issue

### Prerequisites:
- git is installed on your own computer (you can just install [GitHub Desktop][git-desktop] if you have never done this before)
- you have a [GitHub account](https://github.com/)

[git-desktop]: https://desktop.github.com/

### Claim an Issue

Let us know that you are working on the issue by posting a comment below the issue that you are trying to fix. Simply state that you are trying to resolve it - this way other people are not jumping in and duplicating your work.

(If you do not have any activity for a while after claiming the issue, we will assume that you abandoned it so other people can work on it.)

### General Steps for Forking and Cloning

- Find the website project repository on GitHub: [https://github.com/BUGS-NYU/bugs-nyu.github.io](https://github.com/BUGS-NYU/bugs-nyu.github.io)
and __fork__ it into your own account (there is a fork icon, ![fork icon](assets/img/fork_icon.png), in the upper right corner of the page). A _fork_ is a complete copy of the project in your own account.

- Use the following instruction to __clone__ the repository to your own computer:

  `$ git clone  https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git`

  (note: replace `YOUR-USER-NAME` with your GitHub username ;) )

- Setup the additional remote. The repository on your machine can be connected to multiple remote repositories: your own fork and the original repository hosting the BUGS website.

  - change into the subdirectory with the code that you just cloned:

    `cd bugs-nyu.github.io`

  - add the remote repository pointing to the original BUGS website repository:

    `git remote add website https://github.com/BUGS-NYU/bugs-nyu.github.io.git`

### Editing the Code

Make the required changes in the code on your computer.
If you have questions, post follow-up comments/questions below the
issue that you are trying to resolve.

### Viewing and Testing Your Changes

Before you attempt the pull request, you should make sure that the modifications work and actually fix the issue (without breaking the other parts of the website).

You can view the BUGS website code that is hosted in your own fork on GitHub.

To do so, you will need to make a __temporary__ change in the `_config.yml` file:
- set the value of baseurl to `https://YOUR-USER-NAME.github.io/bugs-nyu.github.io/`

Commit and push all the changes you made on your own computer to the fork on GitHub:

- `git add LIST-OF-FILES-WITH-CHANGES`
- `git commit -m "MESSAGE-STATING-WHAT-YOU-DID"`
- `git push origin master`

Finally, activate the website in your own fork:
- Go to your own fork of the project at https://github.com/YOUR-USER-NAME/bugs-nyu.github.io
- Go to Settings and scroll down to GitHub Pages section.
- Under Source change None to __master branch__ and click Save.

After a few seconds, you should be able to refresh the Settings page and see the link to your own version of the BUGS website highlighted in green (you will need to scroll down to the GitHub Pages section).

If it seems that your changes fix the issue and do not break anything else, you are ready to make the pull request.

### Making the Pull request

__!!! Revert the temporary change in the `_config.yml` file.__
The `baseurl` should be set to `https://bugs-nyu.github.io`

- On your local machine download the latest code for the website using:

  `git pull website master`

  If this causes some merge conflicts (i.e. the files that you were changing were modified by other people as well), then resolve the merge conflicts (in most cases this means manually editing the files and deciding which changes should stay where).

- Commit the changes to your own fork on GitHub:

  - `git add LIST-OF-FILES-WITH-CHANGES`
  - `git commit -m "MESSAGE-STATING-WHAT-YOU-DID"`
  - `git push origin master`

- Make the actual pull request:

  - Go to your fork on GitHub and switch to the Pull Requests tab.
  - Use the big green button that says New pull request.
  - Verify where you are merging from and where you are merging to (it should be master branch of your fork into the master branch of the actual BUGS website repository). Look through the list of your commits to double check that the changes you are attempting to merge are the correct ones.
  - Click Create pull request once everything seems correct.
  - In the message indicate the number of issue the pull request is solving and briefly tell us what you did.
