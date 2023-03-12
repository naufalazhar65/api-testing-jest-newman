const newman = require('newman');

describe('GET request to fetch a list of users', () => {
  it('should fetch a list of users', (done) => {
    newman.run({
      collection: {
        "info": {
          "_postman_id": "7e4dcbcf-2d16-4e77-bd9f-4558dd84be3c",
          "name": "Reqres API Test"
        },
        "item": [
          {
            "name": "Get Users",
            "request": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "https://reqres.in/api/users?page=2",
                "protocol": "https",
                "host": [
                  "reqres",
                  "in"
                ],
                "path": [
                  "api",
                  "users"
                ],
                "query": [
                  {
                    "key": "page",
                    "value": "2"
                  }
                ]
              },
              "description": "Get a list of users"
            },
            "response": []
          }
        ],
        "protocolProfileBehavior": {}
      },
      reporters: 'cli'
    }, function (err, summary) {
      if (err) {
        done(err);
      }

      // Assertion to check the response status code
      expect(summary.run.failures.length).toBe(0);
      expect(summary.run.executions[0].response.code).toBe(200);

      // Assertion to check the response body
      const responseBody = summary.run.executions[0].response.json();
      expect(responseBody.page).toBe(2);
      expect(responseBody.per_page).toBe(6);
      expect(responseBody.data.length).toBe(6);

      done();
    });
  });
});

// POST

describe('POST request to create a new user', () => {
  it('should create a new user', (done) => {
    newman.run({
      collection: {
        "info": {
          "_postman_id": "7e4dcbcf-2d16-4e77-bd9f-4558dd84be3c",
          "name": "Reqres API Test"
        },
        "item": [
          {
            "name": "Create User",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "url": {
                "raw": "https://reqres.in/api/users",
                "protocol": "https",
                "host": [
                  "reqres",
                  "in"
                ],
                "path": [
                  "api",
                  "users"
                ]
              },
              "body": {
                "mode": "raw",
                "raw": "{\n    \"name\": \"morpheus\",\n    \"job\": \"leader\"\n}"
              },
              "description": "Create a new user"
            },
            "response": []
          }
        ],
        "protocolProfileBehavior": {}
      },
      reporters: 'cli'
    }, function (err, summary) {
      if (err) {
        done(err);
      }

      // Assertion to check the response status code
      expect(summary.run.failures.length).toBe(0);
      expect(summary.run.executions[0].response.code).toBe(201);

      // Assertion to check the response body
      const responseBody = summary.run.executions[0].response.json();
      expect(responseBody.name).toBe('morpheus');
      expect(responseBody.job).toBe('leader');

      done();
    });
  });
});


//   PUT

describe('PUT request to update user data', () => {
  it('should update user data', (done) => {
    newman.run({
      collection: {
        "info": {
          "_postman_id": "7e4dcbcf-2d16-4e77-bd9f-4558dd84be3c",
          "name": "Reqres API Test"
        },
        "item": [
          {
            "name": "Update User",
            "request": {
              "method": "PUT",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "body": {
                "mode": "raw",
                "raw": "{\n    \"name\": \"John Doe\",\n    \"job\": \"Software Engineer\"\n}"
              },
              "url": {
                "raw": "https://reqres.in/api/users/2",
                "protocol": "https",
                "host": [
                  "reqres",
                  "in"
                ],
                "path": [
                  "api",
                  "users",
                  "2"
                ]
              },
              "description": "Update user data"
            },
            "response": []
          }
        ],
        "protocolProfileBehavior": {}
      },
      reporters: 'cli'
    }, function (err, summary) {
      if (err) {
        done(err);
      }

      // Assertion to check the response status code
      expect(summary.run.failures.length).toBe(0);
      expect(summary.run.executions[0].response.code).toBe(200);

      // Assertion to check the response body
      const responseBody = summary.run.executions[0].response.json();
      expect(responseBody.name).toBe('John Doe');
      expect(responseBody.job).toBe('Software Engineer');

      done();
    });
  });
});


// DELETE

describe('DELETE request to delete user data', () => {
  it('should delete user data', (done) => {
    newman.run({
      collection: {
        "info": {
          "_postman_id": "7e4dcbcf-2d16-4e77-bd9f-4558dd84be3c",
          "name": "Reqres API Test"
        },
        "item": [
          {
            "name": "Delete User",
            "request": {
              "method": "DELETE",
              "url": {
                "raw": "https://reqres.in/api/users/2",
                "protocol": "https",
                "host": [
                  "reqres",
                  "in"
                ],
                "path": [
                  "api",
                  "users",
                  "2"
                ]
              },
              "description": "Delete user data"
            },
            "response": []
          }
        ],
        "protocolProfileBehavior": {}
      },
      reporters: 'cli'
    }, function (err, summary) {
      if (err) {
        done(err);
      }

      // Assertion to check the response status code
      expect(summary.run.failures.length).toBe(0);
      expect(summary.run.executions[0].response.code).toBe(204);

      done();
    });
  });
});
