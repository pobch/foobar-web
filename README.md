## The Design

[The project on Figma](https://www.figma.com/file/GWJ8bcmzV83nznFegX3cqG/Javascript-Test?node-id=0%3A1)

## What I did not do regarding to the design

Due to my time limitation, I cut some scope down. The following tasks are what I did not do.

- I didn't implement the 'Latest Posts' section since it can be done using the same technique as the 'Recommended' section.
- I didn't implement the footer section. It includes 3 columns on Desktop and reduces to 1 column on Mobile. This can be done using flexbox similar to the 'Recommended' section.
- I didn't implement `onclick` event on the search icon of Mobile's navbar since it is similar to the hamberger icon.

## What I've done

The following are tasks that I've done.

1. Responsive design: There are 2 layouts supported, Desktop layout and Mobile layout. The breakpoint is 768px screen width. Any device which has its screen width below 768px is considered as a Mobile, otherwise it is considered as a Desktop.
2. The navbar:

   ***

   ![navbar-mobile](docs/navbar-mobile.png 'Navbar on Mobile layout')

   ![navbar-mobile-expanded](docs/navbar-mobile-expanded.png 'Navbar on Mobile layout expanded')

   On Mobile layout, the navbar position is `sticky`. The hamburger menu can be clicked to expand/collapse sub-menus.

   ***

   ![navbar-desktop](docs/navbar-desktop.png 'Navbar on Desktop layout')

   On Desktop layout, the navebar contains a search bar and buttons.

   ***

3. The carousel:

   ***

   ![carousel-mobile](docs/carousel-mobile.png 'The carousel on Mobile layout')

   On Mobile layout, the carousel displays 4 articles one by one. You can swipe left/right to view another article.

   ***

   ![carousel-desktop](docs/carousel-desktop.png 'The carousel on Desktop layout')

   On Desktop layout, the carousel displays all 4 articles at once.

   ***

4. The 'Recommended' menus: You can click each menu to switch the active style.

   ![recommended-menu](docs/recommended-menu.png 'The Recommended menus')

5. The 'See more recommended articles' button:

   ***

   ![recommended-section-mobile](docs/recommended-article-mobile.png 'The Recommended section on Mobile')

   On Mobile, there are initial 3 articles displayed. Then, if you click the 'See more recommended articles' button, there will be other 3 more articles displayed.

   ***

   ![recommended-section-desktop](docs/recommended-article-desktop.png 'The Recommended section on Desktop')

   On Desktop, all 6 articles are initially displayed. If you click the 'See more recommended articles' button, the button will disappear and do nothing.

   ***

## Remark

- The whole web page was done by pure JavaScript and CSS except the carousel part.
- I used `Glide.js`, a tiny library, to implement the carousel part.
- Most icons come from `Font Awesome`.
- I used only 1 font family which is `Lato` from `Google Font`.
- Margins, paddings and font-size may not 100% comply with the design.
- The minimum screen width support for this page is 375px (iPhone 6/7/8). You may see a horizontal scroll bar for the screen below than that.
- The `@media` breakpoint to separate Desktop/Mobile layout is 768px.
