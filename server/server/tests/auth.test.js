const request = require("supertest");
const app = require("../index2.js"); // Replace with the path to your express app entry file

describe("Authentication routes", () => {
  // Test the POST /signup endpoint
  describe("POST /signup", () => {
    test("should create a new user and return a token", () => {
      const newUser = {
        username: "testuser1",
        password: "testpassword1",
        // Add other required fields for your user
      };

      const response = request(app)
        // .post("/api/auth/signup")
        .post("/auth/signup")
        .send(newUser);

      expect(response.statusCode).toBe(201); // Assuming 201 for Created
      expect(response.body).toHaveProperty("token"); // Assuming token is returned on successful signup
    });

    // Add more test cases as necessary, for example:
    // Testing with missing fields, with existing user data, etc.
  });

  // Test the POST /signin endpoint
  describe("POST /signin", () => {
    test("should authenticate an existing user and return a token", () => {
      const userData = {
        username: "existinguser",
        password: "existingpassword",
        // Add other required fields for your user if necessary
      };

      // You would typically seed the test user into the database before this test runs
      // Or use a mock if your controllers support it

      const response = request(app).post("/auth/signin").send(userData);

      expect(response.statusCode).toBe(200); // OK status
      expect(response.body).toHaveProperty("token"); // Check that a token is returned
    });

    // Add more test cases for invalid credentials, missing fields, etc.
  });
});

module.exports = {
  signupTest: (newUser) => request(app).post("/auth/signup").send(newUser),
  signinTest: (userCreds) => request(app).post("/auth/signin").send(userCreds),
};
