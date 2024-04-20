# Web Scraping Group Assignment
## This project is a web scraping assignment for a group of students working on a crawler tool. Below are the details and instructions for setting up and using the project.


# Objective

The objective of this TypeScript (TS) assignment is to demonstrate web scraping techniques using Puppeteer to extract data from various websites.

# Technologies Used
- Node.js
- TypeScript (TS)
- Puppeteer


# Description
This TypeScript (TS) script utilizes Puppeteer, a Node library, to scrape data from different websites. It employs headless browsing and request interception to optimize resource usage and bypass security measures.

The script performs the following tasks:

1. Launches a headless browser instance using Puppeteer.
2. Navigates to multiple websites to extract specific data.
3. Filters out unnecessary resources to improve efficiency.
4. Saves the extracted data to a text file in an organized and meaningful manner for human read.


# Project Structure
crawler/: Project folder.
dist/ : Contains the compiled JavaScript file (scrap.js) after compilation.
package.json: Project metadata and dependencies.
posts.txt: Text file to store scraped data.
README.md: Documentation file (this file).
scrap.tsx: TypeScript file for the web scraping logic.
tsconfig.json: TypeScript configuration file.

# Installation
1. Clone the project repository to your local machine. (if you are accessing this from github)
2. Navigate to the project directory in your terminal.
```shell
cd path/to/crawler

```

3. Install dependencies using npm.
```shell
npm install
```


# Running the Project

1. Compile the TypeScript file to JavaScript using TypeScript Compiler (tsc).

```shell
tsc scrap.tsx

```

This will generate the compiled JavaScript file scrap.js in the dist/ folder.

2. Run the compiled JavaScript file.

```shell
node dist/scrap.js

```

This will execute the web scraping script and write the scraped data to posts.txt.

## Usage
__The scrap.tsx file contains the web scraping logic using Puppeteer.__
__The posts.txt file stores the scraped data.__
__Modify the scrap.tsx file to adjust the scraping logic as needed.__
__Run the project to fetch data from specified websites and store it in posts.txt.__
__Feel free to reach out if you need further assistance!__