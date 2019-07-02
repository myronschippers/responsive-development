# Responsive Web Development

This project is meant as a learning aid for responsive development. This includes discussion of `@media` queries, `<meta>` tags, breakpoint sizing, and mobile first styling.

## Launching the Project

**Run:**

`npm install`

**Launch Local:**

`npm start`

After that you ar ready to go. The rest of the available scripts can be found below.

## Setting the Viewport

Responsive Viewport `<meta>` tag is used to optimize pages for a variety of devices. It is placed in the `<head>` of the HTML document. This tag gives the browser instructions on how to control the page's dimensions and scaling.

* Attribute of `name="viewport"` calls out that we are definning seetings for the viewport
* Attribute of `content` controls the viewport settings
    * `width=device-width` - matches the screen's width in device-independent pixels
    * `initial-scale=1` - establishes a 1:1 relationship between CSS pixels and device-independent pixels
* If you disable scaling it will effect your sites accessibility

```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

## Important Defaults

There are certain elements that need some base styling when working in a responsive environment. This is not a lot of changes but are crucial changes to the layout.

* For the `html` and `body` elements we set `height: 100%` which allows us to fully cover the entire webpage with background colors or images.

    ```css
    html,
    body {
    height: 100%;
    }
    ```

* The `img` element is one of the most important as all images used will enherit their own sizing. For this we set `max-width: 100%` so that the `img` will use it's own sizing until its parent element is smaller than it is and it will then be restricted to the full width of that container. The CSS declaration `display: inline-block;` is used to eliminate spacing caused by the fact that `<img>` tags are inline elements. 

```css
img {
  max-width: 100%;
  display: inline-block;
}
```

## Fluid Dimensions

When setting up styling for most elements on your webpage you should avoid using fixed/absolute dimensions. An absolute dimension will not scal as the sive of the device scales and may caus unwanted layout interruptions and inaccessible content. For a demonstration we will use the `MediaBlock` component as an example. In `src/components/MediaBlock/MediaBlock.css` on line #18 - 22:

If we change the width to `400px` it will become an absolute value. When scaling the browser we can see what effects this has.

```css
.mediaBlock-media {
    width: 400px;
    padding: 0 0 10px 0;
    box-sizing: border-box;
}
```

Changing the width back to `100%` it will now be fluid and adjust its size based off of it's containing parent element.

```css
.mediaBlock-media {
    width: 100%;
    padding: 0 0 10px 0;
    box-sizing: border-box;
}
```

## Mobile First

We start with some base styling to support our mobile view and will work our way up from there.

### Header & Navigation

We have a basic header with logo and website name on the left and a hamburger menu on the right. When the hamburger menu is clicked the navigation items slide in from the right side of the screen.

**What happens when we go to other Breakpoint sizes?**

### Media Block

At mobile we inherit the screen width and stack the image on top of the content.

## Helpful Resources

**Articles on Responsive Development:**

* [Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
* [The 100% Correct Way to do CSS Breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)
* [How to Use CSS Breakpoints to Create Responsive Designs](https://getflywheel.com/layout/css-breakpoints-responsive-design-how-to/)
* [Responsive: HTML & CSS is Hard](https://internetingishard.com/html-and-css/responsive-design/)

**Sample Responsive Sites:**

* [GitHub](https://github.com/) 
* [Klient Boost](https://klientboost.com/)
* [Shopify](https://www.shopify.ca/)
* [Smashing Magazine](https://www.smashingmagazine.com/)

**CSS Documentation:**

* [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
