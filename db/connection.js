//const mongoose = require('mongoose')


//const connectionString = process.env.MONGODB_URI || "mongodb://localhost/covid19-tracker";


//mongoose.connect(connectionString)
// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/<db-name>');
  }
  mongoose.connection.on('error', err => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    } 
  );
  mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB!");
  }); 
 //   .then(() => {
 //       console.log('Connected to mongo successfully!')
 //   })
 //   .catch((err) => {
 //       console.log('Failed to connect to mongo')
//      console.log(err)
 //   })

//module.exports = mongoose