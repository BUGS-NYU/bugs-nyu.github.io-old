# How to Contribute to This Site

The club website is in constant need of changes, issue fixes and new contributions.

- If you __find a problem__ on the website, submit an issue.
- If you have __ideas for changing/improving the website__, create an issue and describe your ideas.
- If you want to fix some of the existing issues, fork the repository and make a pull request

## What to Contribute
All contributions, documentation improvements, and ideas are welcome; if you're new to open source, we recommend looking at the [Github "Issues" tab][issues] or trying one of the following:

### Ongoing Needs
- Make markdown files for upcoming BUGS events, including:
  - General club meetings
  - Small group project meetings
- Make markdown files for news stories related to open source, including:
  - General news about BUGS
  - Interesting open source projects outside of BUGS
  - Interesting tech news related to open source
  - Etc

### Planned Features
- Display all student contributors
- Add more project details
  - Display To Do's
  - Display student contributors

[gh-issues]: https://github.com/BUGS-NYU/bugs-nyu.github.io/issues

## How to Contribute
Once you've decided on an issue to fix or an improvement to add, you'll need to learn how to work with Github, Jekyll, and the website's general file setup.

### Git and Github
You'll first need to [create a Github account][sign-up-gh] and [download Git][git-desktop]. If you're new to either of these two systems, here's a few good resources to get you started:

