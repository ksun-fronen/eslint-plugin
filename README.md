# eslint-plugin-mine

個人用なeslint-config

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-mine`:

```sh
npm install eslint-plugin-mine --save-dev
```

## Usage

Add `mine` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mine"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mine/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


