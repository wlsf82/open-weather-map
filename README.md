# Open Weather Map Tests

Sample project to test the [Open Weather Map API](https://openweathermap.org/api) using [Cypress](https://cypress.io).

![Cypress tests](https://github.com/wlsf82/open-weather-map/actions/workflows/ci.yml/badge.svg)

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.19.2` of Node.js and npm, respectively. I suggest you use the same or later LTS versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> First, copy the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and update it accordingly.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open the Cypress App and run the tests in interactive mode.

### Test results summary

After running the tests in headless mode, you should have a summary like this:

```sh
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  openWeatherMap.cy.js                     00:01        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:01        2        2        -        -        -
```

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
