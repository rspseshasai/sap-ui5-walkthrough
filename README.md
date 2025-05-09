# SAP UI5 Walkthrough

This project is a step-by-step walkthrough of building an SAP UI5 application. It is designed to help developers understand the basics of SAP UI5, including its architecture, components, and best practices.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

SAP UI5 is a JavaScript framework for building enterprise-ready web applications. This project demonstrates how to create a simple SAP UI5 application, covering topics such as:

- Setting up the development environment
- Creating views and controllers
- Using models for data binding
- Implementing routing and navigation

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [UI5 CLI](https://github.com/SAP/ui5-cli) (install globally using `npm install -g @ui5/cli`)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rspseshasai/sap-ui5-walkthrough.git
   cd sap-ui5-walkthrough
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ui5 serve
   ```

4. Open the application in your browser:
   ```
   http://localhost:8080
   ```

---

## Usage

- Modify the `view` and `controller` files in the `webapp` directory to customize the application.
- Add new routes in the `manifest.json` file to enable navigation between views.
- Use the `models` folder to define and bind data models.

---

## Project Structure

```
sap-ui5-walkthrough/
├── webapp/
│   ├── controller/       # Controllers for views
│   ├── view/             # XML views
│   ├── model/            # Data models
│   ├── i18n/             # Internationalization files
│   ├── css/              # Custom styles
│   ├── manifest.json     # Application descriptor
│   └── index.html        # Entry point
├── package.json          # Node.js dependencies
├── ui5.yaml              # UI5 CLI configuration
└── README.md             # Project documentation
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

Happy coding!