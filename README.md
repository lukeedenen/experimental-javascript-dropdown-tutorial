# experimental-javascript-dropdown-tutorial

this is a tutorial that will, hopefully, make coding a dropdown menu in JavaScript as easy and understandable as possible, even if you are not particularly familer with JavaScript. If you are like me, and do not know javascript particularly well, you can probably relate to most tutorials for specific tasks being going over your head. Understanding how to code a dropdown menu is particularly important, because this is the best way to make your websites main nav accesible at different screen sizes.

When coding your dropdown menu using JavaScript, there are three main steps, with several substeps under each. The three main steps are 1, setting up your html; 2, setting up your css; and 3, adding the javascript. there are several specific, and somewhat odd things you need to do when setting up your html and css.

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

4. The next step in html, will be to add class names to each elemtent in _**both navigation elements**_. This image will show how I have my html set up, including attributes and how I named my classes.
![add-attributes](/images/add-attributes.png)

# Setting up your css formatting

Because all the css neccessary is in the files included in this tutorial, in this tutorial, I am only going to explain the specifc parts that are necessary for the dropdown. If you want to follow along and have the same visual result as I have, you can copy and paste the code from the files above into your own code.

There are a few things you need do that are important to making this function correctly, even after adding the javascript.

1. The first thing you need to do, is set your div around you static navigation to display: none;. you will later make it visible again at a wider screen size.

2. you will need to format the dropdown__container element so that it appears as it would when the dropdown menu is expanded. There are a few specific things you need to do
* set dropdown__container to position: absolute; this will ensure that the position will not interfere with any of the other elements on the page.
* when the position is set to absolute, you cannot nudge elements using margins or padding. Rather, you need to you left, right, and top, and bottom, and you will enter the number of pixels that it needs to move away from that direction. For example, setting top: 50px; will move this element 50 pixels down from where it is.
* after you do this, continue to set up the dropdown approprialy so that it will appear expanded.

3. The next you you will do is format the main-nav__dropdown div, both when the aria-expanded is set to false, as well as when it is set to true. This will ensure that as you change the aria-expanded value, a visual change will in fact occur. The way you do this is selecting the classname of the element with the aria-expanded attriburte, and. Then add \[aria-expanded="true"\] or \[aria-expanded="false"\], with no space. for example, you would type something like this .main-nav__dropdown\[aria-expanded="false"\]. This will allow you to set different values for each. However, you need to select the name for the elemennt inside of this, which will actually change. For this website, the div with the class “.dropdown__container” is what will actually be moving. For that reason, your selector will be “.main-nav__dropdown\[aria-expanded="false"\] .dropdown__container \{ … \}”. there are a few things you should do
* you will want to set the aria-expanded false to transform: translateY(-150%); This ensures that the dropdown will be 150% higher than it starting value(which you set up in step 2). it is now above the viewport, and therefore, will not be visible when the aria-expanded value is false.
* you will want to set the aria-expanded false to transform: translateY(0%);. This ensures that when the aria-expanded value is true, the menu will be positioned where you set it up in step 2

4. You will also need to format the \<span\> elements that are inside the \<button\> element. To do this, you need to give both a few setting
* set both to display: block;. if you do not do this, they will have any height, which will prevent you from adding a border.
* set both to border-bottom: solid 2px colorvalue;.
* set the margins above and below them so that they are spaced corectly between each other.

5 You will usually only have a dropdown when the screen width is too narrow to comfortably fit all main navigation items horizontally into the masthead. For that reason, you will want to set up a media rule for this. it is best practice to put these at the bottom of the stylesheet. For this project, the menu switches from dropdown to static when the screen is 1200 pixels wide. to set the media rule up this way, you will type @media (min-width: 1200px) \{…\}. Any css settings you put between these angle brackets will be applied only when screen width is 1200 pixels or wider. within this rule, you will need to two things:
* set main-nav__dropdown to display: none;. This will make this, and everything else nested inside it invisible, and it will act like it does not exist.
* set main-nav__static to display: block;. This ensure that as long as your screen width is above 1200 pixels, you are undoing the effect that made the static navigation invisiable in the first place.

# Adding your JavaScript
Your javacsript file with have the extension .js. To link this to your html file, simply copy and paste \<script src="filename.js"\>\</script\> inside your body element. This should be the last element inside the body. 

There are a few things you need to do:

# Adding your Event Listener

The first thing you need to do is add an event listener. The event listener means that your script will “listen” for something specific to happen, and when this specific thing happens, it will trigger a funcution. This is what the event listener should look like. It is important to explain now that JavaScript is case sensetive, so if you use this exact code and it does not seem to be working, you may want double check letter cases
![event-listener](/images/event-listener.png)
I want to quickly explain what each part is this is doing.

1. document. My understanding is that this keyword is essentially telling the JavaScript file to search for all necessary information inside a given web page. If you do not start with the word document, the script will not know where to look for any information

2. .getElementsByClassName("main-nav__toggle"). This is telling the javascript that within the document, it needs to search for an element with the class name “main-nav__toggle”. 

