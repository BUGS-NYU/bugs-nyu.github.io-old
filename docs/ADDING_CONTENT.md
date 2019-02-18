# Adding Content to this Site
Each collection has a document titled `.template.md` that describes how to add
an element to the collection. In general, the Jekyll convention is that:

1. All files with names that begin with a dot (`.`) will be ignored by Jekyll
2. Files are organized into a "front matter" and "content" section. **Front matter
is surrounded by 2 lines that only contain `---`**, and the content is everything
after that. **Jekyll will ignore any file without at least the 2 `---` lines at
the beginning of the file.**
3. Collection file names are formatted as `YYYY-MM-DD-title-lower-caps.md` where
`YYYY-MM-DD` is the zero-padded numerical representation of the date of the
file. If the file doesn't have a date, then it's just `title-lower-caps.md`.
4. The date in a file name is automatically added to the file's front matter,
but a `date` value explicitly added to the front matter will override that.
5. The file will implicitly have a capitalized version of its file name as its
title, but a `title` value will override that.


### Events (`/_events`)
Files in this collection represent to events that BUGS is hosting or
sponsoring/promoting. They are formatted according to the convention established
in the file `/events/.template.md`, and are displayed both in the calendar and 
in the event header in the days leading up to the event.

### News (`/_posts`)
Files in this collection represent tidbits information that we at BUGS would like to
share with members.

### Contributors (`/_contributors`)
Files in this collection represent people that have contributed to the website
over the years. They do not have an associated date, and should be named according
to the convention `<firstInitial><lastName>.md`, i.e. "Albert Liu" would become
`aliu.md`.

### Projects (`/_projects`)
Files in this collection contain information about the projects that BUGS is currently
sponsoring/promoting/collaborating on.

