# Style Guide for This Site
To improve readability of code in the future, ensure consistency across the codebase, and also to make it easier to make PR's for Hacktoberfest, I'm making a style guide for the BUGS website, documenting best practices to keep in mind while writing HTML, SASS, and Liquid for the site, as well as general organizational information to keep in mind.

### General

#### Data Files are in the Assets Folder

#### Data Files are Organized by Use Case and by File Type

#### Don't Edit `_config.yml` in Master


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

#### `lib` Does Nothing By Itself, and has no Dependencies

#### Raw Hex Codes Only Appear in `lib/_variables.scss`

#### `base/_theme.scss` Defines the Theme of the Site

#### Only `base/_theme.scss` can Refer to `lib/_variables.scss`


### Jekyll/Liquid Style

#### Liquid Expressions Use Single Quotes

#### Liquid Expressions Are not Used in Asset Files

####
