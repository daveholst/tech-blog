# Holst Tech Blog: A Blogging platform / CMS built from the ground up

This is a blogging platform with a live deploy on Heroku with the following features.

- Session based Authentication with hashed passwords stored in database.
- Users can create accounts and login.
- Posts can be created, deleted and edited by the author.
- Comments can be created, deleted and edited by the author.
- Each user has a customized dashboard that allows them to manage their posts and comments.

## Table of Contents:

- [Live Deploy](#Live-Deploy)
- [License](#License)
- [Screenshots](#Screenshots)
- [Technology Stack](#Technology-Stack)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)

## Live Deploy

A live deploy of this app can be found on Heroku at: https://holst-tech-blog.herokuapp.com/

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the **MIT License**: https://opensource.org/licenses/MIT

## Screenshots

#### Animated Gif Screenshot:

![gif of tech blog](./assets/tech-blog.gif)

## Technology Stack

- heroku: https://www.heroku.com/
- JawsDB(mySQL): https://www.jawsdb.com/
- Bulma CSS: https://bulma.io/documentation/
- axios: https://github.com/axios/axios
- expressJS: http://expressjs.com/
- mysql2: https://www.npmjs.com/package/mysql2
- Sequelize ORM: https://sequelize.org/
- WesBos Linting Config: https://github.com/wesbos/eslint-config-wesbos

## Usage

This software needs access to a mySQL database for storage of persistent information. `./conf/connection.js` should be edited to reflect the settings of the chosen server. For local deployment/testing all database credentials should be stored in `.env`.

To use the program simply run the program from your preferred terminal and follow the prompts.

```bash
npm start
```

To prefill the database use the included seed files.

```bash
npm run seed
```

## Tests

No tests have been written for this software.

## Questions

If you have any further questions you can get in contact with the creator through the following methods:

- https://github.com/daveholst/
- dholst@glenholst.com.au
