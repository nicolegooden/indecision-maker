[![Contributors][contributors-shield]](https://github.com/nicolegooden/indecision-maker/graphs/contributors)
[![Forks][forks-shield]](https://github.com/nicolegooden/indecision-maker/network/members)
[![Issues][issues-shield]](https://github.com/issues)
[![Starred][stars-shield]](https://github.com/issues)

## Contributors
  - [Nicole Gooden](https://github.com/nicolegooden)
  - [Blake Donnelly](https://github.com/BlakeDonn)
  - [Orlando Murcio](https://www.github.com/atos20)

## Project Directions
[Indecision Maker](http://nicolegooden.github.io/indecision-maker)

## Overview

`Indecision Maker` takes the responsibility of choosing at-home activities away from the user.  The user can choose to find an activity via filling out a form, through which the user is prompted to select activities of interest and to answer all relevant questions about the activities.  When the form is submitted, the user will be redirected to a view that displays the suggested activity and its details.  The user can choose to participate in the activity or skip to see a different suggestion based on the filtered results.  Furthermore, the user can browse all of our available content from the homepage. 

## Context

`Indecions Maker` is a project built in eight days. As a team we had the opportunity to choose any technology to learn and implement in conjunction with `React`. The technology of our choosing was `PostgreSQL`, and `Knex`. We decided to create a backend server that would populate the data dynamically using other API's. A big win in our learning was to experiment with the `PostgreSQL` workflow to `migrate` tables and `seed` data.

#### Indecision Maker Server

  * To learn more about our process with `PostgreSQL`, visit the following link:

    [Indecision Server](https://github.com/Atos20/indecision-maker-server)

#### Technologies used:

  * PostgreSQL
  * Knex
  * React
  * Express
  * SCSS
  * Git
  * GitHub

## Challenges

  * Manipulating state
  * Organizing components
  * Data-flow within components
  * Architect consistent data
  * Working with new technologies
  * Back-end server testing
  * Back-end server deployment 

## Wins

  * Knex - postgreSQL workflow, migrating and seeding tables
  * Displaying proper data on the DOM
  * Styling using SCSS
  * Technical workflow

## Future Goals

  * Filter activitites by audience, e.g. family friendly
  * Create log in functionality using user authentication software
  * Add functionality to `<BrowsePage>` so the user can learn more about other activities without filling out the form
  * Add users' selections to prompts to local storage
  * Comment functionality
  * Create new activitties and add more data to existing activities
  * Feedback form for user experience - features POST request to our database

## In Action

#### Take 1

- When the user first interacts with the application, the app renders a welcome message that introduces the user to an existential question that makes us wonder about our own decisions. 

 - The user can interact with the navigation bar and browse the applcation's content such as music, movies, podcasts, card games and board games.

 <img src="https://media.giphy.com/media/8hg3zdbyxZStJMchtR/giphy.gif" alt="" height=100% width=80%/>

#### Take 2

- When the user clicks on the `find activity button`, the application's view changes to present the viewer with the `find activity form`. 

- When the user answers the questionnaire, the script collects the user's information and updates state in the parent component: `<App/>`, this way the algorithm handled by the parent will filter and randomize an actvity.

  <img src="https://media.giphy.com/media/cfc797PcomQaZdAfMo/giphy.gif" height=auto width=75%/>

#### Take 3

- `<Form>` component

The user's choices are saved in `state` and then used to filter the activities.

  <img src="https://media.giphy.com/media/x6zztuZgQp1m4tse2X/giphy.gif" height=auto width=75%/>

#### Take 4

**The `<ResultPage>` & `<DetailsPage>` component.**

- This component display to the user an activity selected by the script. At this point the user has two options:

    - The first `option` is to select the activity suggested by the application.

    - The second `option` is to skip the suggested activity and choose another one that randmoizes the next suggested activity.

<img src="https://media.giphy.com/media/Az8Rc9zwIFxFx5mXv6/giphy.gif" height=auto width=75%/>

### Set up

* On the top right corner of this page, click the **Fork** button.
- Clone the repository to your computer `git clone <URL>`
  - When you run git clone - git clone [remote-address] [what you want to name the repo]
  replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
- `cd` into the repository with the following command `cd <repo-name>`
- Run `npm install`
- Run `npm start` to run localhost:5000

### Contribute

- Create a new branch with `git checkout -b <new branch name>`
- Open your text editor and add or remove functionalities to the site.
- `git add` and `git commit -m "<your commit meessage>"` to save the changes to your local repository
- `git push` your changes
- Create a new pull request!

### Project Managers
- [Leta](https://github.com/letakeane)
- [Khalid](https://github.com/khalidwilliams)


[contributors-shield]: https://img.shields.io/github/contributors/nicolegooden/indecision-maker.svg?style=flat-square
[contributors-url]: https://github.com/nicolegooden/indecision-maker/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/nicolegooden/indecision-maker.svg?style=flat-square
[forks-url]: https://github.com/nicolegooden/indecision-maker/network/members

[stars-shield]: https://img.shields.io/github/stars/nicolegooden/indecision-maker.svg?style=flat-square
[stars-url]: https://github.com/nicolegooden/indecision-maker/stargazers

[issues-shield]: https://img.shields.io/github/issues/nicolegooden/indecision-maker.svg?style=flat-square
[issues-url]: https://github.com/nicolegooden/indecision-maker/issues








