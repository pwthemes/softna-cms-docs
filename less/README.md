## Less Styling
All your custom less code should be located inside ***/theme/less/*** folder.    

When creating theme, it's very important to **NEVER hardcode** css property values, **especially colors**. Always use variables from ***_var.less***. There are variable for everything: colors, fonts, spaces, borders, utility... So please use them...

:::warning Dont Hardcode CSS Values
Don't hardcode css values, especially colors! Use variables provided in ***_vars.less***
:::    

:::danger NO NO!!!
``` Less
.my-element {
    background: #65476;
}
```
:::

:::tip YEP! Use less variables
``` Less
.my-element {
    background: @tm-primary-bg;
}
```
:::

In many cases custom less/css code is not needed, a lot of customizations can be done just by changing less variables values.

``` Less
// basic font size
@global-font-size: 18px;
// navbar height
@tm-navbar-height: 120px;
```  



## Scoped Classes

When we want to create a new html element with a "generic" design, we use class names with the     
`.tm-css-*` prefix, so we can later target dose selectors and add custom style, eg:    

``` html
<div class="my-element">
    <div class="tm-css-media"></div>
    <h3 class="tm-css-title"></h3>
    <div class="tm-css-content"></div>
</div>
```  

This type of class names are used on many different elements, so it's very important not to target and style this selectors directly, use css scope.

::: danger NO NO!
``` Less
.tm-css-title {
    color: blue;
}
```
:::

:::tip YEP!
``` Less
.my-element .tm-css-title {
    color: @tm-priamry-bg;
}
```
:::


Less makes this even easier:
``` less
.my-element {

    .tm-css-media {
        width: 100%;
    }

    .tm-css-title {
        color: @global-primary-color;
    }

    .tm-css-content {
        background: @global-muted-background;
    }

}
```
