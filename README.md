# Express Wrapper seed

Setup
--------

```bash
git clone https://github.com/dsilva2401/express-wrapper-seed my-app
cd my-app
npm install
node app.js
```

Database
--------

Basic tables *(src/models/index.js)*

![Database](docs/db.jpg)

Services
--------

Basic services *(src/routes/index.js)*

#### *API*

URL | Method | Description | Success | Error | Body params (POST, PUT) | Query params
----|--------|-------------|---------|-------|-------------------------|-------------
*/api/person/* | GET | Get all persons | `[persons]` | - | - | -
*/api/person/123/* | GET | Get person with id 123 | `person` | - | - | -
*/api/person/* | POST | Register a new person | `person` | - | `{..} // person data` | full?(true/false)
*/api/person/123/* | PUT | Update person data | `person` | - | `{..} // person data` | -
