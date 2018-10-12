# How to Contribute to This Site

The club website is in constant need of changes, issue fixes and new contributions.

If you __find a problem__ on the website, submit an issue.

If you have __ideas for changing/improving the website__, create an issue and describe your ideas.

If you want to fix some of the existing issues, follow the fork, modify, make a pull request routine (details below).

__No prior experience contributing to open source projects?__
No problem. Here are some resources to get you started:

- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)


## How to fix an issues

### Prerequisites:
- git is installed on your own computer (you can just install [GitHub Desktop](https://desktop.github.com/) if you have never done this before)
- you have a [GitHub account](https://github.com/)


### Claim an Issue

Let us know that you are working on the issue by posting a comment below the issue that you are trying to fix. Simply state that you are trying to resolve it - this way other people are not jumping in and duplicating your work.

(If you do not have any activity for a while after claiming the issue, we will assume that you abandoned it so other people can work on it.)

### General Steps for Forking and Cloning

- Find the website project repository on GitHub: [https://github.com/BUGS-NYU/bugs-nyu.github.io](https://github.com/BUGS-NYU/bugs-nyu.github.io)
and __fork__ it into your own account (there is a fork icon, ![fork icon](assets/img/fork_icon.png), in the upper right corner of the page). A _fork_ is a complete copy of the project in your own account.

- Use the following instruction to __clone__ the repository to your own machine:

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

Before you attempt the pull request, you should make sure that the modifications work and actually fix the issue (without braking the other parts of the website).

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

__!!! Rever the temporary change in the `_config.yml` file.__
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

 
