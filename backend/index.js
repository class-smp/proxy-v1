
const express = require("express");
const { uvPath } = require("@titaniumnetwork-dev/ultraviolet");
const { createBareServer } = require("@tomphttp/bare-server-node");
const { UVServer } = require("@titaniumnetwork-dev/ultraviolet");
const { readFileSync } = require("fs");
const path = require("path");

const app = express();
const bare = createBareServer("/bare/");
const uv = new UVServer();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use("/uv/", uv.app);
app.use(bare);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

const server = app.listen(PORT, () => {
    console.log("UltraViolet server running on port " + PORT);
});

bare.attach(server);
