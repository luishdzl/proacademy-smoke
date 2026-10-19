// Minimal production server mirroring the real project's setup.
// Passes every request through the @astrojs/node standalone handler.
process.env.ASTRO_NODE_AUTOSTART = "disabled";

import http from "node:http";

const { handler } = await import("./dist/server/entry.mjs");

const server = http.createServer(handler);

const port = process.env.PORT ? Number(process.env.PORT) : 4321;
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
  console.log(`[server] Listening on http://${host}:${port}`);
});