- [How to Contribute][open-source-guide] - This guide by Alaina Kafkes describes how to contribute to projects on Github; if you're completely lost, or just need a refresher on the basics, this is a good place to start
- [Git Basics][git-basics] - A more technical look at the basics of Git itself
- [Git Cheatsheet][git-cheats] - Github's Git cheat sheet
- [How to Create a Pull Request on GitHub][create-pull-req] - A guide specifically for creating pull requests on Github. We recommend learning a little more about Git before reading this, because it can't help with troubleshooting Git problems
- [Matthew Brett's Git Guide][curious-git] - A beginner's guide to Git, how it works, and how to use it. It's written like a story, so skimming might be appropriate depending on your comfort level
- [The Git Parable][git-parable] - A beginner's guide to Git on a more technical level. It's also written like a story, so skimming might be appropriate

[git-cheats]: https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
[open-source-guide]: https://medium.com/clarifai-champions/99-pr-oblems-a-beginners-guide-to-open-source-abc1b867385a
[git-basics]: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
[create-pull-req]: https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
[git-desktop-guide]: https://help.github.com/desktop/guides/getting-started-with-github-desktop/
[curious-git]: https://matthew-brett.github.io/curious-git/curious_intro.html
[git-parable]: http://practical-neuroimaging.github.io/git_parable.html

In general, you'll need to first fork the repository to your own account, then clone it to your own computer with

```shell
# You want Terminal/Powershell to be viewing whatever folder you want to hold the project folder
# i.e. if you want the bugs-nyu.io project folder to be on you desktop, you should
# change your working directory to Desktop in Terminal
# For more information, visit http://www.linfo.org/cd.html
git clone https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git
```

Next you'll want to set up your local `master` branch to track your forked repository. You can do this with:

```shell
git branch set-url --push origin https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git
git branch -u origin/master
```

**NOTE:** You should replace `YOUR-USER-NAME` with *your* username.

Now, whenever you type `git push` you'll push to your own forked repository, and when you type `git pull` you'll pull from BUGS's main repository.

### Setting up Jekyll
To view the website locally, you'll need to get Jekyll up and running. This is a radically different process depending on your operating system.

This step isn't _always_ necessary; if you don't want to do this you can view the site from github pages via your own fork.

#### Windows
If you're running windows take a look at this guide: https://jekyllrb.com/docs/windows/#installation

#### Linux and MacOS
We'd recommend using a [package manager][install-ruby] to install ruby, and then using the command

```shell
gem install Jekyll
```

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems

#### MacOS-Specific Issues
Since Mac has a built-in version of ruby, you can't install Jekyll in its library folder without being a system admin and having root access. To get around this, we recommend using [homebrew][install-homebrew]. If you have hombrew installed, type the following commands in.

```shell
brew install rbenv
rbenv init
# Follow the instructions printed after this step to set it up correctly
rbenv install 2.5.3
rbenv global 2.5.3
# Restart your terminal after this command
gem install jekyll
```

More detailed instructions can be found [here][install-rbenv].

[install-homebrew]: https://brew.sh/
[install-rbenv]: https://github.com/rbenv/rbenv#homebrew-on-macos

### Claim an Issue

Let us know that you are working on the issue by posting a comment below the issue that you are trying to fix. Simply state that you are trying to resolve it - this way other people are not jumping in and duplicating your work.

(If you do not have any activity for a while after claiming the issue, we will assume that you abandoned it so other people can work on it.)

<!-- ### General Steps for Forking and Cloning

- Find the website project repository on GitHub: [https://github.com/BUGS-NYU/bugs-nyu.github.io](https://github.com/BUGS-NYU/bugs-nyu.github.io)
and __fork__ it into your own account (there is a fork icon, ![fork icon](assets/img/fork_icon.png), in the upper right corner of the page). A _fork_ is a complete copy of the project in your own account.

- Use the following instruction to __clone__ the repository to your own computer:

  `$ git clone  https://github.com/YOUR-USER-NAME/bugs-nyu.github.io.git`

  (note: replace `YOUR-USER-NAME` with your GitHub username ;) )

- Setup the additional remote. The repository on your machine can be connected to multiple remote repositories: your own fork and the original repository hosting the BUGS website.

  - change into the subdirectory with the code that you just cloned:

    `cd bugs-nyu.github.io`

  - add the remote repository pointing to the original BUGS website repository:

    `git remote add website https://github.com/BUGS-NYU/bugs-nyu.github.io.git` -->

### Making and Viewing Changes
Now that you have Git, Jekyll, and the website code all downloaded and installed, you can start directly editing website code on your own computer. To view these edits, use the command

```shell
jekyll serve
```

and open you preferred web browser to the url `localhost:4000`. Whenever you make an edit to a file, just refresh the page, and you should be able to see the result of your edits.

#### Working with Jekyll
Quite a few `.html` files use Jekyll to compile the final page. Here's a few guides so the syntax makes sense:

- [Jekyll Docs](https://jekyllrb.com/docs/) for a in-depth guide on Jekyll
- [Liquid Docs](https://shopify.github.io/liquid/) for a guide on the syntax used by Jekyll
- [Liquid Cheatsheet #1](https://www.shopify.com/partners/shopify-cheat-sheet)
- [Liquid Cheatsheet #2](https://devhints.io/jekyll)
- [Liquid Examples](https://gist.github.com/JJediny/a466eed62cee30ad45e2)

#### Without Jekyll
If you didn't install Jekyll, no worries; you can push your changes to your account's fork and view them from github pages. First, you want to set up github pages on your fork - more instructions on how to do that in [this github tutorial][gh-pages-tutorial]. To push (after you've committed your most recent changes), write `git push origin master` in terminal, and then go to `https://YOUR-USER-NAME.github.io/bugs-nyu.github.io` to view your version of the website.

[gh-pages-tutorial]: https://guides.github.com/features/pages/



### Committing Along the Way
It's generally considered good practice to commit your changes after you've reached a "checkpoint" - a place where you like to save all of the edits you've made up to that point. To do this, use the following commands:

```shell
git add LIST-OF-FILES-WITH-CHANGES
git commit -m "MESSAGE-STATING-WHAT-YOU-DID"
git push origin master
```

### Making the Pull request
Once you're ready to submit your changes for review, you can make a pull request:

- Go to your fork on GitHub and switch to the Pull Requests tab.
- Use the big green button that says New pull request.
- Verify where you are merging from and where you are merging to (it should be master branch of your fork into the master branch of the actual BUGS website repository). Look through the list of your commits to double check that the changes you are attempting to merge are the correct ones.
- Click Create pull request once everything seems correct.
- In the message indicate the number of issue the pull request is solving and briefly tell us what you did.
