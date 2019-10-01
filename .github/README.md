# bugs-nyu.github.io
This is the website for BUGS, NYU's premier open source club

### Contents
- [How to Contribute](#how-to-contribute)
- [How to install Jekyll](#installing-jekyll)
- [How to use Jekyll](#using-jekyll)

## How to Contribute
### Adding Markdown Events
1. Fork this repository
2. Make a new markdown (filename ending with .md) document in the `/_events` folder
   of your fork
3. Follow [the template event](_events/template_event.md) by including this at the top
   with the correct information:

   ```yaml
   ---
   layout: event
   title: "Your Event Title"
   event_date: 2017-12-31
   time: "Event Time"
   location: "Event Location"
   ---
   ```

4. Then include the entire event description in markdown using [this guide][md-guide]
   for help. No need to write your title, date, time, or location, they're automatically
   added to the event page for you
5. Make a pull request to this repository

[md-guide]: https://guides.github.com/features/mastering-markdown/

### Adding Yourself as a Contributor
1. Fork this repository
2. Make a new markdown (filename ending with .md) document in the `/_contributors`
   folder of your fork
3. Follow [the template event](_events/template_event.md) by including this at the top
   with the correct information:

   ```yaml
   ---
   name: John Doe # Name of person
   position: Really cool person # Position, only displayed if in eboard
   type: eboard # Can be one of [ eboard, alum, founder, mentor, member ]
   ---
   Write something about yourself here.
   ```

5. Make a pull request to this repository


### Larger Contributions

1. Fork this repository
2. Make your fork live through your GitHub Pages domain
  * If you don't already have GitHub Pages, set it up by following [this guide][gh-pages]
  * In your forked repository, go into the Settings > to the GitHub Pages section > and change Source from "None" to "master branch" like so:
  ![contribute1](assets/img/contribute1.png)
  * Go to the file "\_config.yml"
  ![contribute2](assets/img/contribute2.png)
  and change baseurl and url to your GitHub Pages settings like so:
  ![contribute3](assets/img/contribute3.png)
3. Make any changes you want
4. When you are ready to make a pull request, you should make a new branch and revert the "\_config.yml" file to its original form in this new branch
5. Make a pull request from your new branch, while keeping your master branch live on your GitHub Pages for reviewers to study before merging your pull request. In your pull request description, please include a link to the live master branch on your GitHub Pages

[gh-pages]: https://guides.github.com/features/pages/

## Installing Jekyll
#### GNU/Linux and MacOS
If you're running GNU/Linux or MacOS on your system check if you have Ruby version 2.2.5 or above and RubyGems installed on your system.

Ruby - https://www.ruby-lang.org/en/downloads/

RubyGems - https://rubygems.org/pages/download

Run `gem install jekyll` once you have RubyGems installed on your system to install Jekyll.

#### Windows
If you're running windows take a look at this guide:
https://jekyllrb.com/docs/windows/#installation

## Using Jekyll
To start a development server run `jekyll serve` in the project source folder. The the server will run at `http://localhost:4000`

Resources for Jekyll syntax and usage:

- [Jekyll Docs](https://jekyllrb.com/docs/) for a in-depth guide on Jekyll
- [Liquid Docs](https://shopify.github.io/liquid/) for a guide on the syntax used by Jekyll
- [Liquid Cheatsheet #1](https://www.shopify.com/partners/shopify-cheat-sheet)
- [Liquid Cheatsheet #2](https://devhints.io/jekyll)
- [Liquid Examples](https://gist.github.com/JJediny/a466eed62cee30ad45e2)
