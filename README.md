##

# **Cypress JavaScript Framework**

This framework provides an easy-to-use setup for automated testing using Cypress.

##

# **Prerequisites**

Before you begin, make sure you have the following software installed on your machine:

- **Git** : Git is a version control system that is used to manage the codebase for the framework. You can check if Git is installed on your machine by running the following command in the terminal:

```
  git --version
```

- If Git is not installed, you can download and install it from the [Git website](https://git-scm.com/downloads).
- **Node.js and npm** : Node.js is a JavaScript runtime that is used to run the framework, and npm is the package manager for Node.js. npm is installed with Node.js, so you only need to install Node.js. You can check if Node.js is installed on your machine by running the following command in the terminal:

```
  node -v
```

- If Node.js is not installed, you can download and install it from the [Node.js website](https://nodejs.org/en/download/).
- **Visual Studio Code (optional)**: Visual Studio Code is a popular IDE that is recommended for developing the framework. However, you can use any other editor of your choice. If you do not have Visual Studio Code installed, you can download and install it from the [Visual Studio Code website](https://code.visualstudio.com/download).

##

# **Installation and Building the Framework**

Follow these steps to install and build the framework on your machine:

1. **Create the Directory Structure**

- Create the following directory structure on your machine:

~/Workspace

\- [test automations]

- **Note**: **Make sure to replace** [test automations]\*\* with the actual test automation directories.

1. **Clone the Repositories** :

- Open a terminal and navigate to the `**/Workspace/web**` directory on your machine.

- Run the following command to clone the Test repository from GitLab:

```
  - `git clone [https://github.com/)`
```

- Replace `user`, `framework-repository`, and `[test-automations]` with the correct GitHub repository name, and test automation directory.
- This will download the latest version of the framework's code to the `**/Workspace/web/tests/[test-automation]**` directory on your machine.

2. **Install and Build the Framework** :

- Navigate to the root directory of the framework's repository on your machine.
- Run the following command to install the required dependencies and build the framework:

```
  npm install
```

- This command will install all the required dependencies for the framework using npm, and then build the framework using TypeScript.
- **Note:** This may take several minutes to complete.

3. **Verify the Installation** :

- Run the following command to verify that the installation and building was successful:

```
  npx cypress open
```

- The Cypress Test Runner window should open, showing the available test files.

- Click on a test file to run the tests and see the results in the Cypress Test Runner.
- If the tests pass, the Cypress framework has been installed and set up successfully.

##

# **Troubleshooting**

If you encounter any errors while installing and building the framework, try the following steps:

1. **Check Prerequisites** :

- Make sure you have the correct version of Java, Git, Node.js, and npm installed on your machine.
- If you are not sure about the versions, you can check them by running the following commands in the terminal:

```
  git --version
  node -v
```

- If any of the prerequisites are not installed or are an older version, you can download and install the latest versions from the websites mentioned in the Prerequisites section above.
- If Node.js or npm is not installed or is an older version, download and install the latest versions from the official Node.js website.

2. **Directory Structure** :

- Make sure that you have created the correct directory structure on your machine and cloned the repositories to the correct locations.
- You can check the directory structure by running the tree command in the terminal and verifying that the directories are in the correct location.

3. **Check Logs** :

- If you encounter any errors while installing or building the framework, check the logs for error messages.
- The logs may contain information about what caused the error and how to fix it.
- You can find the logs in the **logs** directory in the root directory of the framework's repository.

4. **Contact Support** :

- If you are still unable to resolve the issue, please contact the framework's support team for assistance.
