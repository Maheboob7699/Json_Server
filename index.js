import jsonServer from "json-server";
import cors from "cors";  // Ensure CORS is included

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());  // Use CORS middleware
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`🚀 JSON Server is running at http://localhost:${port}`);
});
