const mongoose = require('mongoose');

const URI =
  'mongodb+srv://<username>:<password>@cluster0-p2yvx.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
