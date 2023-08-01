# Welcome to the Customer Portal

This repo (https://github.com/jhazen2020/customer_portal) houses the front end code for my resume project. This project was to demonstrate the ability to login securely, update a user's information and view other users' paginated data. This id done by using Auth0, react, javascript, css, and html. Currently this service uses Auth0 end points and the Users service (https://github.com/jhazen2020/users) that acts as the backend.

## Development setup

1. You will need to create an Auth0 account. @todo will create terraform for this so it's easy for someone.
1. Install git. 
1. Install nvm (node version manager). Install version specified in package.json.
1. Install Docker Desktop.
1. Install docker compose.
1. Copy the '.env.example' file to '.env'. Add variable values.
1. Run docker compose for the 'docker-compose.dev.yml'. docker-compose -f docker-compose.dev.yml up

## Future work

This repos still needs work:
1. Create unit tests.
1. Comments through the code.
1. Verify that the Auth token is appropriately updating.
1. Logout when inactive.
1. Add CI/CD on merge.
1. Add tests to the CI/CD.
1. install serve or other SPA web server.  use yarn build, and new web server on .env port.
1. convert design to MUI (material ui) for consistent UI look.
1. Add server side errors to show in the Toast errors. Server side validation for phone is more specific since it checks
   for a valid area code.
1. add redux for better state handling.



