# Template App

This project is a Nodejs application.

## Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- Node.js v16: You can use NVM (Node Version Manager) to install Node.js v16.

- Mongodb: Check if mongo database is install on your system. If not install from this link as per your operating system.
```bash
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
```

## Installation

### Installing Node.js v16 using NVM

1. Install NVM (Node Version Manager) by following the instructions at [NVM repository](https://github.com/nvm-sh/nvm#installation). Choose the installation method that is suitable for your operating system.

2. Once NVM is installed, open a new terminal window or restart your terminal.

3. Install Node.js v16 by running the following command:

   ```bash
   nvm install 16
   ```

4. Verify that Node.js v16 is installed by running the following command:

   ```bash
   node --version
   ```

   You should see the version number of Node.js v16.

### Installation

1. Install project dependencies by navigating to the project directory in your terminal and running the following command:

   ```bash
   npm install
   ```

2. Update the environemt. Ensure database credentials are correct.

3. To update the environemt variable. Perform Following Steps
   - Open config/default.json file
   - update connection value inside database object to your mongodb database.

4. Once the installation is complete, you can start the Ext Chrome application by running the following command:

   ```bash
   npm run start
   ```

   This command will start the development server and provide you with a local URL where you can access the application in your browser.