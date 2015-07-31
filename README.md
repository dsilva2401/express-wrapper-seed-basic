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

#### *Auth*

URL | Method | Description | Success | Error | Body params (POST, PUT) | Query params
----|--------|-------------|---------|-------|-------------------------|-------------
*/auth/login/* | POST | Create new session | `person` | - | `{..} // credentials` | -
*/auth/logout/* | POST | Delete current session | - | - | - | -

#### *API*

URL | Method | Description | Success | Error | Body params (POST, PUT) | Query params
----|--------|-------------|---------|-------|-------------------------|-------------
*/api/person/* | GET | Get all persons | `[persons]` | - | - | -
*/api/person/123/* | GET | Get person with id 123 | `person` | - | - | -
*/api/person/* | POST | Register a new person | `person` | - | `{..} // person data` | full=(true/false)
*/api/person/123/* | PUT | Update person data | `person` | - | `{..} // person data` | -
*/api/me/* | GET | Get logged user data | `person` | - | - | -
*/api/me/* | PUT | Update logged user data | `person` | - | `{..} // person data` | -
*/api/geozone/* | GET | Get all root geozones | `[geozones]` | - | - | -
*/api/geozone/123/* | GET | Get all geozones from geozone 123 | `[geozones]` | - | - | -
*/api/geozone/* | POST | Create a root geozone | `geozone` | - | `{..} // geozone data` | -
*/api/geozone/123/* | PUT | Update geozone | `geozone` | - | `{..} // geozone data` | -
*/api/geozone/123/* | DELETE | Delete geozone | `1` or `0` | - | - | -
