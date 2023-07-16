const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const app = express();
app.use(express.json());

// Mock user data
const users = [];

// Secret key for signing and verifying JWTs
const secretKey = "your-secret-key";

// Register a new user
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Create a new user
    const newUser = {
      username,
      password: hashedPassword,
    };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  });
});

// User login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the provided password with the stored hashed password
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT
    const payload = { username: user.username };

    const header = Buffer.from(
      JSON.stringify({ alg: "HS256", typ: "JWT" })
    ).toString("base64");
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
      "base64"
    );

    const signature = crypto
      .createHmac("sha256", secretKey)
      .update(`${header}.${encodedPayload}`)
      .digest("base64");

    const token = `${header}.${encodedPayload}.${signature}`;

    res.json({ token });
  });
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

// JWT authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  // Verify the token signature
  const [header, payload, signature] = token.split(".");
  const isValidSignature =
    crypto
      .createHmac("sha256", secretKey)
      .update(`${header}.${payload}`)
      .digest("base64") === signature;

  if (!isValidSignature) {
    return res.status(403).json({ message: "Invalid token" });
  }

  // Verify the token expiration
  const decodedPayload = JSON.parse(
    Buffer.from(payload, "base64").toString("utf-8")
  );
  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedPayload.exp && decodedPayload.exp < currentTime) {
    return res.status(403).json({ message: "Token expired" });
  }

  req.user = decodedPayload;
  next();
}

// Start the server
const port = 3000; // Set your desired port number
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
