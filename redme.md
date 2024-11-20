1. Check that "place order" button is enabled when correct data is filled then pop up message appears
2. When correct data is removed the button is disabled


List of locator:
Button "Place your order":  data-testid="submit-order"
Username field: data-testid="username"
Email field: data-testid="email"
OK pop up message: #popup-message

# Install the Faker.js library 
by running: npm install @faker-js/faker

# Run tests
npx playwright test

