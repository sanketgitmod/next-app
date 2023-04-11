const mongoose = require("mongoose");

connect().catch((err) => console.error("failed to connect...", err));

function connect() {
  return mongoose.connect(process.env.MONGO_URL);
}

export default connect;
