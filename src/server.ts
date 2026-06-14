import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/database.js";

const PORT = process.env.PORT;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
