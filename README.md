#UHC STYLE
This is a simple gulp app that outputs a template and a stylesheet. I referenced [this site](http://www.myuhc.info/#/mobileCode) as the base. I didn't style any of the content that would go in the main container.

This is purely the background style, typogrpahy, header & colors to be integrated into the main site build.

Email questions to [Scott Baggett](mailto:hello@scottbaggett.com)
## INSTALL

    $  npm install
    $  gulp
    

## DIST

This will start a dev server, but you can just cancel it and open the ./dist folder. It contains a css file and the html with the markup. If you are using SCSS in your build process you should just be able to integrate what I did inside main.scss.  

Inside index.html you need to copy the main container and header. All the angular output of the current application should just fit inside a <div class='row'> after the heaer.
    
I didn't style any copyright bar at the bottom as I didn't see any in the current design.
