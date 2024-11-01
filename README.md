# Lumenai

## Overview

Lumenai is an AI-driven platform that allows you to outsource and automate your investment strategy development, portfolio management, trading, and reporting.

## Environments

This project has two possible environments for various stages of testing and development. They are as follows:

### 1. Development

Runs off `.env.development` and should connect to locally hosted test database.

### 2. Production

Live product. Uses `.env.production`. Is hosted internally by client.

## Running the project

### 1. Installation

Ensure you have node v21.\* installed. If you have [nvm](https://github.com/nvm-sh/nvm) installed on your machine, run the following command to do this for you:

```bash
nvm use
```

Then, run the following command to install all dependencies for the project.

```bash
yarn install
```

### 2. Environment variables

Duplicate the `.env.example` file found in the project's root and rename it `.env.development`. You will need to do the same to create a `.env.production` too. Ensure that all environment variables are set correctly by requesting them from a project admin.

### 3. Running development environment

Run the following command to spin up a localhost server for development.

```bash
yarn dev
```

## Project Links

[Github](https://github.com/TonyDamari/lumenai)
[Live Link](https://lumenai-three.vercel.app/)

## Recommended VSCode extensions

- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Gitlens

## Recommended settings in `.vscode` folder, `settings.json` file

```JSON
{
    "java.compile.nullAnalysis.mode": "automatic",
    "editor.tabSize": 2,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": "explicit",
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "java.configuration.updateBuildConfiguration": "automatic"
}


```
