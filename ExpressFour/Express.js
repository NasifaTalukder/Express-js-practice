const express=require('express');
const app = express();

// -------------RESPONSE=PROPERTIES------------------

// --------------HEADERSENT-------------------
// app.get('/',(req,res)=>{
//    console.log(res.headersSent);
//    res.send("THIS IS HOME PAGE........!");
//    console.log(res.headersSent);
// })
// -------------------LOCAL---------------
// app.set("view engine","ejs");

// app.get('/',(req,res)=>{

//        res.render('index',{
//          Email:"nasifatldr36@gmail.com"
//        })
//     })
    
// -------------RESPONSE=METHODS------------------

// ------------------------SET--------------------
// app.get('/',(req,res)=>{
//    res.set('name','Nasifa Talukder');
//    console.log(res.get('name'));
//    res.send("THIS IS HOME PAGE........!");
 
// })
// -------------------------------
// app.get('/',(req,res)=>{
//    // res.json({name:"nasifa"});
//    // res.status(404).send("Status 404...");
//    // res.end('hiloooo...');
//    // res.sendStatus(500);
// })
// ----------------------FORMAT-------------------------
// app.get('/',(req,res)=>{
//   res.format({
//    'text/plain' () {
//       res.send('Hey How Are You ?')
//     },
//     'text/html' () {
//       res.send('<h1>Hello Codex..</h1>')
//     },

//     'application/json' () {
//       res.send({ name: 'Nasifa' })
//     },
//     default () {
//       res.status(406).send('Not Acceptable')
//     }
//   })
// })

// --------------------COOKIE AND LOCATION-------------------------
// app.get('/',(req,res)=>{
//    // res.cookie("name" ,"Nasifa",{domain:".codex.com",path: '/', secure: true });
//    // res.location('https://codexdevware.com');
//    res.send("THIS IS HOME PAGE........!");
// })

// --------------------------REDIRECT--------------------------
app.get('/',(req,res)=>{
   res.send("THIS IS HOME PAGE........!");
})
app.get('/contact',(req,res)=>{
   res.status(500).send("THIS IS CONTACT PAGE........!");
})
app.get('/about',(req,res)=>{
   res.redirect('/contact')
   res.send("THIS IS ABOUT PAGE........!");
})

app.listen(5000,()=>{
    console.log("Server is running........")
})























