# Theme Folder

Theme folder is our main playground, here we can add custom less/css and load custom scripts. This folder is never replaced during the updates, so it's a right place for you custom style.

::: tip Add Custom Scripts
Use `loadJS(my_script.js)` function in ***theme.php*** to add custom scripts.    
Use `loadCSS(my_style.css)` function in ***theme.php*** to add custom css files.
:::

### ***_theme.less***    
This is the main less file, you can add custom style here or, u can separete your style into files and include them in this file.

### ***_vars.less***    
All default less variables are located here, this file is included in ***_theme.less***. In many cases, you dont need to write custom less/css code, all you need to do is change the variables values. Change the header or button height, modify colors etc...

### ***theme.json***     
This is where you add your theme info.

### ***theme.php***    
This file is included before any markup. Here you can add custom ajax code (very useful for processing ajax requests), or load custom css/js scripts or js plugins.

*Process ajax request*
``` php
if($config->ajax) {

    // do something if its ajax call

    exit();
}
```

*Add custom script. Script will be automatically loaded at the bottom, site wide.*
``` php
loadJS($config->urls->templates . "theme/js/theme.js");
```
