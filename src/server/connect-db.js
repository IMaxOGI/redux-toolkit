const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Max:12345@cluster0.rytiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
