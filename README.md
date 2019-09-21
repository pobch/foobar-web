## The Design

## What I did not do regarding to the design

Due to my time limitation, I cut some scope down. The following tasks are what I did not do.

- I didn't implement the 'Latest Posts' section since it can be done using the same technique as the 'Recommended' section.
- I didn't implement the footer section. It includes 3 columns on Desktop and reduces to 1 column on Mobile. This can be done using flexbox similar to the 'Recommended' section.
- I didn't implement `onclick` event on the search icon of Mobile's navbar since it is similar to the hamberger icon.

## What I've done

The following are tasks that I've done.

1. Responsive design: There are 2 layouts supported, Desktop layout and Mobile layout. The breakpoint is 768px screen width. Any device which has its screen width below 768px is considered as a Mobile, otherwise it is considered as a Desktop.
2. The navbar:

![navbar-mobile](docs/navbar-mobile.png 'Navbar on Mobile layout') ![navbar-mobile-expanded](docs/navbar-mobile-expanded.png 'Navbar on Mobile layout expanded')

On Mobile layout, the navbar position is `sticky`. The hamburger menu can be clicked to expand/collapse sub-menus.

3. The hamburger menu on Mobile layout. It can be clicked to expand/collapse the menu.

- The carousel
- The category tab on 'Recommended' section
- The 'See more recommended articles'

## Remark

- Pure JavaScript and CSS

minimum width support: 375px (iPhone 6/7/8)
breakpoint: 768px

TODO:

- cursor : pointer
- write comments
- write README
