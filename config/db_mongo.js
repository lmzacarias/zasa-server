const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        (error, response) => {
            if ( error) {
                console.log(error);
            } else {
                console.log('Connected to MongoDB');
            }
        }
    )

}

module.exports = dbConnect;