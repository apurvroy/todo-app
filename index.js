const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(express.static('./assests'));

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views' , './views');


app.use('/',require('./routes'));


app.listen((process.env.PORT ||8000),function(err){
    if(err)
    console.log(`Error :${err}`);

    else
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    // console.log(`server is running on the port: ${port}`);
});