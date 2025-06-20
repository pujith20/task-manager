import app from "./app";
import "reflect-metadata";

import { AppDataSource } from "./config/ormconfig";

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Data Source has been initialized!");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization", err);
  });
