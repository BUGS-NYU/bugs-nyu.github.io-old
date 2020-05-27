---
layout: debug
title: Debug Information
---
This page contains debugging information for this site. It shouldn't be accessible
publicly, but *technically* is visible.

## Pages
This goes through all the pages in the site and prints info about them.

#### Format

{% raw %}
```
-  `{{ page.path }}`
   {% if page.title %}
   -  *Title:* `{{ page.title }}`
   {% endif %}
   {% if page.excerpt %}
   -  *Excerpt:* `{{ page.excerpt }}`
   {% endif %}
```

where `{{ page.path }}` accesses the `path` variable defined for a page in the
site.
{% endraw %}

#### Data

{% for page in site.pages %}
-  `{{ page.path }}`
   {% if page.title %}
   -  *Title:* `{{ page.title }}`
   {% endif %}
   {% if page.excerpt %}
   -  *Excerpt:* `{{ page.excerpt }}`
   {% endif %}
{% endfor %}

## Collections
This goes through all the collections in the site and prints info about them.

#### Format

#### Data
{% for collection in site.collections %}
-  `{{ collection.label }}`
   {% if collection.output %}
   -  *Output?:* `{{ collection.output }}`
   {% if collection.docs.size > 0 %}
   {% for doc in collection.docs %}
      -  <a href="{{ site.baseurl }}{{ doc.url }}"><code>{{ doc.slug }}</code></a>
   {% endfor %}
   {% endif %}
   {% endif %}
{% endfor %}
