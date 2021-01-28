const mongoose = require("mongoose");
const db_url = process.env.DB_URL;

mongoose
  .connect(db_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(console.log("Db connected...."))
  .catch((err) => {
    console.log(err);
  });
