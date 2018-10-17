# Info

Softna CMS has one important rule, **never edit any existing html markup**!!! Instead, create your own layouts, and use less/css to add custom style to the theme or client website. This way, cms updates won't overwrite your custom style and changes.

::: warning Dont Change Defeult Markup
Instead of changing and modifying default html markup, always use layout manager and create your own layouts.
:::

Also, there is bunch of pre-build general purpose fields you can use when creating new pages and widgets. We tend to make fields as reusable as possible, so please, before creating new field, first check the fields list, there is a high chance that similar field already exists and u can use it.

You can rename fields on the template level, so fields like ***on_off*** and ***off_on***, you can use for any kind of options...



### Folder Structure

When talking about folder structure, we are referring to the **templates folder**, all front end related stuff is located here.

```
├── apps    
├── markup
├── system
├── theme
├── widgets
```

* **apps** *structured content front-end (blog, product  etc..)*  
* **markup** *this is where most of the front-end markup is located (except widgets)*   
* **system** *core cms stuff, defaults, helpers, layouts... This folder should never be touched!*    
* **theme** *this is where all out custom style is located.*   
* **widgets** *widgets layouts, html markup*