3. [0]. When you use a the method .getElementsByClassName, the javascript will create a nodelist. This means that  multiple html elements can share this class name, so the javascript will put them examples of this class name into a list. The first example of this class name is labeled “0”, the second one is labeled ”1”, the third example of this class name is labeled ”2”, and so one. In this example, there is only one html element with that class name, but the javascript will still return a nodelist, and therefore, you still need to specificy which example of this class the script needs to listen too. This is showed with the number value of the methods, which is 0 since this is the only example of this class in the html file, inside squre brackets. There should be no space between the .getElementByClassName() method and the number value of the specific element.

4. .addEventListener("click", function(toggleDropdown) \{…\});. This is telling the JavaScript to listen for something happening inside the classname “main-nav__toggle”, which is inside the document. This is also where you are telling the JavaScript file to listen to something specific, what you are telling it what to listen for, and what you want it to do when it hears it. There are several parts of the event listener.
* "click". This is the event the script is listening for. there are several possbile values for this, depending on what kind of interaction with this button you want to have. we are using click, because we want the script to activate only when we click the button (as opposed to hovering over it, or something else of that nature).
* function(toggleDropdown). This is telliing the JavaScript to create a function called toggleDropdown, and to call this function every time it hears the click event.
* \{…\}. This is this is where you actual function will go. Essentialy, it means that when the event listeners is activated, all the code inside the curly brackets will activate.

# Building your function that is activated by your event listener

There are a few steps for this.

1. Create any variables you will need. A variable is essentially just the information that is going to be applied to your function. to create a variable, you start by calling the keyword “var“, followed the name you are going to give the variable, followed by “=”, followed by the value you are assigning to the variable. I created three different variables for this function:
* var toggleSwitch = document.getElementsByClassName("main-nav__toggle");. This means you are creating a variable named “toggleSwitch”, and you are assingning it the value of any html element with the classname “main-nav__toggle”.
* var selectContainer = toggleSwitch[0].closest(".main-nav__dropdown");. this calls the variable “toggleSwitch”, with the nodelist number [0]. .closest(".main-nav__dropdown") means that the variable is calling the closest parent of the main-nav__toggle element with the classname main-nav__dropdown. so, essentially, the closest() method searches the elements nested around (not inside) main-nav__toggle until it finds the one you tell it to look for.
* var checkAria = selectContainer.getAttribute("aria-expanded");. This means that for the value of this variable, you are calling the variable selectContainer. within the element that it is selecting, you are looking for the value of a specific attribute using the method .getAttribute(). putting aria-expanded inside the perinthises means that this method will return the value of the aria-expanded attribute.

This is what you javacsript should look like now.

![variables](/images/variable.png)

# add an if/else statement

The final step to adding your javascript is to create an if/else statement. this just means that, in layman's terms, if conditions are favorable, the statement will do one thing, and if the conditions are not favorable, the statement will do something else. There are two steps to creating an if/else statement

1. create the if part of the if/else statement. there are three parts to this.
* Start by calling the keyword “if”. this is just the word that indicates that this is the “if” part of the if/else statement.
* inside perinthesis, you will add the condition. if this condition is true, a certain script will activate. For this, you are going to check the value of the checkAria variable. That variable will return the current value of the aria-expanded html attribute. Following that variable name, add “===”. This means you will check to see if the checkAria variable has the same value as what is next. The final thing to add to this condition is "false". the word false must be inside quotation marks or this will not work. What this condition means is that if the checkAria variable returns “false”, and therefore is equal to “false”, the condition is true, and the if statement will trigger.
* The final step for setting up the if part of the if/else statement, is telling the script what to do if the condition is true. you will do this by following the condition by a pair of curly braces, and inside the braces, you will add the code “selectContainer.setAttribute("aria-expanded", true)”. This means that it will call the variable selectContainer. the set-attribute() method lets you change the value of an attribute. to do so, first, you tell the script which attribute you will change the value of, inside quotation marks. in this case, you are changing the value of the aria-expanded attribute. Then, you specify the new value. in this case, the new value that will trigger is true. So, when this activates, the aria-expaanded value in the html document will change to aria-expanded="true". This will automatically trigger the css code, specififying what to do when the aria-expanded value is true.
At this point, you JavaScript code should look like this
![if image](/images/if.png)

2. The final step to creating the dropdown is to add the else part of the if/else statement. there are two parts to this.
* after the closing brace containing the code in the previous step, add the keyword “else”. This means that the following code will trigger when the if condition is not met. essentially, in layman’s terms, this means that if conditions are NOT favorable, the following code will trigger.
* After the keyword “else”, add some curly braces, indicating what will happen if, again to use layman’s terms, conditions are not favorable. Add the code selectContainer.setAttribute("aria-expanded", false) inside the curly braces. this just means that when this code triggers, you are changing the aria-expanded value to false, reverting the aria-expanded attribute to its original value.
This is how your completed JavaScript code should look
![full code](/images/full-code.png)

After you do all of that, your dropdown should open and close when clicking the toggle button
