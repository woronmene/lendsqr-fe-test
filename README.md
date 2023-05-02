<h1 align="center">Welcome to lendsqr-fe-test 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> lendsqr frontend test

### ✨ [Demo](https://mene-oritsemiworon-lendsqr-fe-test.netlify.app/)

# LendSqr Front end Project

## Installation

```bash
npm create vite@latest --template react-ts
npm run dev
npm install sass
```


```bash
git clone https://github.com/woronmene/lendsqr-fe-test
npm install
git checkout <branch-name>
```

To see all the project branches remotely run the code:

```bash
git branch -r
```

Note: Git must be installed for commands to work. Check if Git is installed with the command `git --version`. If it is already available on PC the version will show up. If you get an error, [download and install Git](https://git-scm.com/downloads) on your PC.

## Techstack

Technology used are:

- React
- TypeScript
- SCSS
- React Router
- Netlify

## Project Description

 The project is a mirror image of the Figma design, Feel free to compare side by side, and see for yourself the level of attention to detail that has been put into this project. The features are:


1.) The project dashboard or users page shows users detail on a table. Most relevant data displayed in the users page are:

- Organization
- Phone Number
- Email
- Username
- Status
- Date Joined

The API for the users is shown below:

```txt
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/
```
Paste it on your browser search bar or any API platform like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), etc. to get the full data.

2.) Full responsiveness with an amazing mobile experience.



3.) The project has a couple of components listed below:


- Button
- Login Form
- User Table
- Navbar
- Sidebar
- Pagination
- User Tier
- Badge
- Inputs
- User Detail
- Pagination

4.) The user detail page contails all detail of a specific user based on the id. It also has detailed information of the guarantor like the name, phone number, email, and relationship with the user. You can get the API as shown below:

 ```txt
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id
```

Paste it on your browser search or any API platform like Postman, Insomnia, etc. to get the full data.
Based on the current id, it is between `1 to 100`. That is replace `:id` to any number between 1 to 100.


## Usage

- Open the application in your browser. The first screen you will see is the login page.
- Enter your login credentials and click the "Login" button to log in.
- Once you are logged in, you will be taken to the user page. Here, you will see a list of all users in a paginated format.
- To see more details about a specific user, click on the "more" icon next to the user's name.
- Note how quickly the user details show up, the loading state is almost unnoticeable.
- In the dropdown menu, click on "View User Details" to see more information about the user.
- The project is fully responsive, so you can use it on any device, from desktops to smartphones. Enjoy!


## Issues

Due to a conflict with the new version of react-router-dom, I was not able to write tests for the project. Specifically, the useNavigate hook in react-router-dom always throws an error during testing, even though it works fine in the project itself. I am currently investigating this issue, and any assistance in resolving it would be greatly appreciated.




## Design

Click the [link to get the Figma design](https://www.google.com/url?q=https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend&sa=D&source=editors&ust=1673861562837685&usg=AOvVaw13_5gDNbAIEaae_KDWvVyu)





---

Happy Coding! 😊
