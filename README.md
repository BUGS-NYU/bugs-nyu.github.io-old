# bugs-nyu.github.io
This is the website for BUGS, NYU's premier open source club

### Contents
- [How to Contribute](#how-to-contribute)
- [How to install Jekyll](#installing-jekyll)
- [How to use Jekyll](#using-jekyll)

## How to Contribute

### Adding Yourself as a Contributor
1. Fork this repository
2. Make a new markdown (filename ending with .md) document in the `/_contributors`
   folder of your fork
3. Follow [the template file](_contributors/.template.md) by including this at the top
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





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
