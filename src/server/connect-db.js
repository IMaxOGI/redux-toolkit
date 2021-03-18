const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nodejs:uoKRnQdVImD1r4Q1@cluster0.rkzwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
