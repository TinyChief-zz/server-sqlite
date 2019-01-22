# server-sqlite
Express server for CRUD using sqlite.

## Usage
Create `./config/keys.js` with next:
```
module.exports = {
  authentication: {
    jwtSecret: '<secret_word_for_jwt>',
    adminEmail: '<email>'
  }
}
```
