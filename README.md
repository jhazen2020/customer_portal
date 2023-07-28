# Welcome to the Customer Portal

This repo (https://github.com/jhazen2020/customer_portal) houses the front end code for my resume project. This project was to demonstrate the ability to login securely, update a user's information and view other users' paginated data. This id done by using Auth0, react, javascript, css, and html. Currently this service uses Auth0 end points and the Users service (https://github.com/jhazen2020/users) that acts as the backend.

## Development setup

1. You will need to create an Auth0 account. @todo will create terraform for this so it's easy for someone.
2. Install nvm (node version manager). Install version specified in package.json.
3. Install Docker Desktop.
4. Install docker compose.
5. Copy the '.env.example' file to '.env'. Add variable values.
6. Run docker compose for the 'docker-compose.dev.yml'. docker-compose -f docker-compose.dev.yml up

## Future work

This repos still needs a lot of work:
1. Create unit tests.
2. Comments through the code.
3. Verify that the Auth token is appropriately updating.
4. Logout when inactive.



