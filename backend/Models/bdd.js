// Do not forget to store your new request module in a variable in order to use it
const mongoose = require('mongoose');

// useNewUrlParser ;)
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

mongoose.connect('mongodb+srv://antoniockt:cooki123@cluster0-qpjbh.mongodb.net/ecomap',
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('Database ecomap connection OK');
     }
    }
);

module.exports = mongoose;