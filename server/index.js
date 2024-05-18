import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import authRoutes from "./src/auth/auth.routes.js";
import channelsRoutes from './src/channels/channels.routes.js';
import settingsRoutes from './src/settings/settings.routes.js';

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello from your server');
})

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelsRoutes);
app.use('/api/settings/', settingsRoutes)

const server = http.createServer(app);
connectDB();
server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});


