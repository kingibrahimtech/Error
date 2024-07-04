
[Tap here to watch a tutorial on how to deploy]


# Steps on how to deploy on github

## 1. copy this 👇👇 to your keyboard

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start

      

## 2. Tap on ACTION then tap on (Set up a workflow yourself) and paste that file that you have copied on the keyboard then commit changes.

## 3. Go back to (config.js) then copy you session there and your done.... Just waiting for sometime then your bot will start working..
