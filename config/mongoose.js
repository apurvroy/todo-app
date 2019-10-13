const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TODO_List',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to DB'));
db.once('open',function(){
    console.log('successfully connected to the database');
});

module.exports=db;