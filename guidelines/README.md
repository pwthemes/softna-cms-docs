## General

* Never change files markup/php/html, make new layouts instead
* Use less variables, never hardcode colors
* Use only primary and secondary colors (dont add any additional colors), muted should be always light color, dark Is dark
* Use uikit and framework utility css classes when adding custom markup
* Optimize images!!!

## Theme

When building a theme first thing to do is to set theme title and name, in **theme.json** file.    
***title = PWthemes My Theme***     
***name = pwthemes-my-theme***

Things to do when finish building a theme:

* **Clean theme up when u finish**!!! Empty trash, delete unused widget, delete unused pages...
* Turn off tracy debugger, turn developer mode off in AIOM module
* In **config.php** set `$config->debug = false;` and `$config->advanced = false;`
* Export Site Profile

## Widgets
* Use decriptive widgets names. Eg: if you create grid widget to display services, dont name it *grid*, use more descriptive name *services grid* or just *services*...
* When creating new widget template, always put options under **Options Tab** -- even if its 1 field only

## Hero
* Disable hero types that are not used on the theme. Keep *default*, and hero type used for the current theme, disable the rest...

## Custom Websites
Some recomendations when building custom websites using softna cms:
* Disable Customizer (Show on Menu in module settings)
* Disable Layout manager  (Show on Menu in module settings)
* When creating new layouts for widgets and pages, name them based on client name. eg: *My Client Gallery* or *My Client Pricing*