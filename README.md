# State-Redux-Store-
# E-Commerce Platform with Redux

# Overview
This is an e-commerce platform that has been refactored to use Redux for managing global state. The project originally used React's Context API, but it has been updated to leverage Redux for more scalable and efficient state management.

# Features
Redux State Management: Global state is now managed using Redux, providing a centralized store for the entire application.
React Router: Navigation is handled using React Router v6 for a seamless single-page application experience.
GraphQL Integration: The application fetches product data through GraphQL queries, providing a flexible and efficient way to interact with the server.
Stripe Integration: The platform supports payment processing using the Stripe API, allowing users to make secure transactions.

# # Getting Started

# Clone the repository:

bash

git clone https://github.com/BellaLoc/State-Redux-Store.git

# Install dependencies:

bash

cd State-Redux-Store/client
npm install

cd State-Redux-Store/server
npm install

cd State-Redux-Store
npm install

# Run the application:

bash

cd server : npm run seed
&& npm run watch 

cd client : npm run build
&& npm run dev

Once the development server is running, you can access the application in your web browser. The server should be running at http://localhost:3001, and the client (React) should be running at http://localhost:3000.


# Redux DevTools
To debug and monitor the Redux state, make sure to install the Redux DevTools Extension in your browser. Open the extension and explore the actions, state changes, and more.

# Testing
Ensure thorough testing of your application. Use tools like Jest and React Testing Library to write unit tests for components, and test the Redux store actions and reducers.

bash
Copy code
cd e-commerce-redux/client
npm test
Deployment
Deploy your application to a hosting service like Heroku. Make sure to follow the deployment guidelines and update the engines field in the package.json file to specify the required npm version.

json
Copy code
"engines": {
  "npm": "7.x"
}
# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License 

