# Style Guide for This Site
To improve readability of code in the future, ensure consistency across the codebase,
and also to make it easier to make PR's for Hacktoberfest, I'm making a style guide
for the BUGS website, documenting best practices to keep in mind while writing
HTML, SASS, and Liquid for the site, as well as general organizational information to keep in mind.

### General

#### Data Files are in the `/assets` Folder
Files that hold data are in the `/assets` folder; the `/assets` folder should not
contain any user-facing pages.

#### Data Files Shouldn't have Front Matter
Files in `/assets` folder shouldn't have front matter. **Exception:** CSS files
may have front matter if it is necessary to override theme variables.

#### Data Files are Organized by Use Case and by File Type
Data files are organized into 3 folders, `css/`, `js/`, and `img/`, which define
the types of files in each folder. Within these folders, files are organized by
use case.

#### Don't Edit `_config.yml` in Master
`_config.yml` is the file that holds site-wide variables; editing it is prone to
site-breaking changes. Please don't edit `_config.yml` unless you know what you're
doing, and then when you do so, please make sure you commit changes to `_config.yml`
in their own commit with the commit message `"changed config.yml"` so that it's
easier for us to review your PR.

### HTML Style
The site uses [Bootstrap][bootstrap], a CSS library that makes website building way easier. This document won't cover Bootstrap best practices, but you can read them in [the documentation here][bootstrap-docs].

[bootstrap]: https://getbootstrap.com/
[bootstrap-docs]: https://getbootstrap.com/docs/4.1/layout/overview/

#### Element Attributes use Double Quotes
Element attributes, like `id` and `class`, should always be enclosed in double quotes, without space padding around the `=` sign. For example,

```html
<div id="example" class="my-example-class"></div>
```

#### Names Use Hyphens to Denote Spacing
Names for classes, id's, etc. should be written using **all lowercase characters**,
and using **hyphens** to denote whitespace between words in the same namespace. For example,

```html
<a class="my-long-multiword-class-name"></a>
```

### SASS Style
General SASS style is outside the scope of this guide. Please refer to [the SASS documentation][sass-docs] for more information on that.

[sass-docs]: https://sass-lang.com/guide

#### Page Styling is Enclosed in a Page-Specific Class Selector
Page styling shouldn't bleed into other pages; to ensure this, please enclose
your selectors in a wrapping selector that prevents the scope of the selector
from leaving the page.

#### `lib` Does Nothing By Itself, and has no Dependencies
Files in the `lib` module shouldn't *do* anything. i.e. the compiled
CSS file that they generate shouldn't actually cause any visual changes. That means
that there shouldn't be any CSS outside of mixins and placeholder classes.

#### Raw Hex Codes Only Appear in `lib/_variables.scss`
Everything should be human-readable. That means no hex codes outside of `lib/_variables.scss`,
because using hex codes anywhere else makes code much harder to debug and change in the future.

#### `base/_theme.scss` Defines the Theme of the Site
The only colors referenced anywhere outside of `lib` should be declared in `base/_theme.scss`.
This means that **if you use a color in the site, it should be named and defined in
`base/_theme.scss`.**

### Jekyll/Liquid Style

#### Liquid Expressions Use Single Quotes
To reduce confusion, use single quotes in liquid expressions to indicate a string.
This makes it easier to read liquid expressions inside quoted HTML properties.

#### Liquid Expressions Are not Used in Data Files
Data files shouldn't be dynamically generated at compile time. If the data is
generated at compile time, it isn't really data.

