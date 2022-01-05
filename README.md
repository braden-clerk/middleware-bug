## Middleware bug

Demonstrates how you can't read env vars inside of packages used in next middleware. I'm demonstrating using the clerk package -- but it's still a trivial example.

Run:

```bash
yarn

#

yarn dev
```

Open [http://localhost:3000/api/hello](http://localhost:3000/api/hello) in your browser to see the error.

Notes:

The code that is throwing this in the clerk package is:

```javascript
key = process.env.CLERK_JWT_KEY;
if (!key) {
  throw new Error("Missing jwt key");
}
```

Downgrade next to 12.0.4 to see that you no longer get the error.
