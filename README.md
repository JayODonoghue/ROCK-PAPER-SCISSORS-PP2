# ROCK, PAPER, SCISSORS

<br/>

This version of the rock, paper, scissors game that everyone is familiar with and puts a fun variation on the classic. The fundamentals are the same, you either win lose or draw with every go. The user makes a choice and this then competes against the choice the computer has generated. There are only three choices so the odds aren't completely stacked against you. In this game the rock option is replaced with "the-rock", the paper option is replaced with "paper-airplane" and the scissors option is replaced with "Edward-Scissorhands". The winner is determined on who reaches 5 first. It is a true battle of the odds with the computer.

 <br/> 

![ROCK, PAPER, SCISSORS Game on various devices](assets/images/readme-images/amiresponsive-rock-paper-scissors-image.png)

[View Rock, Paper, Scissors live game on Github pages here](https://jayodonoghue.github.io/ROCK-PAPER-SCISSORS-PP2/)

---

## CONTENT


---

## User Experience (UX)  

 <br/>

### User Stories

<br/>

#### First Time Visitors Goals

* I want to play a game of rock, paper scissors against the computer.
* I want to make my selection and for the computer to randomly generate an opposing selection.
* I want the site to be responsive to my device.
* I want the site to be easy to navigate.

#### Returning Visitor Goals

* I want to see a display modal appear to inform who the winner of the game is.
* I want to be able to start a new game once a winner from the previous game is declared.

#### Frequent Visitor Goals

* I want to be click the header heading allowing me to return to the beginning.
* I want to be able to continue to play for no matter how long with the reassurance that the game will perform with consistency every time. 
 
<br/>

---

## Design

<br/>

### Colour Scheme

![Rock, Paper, Scissors Palette](assets/images/readme-images/rock-paper-scissors-coolors-palette.png)

<br/>

As there were images used as buttons and used for displaying the users/computers choice I chose to keep the colour scheme minimalistic. I added the radial gradient effect as to add a touch of styling without overwhelming the user. The splash of aquamarine is there in order for the site not to be completely made up of variants of white and black. The colour palette was created by using the [Coolors](https://coolors.co/) website.

<br/>

### Typography

<br/>

The following two fonts were picked as they complimented each other.

 * Sedgwick Ave Display. This is an informal type of text used for the headings typically - I feel it is a suitable font for games.
 * Montserrat is used for the remainder of the text areas. This is  sans-serif font.

<br/>

### Imagery

<br/>

 All images are taken from websites which are correctly credited in the credits section.

<br/>

### Wireframes

<br/>

Wireframes were created for mobile, the desktop is the exact same layout with just larger elements.

<br/>

Introduction page

![Opening page Wireframes](assets/images/readme-images/rps-opening-page-wireframe.png)

<br/>

Choice Container

![Main page Wireframes](assets/images/readme-images/rps-main-page-wireframe.png)

<br/>

Battle Container

![Battle page Wireframes](assets/images/readme-images/rps-battle-page-wireframe.png)

<br/>

Welcome Modal

![Welcome-modal Wireframes](assets/images/readme-images/rps-welcomeModal-wireframe.png)

<br/>

Result Modal

![Result-modal Wireframes](assets/images/readme-images/rps-resultModal-wireframe.png)

<br/>

### Features

<br/>

The website is made up of the intro page, the games-area which includes the choice container and the battle container along with modals that appear under certain scenarios. 

<br/>

* All pages are responsive and have:

  * A favicon in the browser tab.

  ![Favicon](assets/images/readme-images/favicon-top-of-browser-image.png)

  <br/>

  * A heading/title which contains a link returning to the intro page and resetting the scores. 

  ![Heading Feature](assets/images/readme-images/heading-image.png)

  <br/>

  * A pointer cursor will display when hovering a button.

<br/>

  * A footer which contains a link to the github repository for this site. This links is shown as icons to give a cleaner more modern look.

  ![Footer Feature](assets/images/readme-images/footer-feature-image.png)

<br/>

* The Intro Page has:  
  * The intro page includes the header which has the title in it along with a container made up of a backgrounf image of a circle of arrows and then positioned on that circle is the 3 player options the user can pick. The rock, Edward Scissorhands and a Paper Airplane. Underneath this container these images is a button to start the game. This launches you to the game section along with the welcome modal pop up. At the bottom is the footer with the github link.

  ![Intro Page](assets/images/readme-images/intro-page-features-image.png)

  <br/>
 
 * The Welcome Modal has:  
   * This modal appears to give a very brief synopsis of how the game works. At the bottom of the modal there is a button to continue to the choice container.

   ![Welcome Modal](assets/images/readme-images/welcome-modal-feature-image.png)

<br/>

* The Game area is made up of the choice container and the battle container:  
  * The constant in both of these are that the score is visible aling with the header and the footer.

<br/>

 * The Choice Container has:  
   * This container has the score available at the top along with the header which is clickable and brings you back to the intro page. It also has the exact same background image and images of the rock, scissorhand and the paper airplane as the intro page however these images now act as buttons that rotate once hovered over. There is also a little box giving a brief instruction on what to do. Underneath the instruction box there is a one liner stating that the first to 5 is the winner.

   ![Choice Container](assets/images/readme-images/choice-container-feature-image.png)

   <br/>

 * The Battle Container has:  
   * This container has the score available at the top along with the header which is clickable and brings you back to the intro page. It also has the users choice vs the computers choice with the result message underneath along with a button to continue to the next. Once someone reaches a score of 5 the results modals are called.

   ![Battle Container](assets/images/readme-images/battle-container-feature-image.png)

   <br/>
 
 * The Winner / Loser Modal has:  
   * This modal appears to give a result on whether the user is a winner/loser. At the bottom of this modal is a button that redirects you back to the choices container with the scores reset to 0.

   ![Winner / Loser Modal](assets/images/readme-images/result-modals-features-image.png)

   <br/>

* Future Implementations:
  * Add the ability to create a username.
  * Add the ability to play online with others.
  * After the user makes his choice an animation of some sort could be added to create the two choices fighting each other.
  * Add more animations and variations to the transitions between containers etc.

<br/>

### Accessibility

I have achieved a high level of accessibility by using the following:

* Using aria-labels.
* Ensuring there is a clear colour contrast throught the site. Initially the colour contrast for the font colours I had chosen was not defined enough however by adding a text shadow to the items it provides a clear contrast.
* Using semantic HTML.

<br/>

---

<br/>

## Technologies Used

<br/>

### Languages Used

<br/>

* HTML
* CSS 
* JavaScript

### Frameworks, Libraries & Programs Used

<br/>

* Balsamiq - This was used to create the wireframes.
* Git - This was used for version control.
* Github - This was used to save and store all the files for the website.
* Font Awesome - This was used for the icons in the website.
* Google fonts - This was used to import the fonts used for the website.
* Google Dev Tools - This was used to test different code and features.
* Am I Responsive - This was used to show the website on a variety of different screens.

<br/>

---

<br/>

## Testing

<br/>

### HTML Validator

<br/>

The HTML Validator was used on every HTML aspect of the project.

<br/>

![HTML Validator Report](assets/images/readme-images/html-validator-image.png)

<br/>

### CSS Validator

<br/>

The CSS Validator was used on every CSS aspect of the project.

<br/>

![CSS Validator Report](assets/images/readme-images/css-validator-image.png)

<br/>

### JavaScript Validator

<br/>

JS Hint was used on every JavaScript aspect of the project.

<br/>

![JS Hint Report](assets/images/readme-images/js-hint-image.png)

<br/>


### Lighthouse

<br/>

I used the Lighthouse feature in the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

<br/>

![Lighthouse Results](assets/images/readme-images/lighthouse-results-desktop-image.png)

<br/>

### Solved Bugs

<br/>

1. When adding eventt listener for possibleChoices in JavaScript, there was an error showing on the console. This was due to my loop being an 'in' loop rather than an 'of' loop and after altering this the error displaying on the console was eradicated. 

![possibleChoice Bug](assets/images/readme-images/best-practices-image-2.png)

<br/>

2. When creating the playerChoice and computerChoice switch case I could not get the choice to replicate the image of their choice. However after using Dev Tools I was able to test certain variables and needed to alter some code to include children in completing my statements.

3. When creating the modals I was unsure on how to get the pages to transition etc. This reulted in fade in and out classes being added but to no avail. However after reading anf using the code for W3 School the modals worked perfectly.

4. When creating the function for the game to end once the player or computer reaches a score of 5 I used innerHTML = 5. However after further investigation I realised the numbers were being logged as strings so once the innerHTML was change to innerText and the value 5 was change to a string "5" the function worked correctly.

<br/>

### Known Bugs

<br/>

I have no unresolved bugs.

### Full Testing

* The site was fully tested using a range of browsers (Google Chrome, Safari, Firefox).
* The site was fully tested using a range of devices (DELL Large Screen Monitor, ASUS Laptop, iPhone 13, iPhone 7, Huawei P40 and Samsung S8)
* The site was fully tested using Chrom Dev Tools to test the responsiveness on different screen sizes. Dev Tools was also used to use to test reults to the console.
* The link in the game was fully tested. The link worked as expected. All internal links leading to the relevant page and all external links leading to a new tab.
* All buttons were tested ensuring that once activated they completed the correct function.

<br/>

### Testing Users Stories

<br/>

`First Time Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to play a game of rock, paper scissors against the computer. | The site is fun way to play this game and is available to use whenever the user wishes. |
| I want to make my selection and for the computer to randomly generate an opposing selection. | There are functions created for this action to take place. So all the user has to worry about is making their own choice while the computer does the rest. |
| I want the site to be responsive to my device. | This site has been developed to be responsive on all screen sizes. |
| I want the site to be easy to navigate. | This game takes a minimalistic approach in terms of content however this is purposely done as to not distract the user and to focus solely on the actual game aspects. Buttons are used for easy navigation through the site. |

`Returning Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
| I want to see a display modal appear to inform who the winner of the game is. | A function was created to determine the winner once either the player or the computer reached 5. Once this happened a modal would appear to inform the user who the winner is. |
| I want to be able to start a new game once a winner from the previous game is declared. | Once the winner is displayed on the modal there is a button on the bottom giving the user an option to start a new game. |

`Frequent Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to be click the header heading allowing me to return to the beginning | An event listener was added to the h1 heading to incorporate a click event. This reults in the user being able to click on this heading and refreshing the game bringing you back to the intro page with the scores reset to 0. |
| I want to be able to continue to play for no matter how long with the reassurance that the game will perform with consistency every time. | This game will repeat the process of starting a new game once the user wishes to do so for as many times and with each function working correctly each time. |

<br/>

- - -

 ## Deployment & Local Deployment

<br/>

  ### Deployment

<br/>

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in/Sign Up to Github.
2. Find the ROCK-PAPER-SCISSORS-PP2 repository.
3. Go to Settings > Pages.
5. In the Source section, choose Main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

<br/>

### Local Deployment

<br/>

#### How to Clone

<br/>

1. Log in/Sign Up to Github.
2. Find the ROCK-PAPER-SCISSORS-PP2 repository.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

<br/>

--- 

<br/>

## Credits

### Layout
* The layout of the site was established by me. 
* The layout of this readme file is based off my previous projects readme.

<br/>

### Content 
* The content was written by Jay O'Donoghue. 

<br/>

### Code
* I watched a tutorial by [Code with Ania Kubów](https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=925s) which may include some general ideas that I was able to replicate to my own standard .
* I was influenced by the Love Maths project by Code Institiute for the scores area. I used and altered the code for my project.
* I used the W3 Schools code for the modals including the animations css effects etc. The code is available here [Modals - W3 School](https://www.w3schools.com/howto/howto_css_modals.asp).
* I used code from [Scaler - Topics](https://www.scaler.com/topics/image-button-in-html/) to create the 360 degree rotate effect on the button elements in the choice container.
* I learned how to do the text shadow from a thread on Stack Overflow and adjusted the code to suiit my style for the site.
* I used MDN Web docs to research information on radial gradients and again adjusted to code to suit my style for the site.

<br/>

### Media 
* [Background image - circle with arrows](https://www.pinterest.com/pin/857865429008551970/).
* [Paper - airplane image](https://www.cleanpng.com/png-airplane-paper-plane-dotted-line-909837/download-png.html).
* [Edward - Scissorhands image](https://www.closerweekly.com/posts/edward-scissorhands-movie-facts-113319/).
* [The rock image](https://cdn.bleacherreport.net/images/team_logos/328x328/the_rock.png).
* [Favicon](https://www.flaticon.com/free-icons/rock-paper-scissors).

### Acknowledgements
* I would like to thank my mentor Chris in guiding me in the right direction and helping whenever I had a query.
* I would like to thank the people who reviewed my code in peer-code-review on Slack.
* I would like to thank the tutor support people who answered all the queries I had throughout the project.
* I would like to thank the cohort lead and the cohort Facilitator on checking up and keeping everyone on schedule.

