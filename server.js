// JavaScript source code
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const adminRoutes = require("./routes/admin");
const employeeRoutes = require("./routes/employee");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/employee", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

