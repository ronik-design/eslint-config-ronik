# eslint-config-ronik [![Build Status](https://travis-ci.org/ronik-design/eslint-config-ronik.svg?branch=master)](https://travis-ci.org/ronik-design/eslint-config-ronik)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Ronik Design](http://www.ronikdesign.com) code style


## Install

```
$ npm install --save-dev eslint eslint-config-ronik
```


## Usage

Add the appropriate ESLint config to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint"
  },
  "devDependencies": {
    "eslint": "^2.9.0",
    "eslint-config-ronik": "^1.0.0"
  },
  "eslintConfig": {
    "extends": "ronik"
  }
}
```

Lint with

```sh
$ npm run lint
```
