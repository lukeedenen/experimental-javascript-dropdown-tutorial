# experimental-javascript-dropdown-tutorial

this is a tutorial that will, hopefully, make coding a dropdown menu in JavaScript as easy and understandable as possible, even if you are not particularly familer with JavaScript. If you are like me, and do not know javascript particularly well, you can probably relate to most tutorials for specific tasks being going over your head. Understanding how to code a dropdown menu is particularly important, because this is the best way to make your websites main nav accesible at different screen sizes.

When coding your dropdown menu using JavaScript, there are three main steps, with severa substeps under each. The three main steps are 1, setting up your html; 2, setting up your css; and 3, adding the javascript. there are several specific, and somewhat odd things you need to do when setting up your html and javascript.

# Setting up your html


1. In your \<header\> html element, you normally, want to have your \<h1\> and your main navigation menu both nested inside you header. However, when coding your dropdown, you want not one, but two seperate main navigation elements. for the navigations, start with a \<div\> element, which will parent a \<ul\> element, which will parent \<li\> elements for each main navigation option, and each \<li\> should have an \<a\> to create the link. for now, you can just create one of these navigations, copy it, and paste it right beneath. This is what your page should look like when opened in the browser.
 
 ![multiple-naviagations](/images/multiple-navigations.png)

2. Now that you have two seperate naviagations, you need to add a few elements to one of main navigations. I put them inside the first main navigation div, and gave it a class name of “main-nav__dropdown”. 
* Add a \<button\> element. This should be the first thing inside of the main-nav__dropdown div. This will be used to toggle the dropdown menu. You will have a better idea what it is doing once we add the javascript
* Add 2  \<span\> elements nested inside the \<button\> These will later be used to create the hamburger button. While it is possible to import a png or svg, using the span elements will let you animate the button. this animation effect will not be covered in this tutorial.
* Add a second \<div\> parenting the \<ul\> This will be used as a containger for the dropdown, and will make it a bit easier set the width and position of the dropdown menu.

Hopefully, this image of my source code will make all that mumbo jumbo a little easier to understand.

![source-code](/images/source-code=two-navigations.png)

3. The Now that you have the basic html markup, we need to add a few attributes
* The main-nav__dropdown div should be given an additional attribute of aria-expanded="false". the false value means that that the dropdown menu will not extend automatically when the page load, and we will later use Javascript to change the value to “true”, which will toggle the dropdown.
* For each of the \<span\> elements inside the \<button\> element, you will add the attribute aria-hidden="true". This means that these elements are decorative only, and therefore, cannot be individually selected, and screenreaders and other assistive technology will ignore them.

4. The final step in html, will be to add class names to each elemtent in _**both navigation elements**_. This image will show how I have my html set up, including attributes and how I named my classes.
![add-attributes](/images/add-attributes.png)

# Setting up your basic CSS formatting
For the sake of making it easier to follow along, I am going include my style formatting, so that anyone following along can have similar results to what I have. If want to skip to the part that is relevent specifically to the dropdown, skip ahead to the “Setting up your CSS formatting for dropdown” section.

1. formating type. The first thing I am going to show you is my type formatting. All the type I am using are available through google fonts. Importing google fonts will not be covered in this tutorial, but font family, style, and weights are listed below.
* lato Light Italic
* Lato Regular
* Lato Bold
* Cormorant medium
* Cormorant bold italic
* Cormorant semibold


2. Formatting Color. When working with CSS, I always create color variables inside a root selector, so I do not have to worry about repeating the hex code every time I call a color. you can just copy and paste the root info into your css file from here. you can call these variables at any time where you would normally call a hex code. you do this by replacing the hex code with a var, followed by the variable name inside parentheses. For example, when calling red, you would type background-color { var(--color-red-500);} 
:root {
  --color-red-500: #850F0F;
  --color-white-500: #F2F2F2;
}

# Setting up your CSS formatting for dropdown
