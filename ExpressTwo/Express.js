const express=require('express');
const app = express();
const admin = express();
// const user = express();

// -----------locals-------
// app.locals.title = "Hello Developers...";
// app.locals.name = "Nasifa Talukder...";

// app.get('/',(request,response)=>{
//     console.log(app.locals.title,app.locals.name)
//     response.send("This Is Home Page....!")
// })
// --------mountpath and Route---------
// app.get('/',(request,response)=>{
//     response.send("This Is Home Page....!")
// })

// --------Event----------
// admin.on('mount',function(parent){
//     console.log("admin Mounted");
//     console.log(parent);
// })

// --------mountpath and Route---------
// admin.get('/',(request,response)=>{
//     console.log(admin.mountpath)
//    response.send("This Is Admin Page....!")
// })
// user.get('/',(request,response)=>{
//     console.log(user.mountpath)
//     response.send("This Is User Page....!")
//  })

// -----------Methods-------
// admin.get('/',(request,response)=>{
//     console.log(admin.mountpath)
//    response.send("This Is Admin Page - get method....!")
// })
// admin.post('/',(request,response)=>{
//     console.log(admin.mountpath)
//    response.send("This Is Admin Page - post method....!")
// })
// admin.delete('/',(request,response)=>{
//     response.send("delete Method....")
// })
// ----------------------------
// app.enable("case sensitive routing");
// app.disable("case sensitive routing");
//  app.enabled("case sensitive routing");
// app.disabled("case sensitive routing");

// --------------------------
// app.set("name","Nasifa");

// admin.get('/',(request,response)=>{
//     console.log(app.get("name"))
//        response.send("This Is Admin Page")
//     })

// --------------Path-------------
// admin.get('/',(request,response)=>{
//        console.log(admin.path())
//        response.send("This Is Admin Page")
//     })

// ---------All() Method-------
// admin.all('/',(request,response)=>{
//     response.send("All Method....")
// })

// ----------Param-----------
// admin.param('id',(request,response,next,id)=>{
//     const userDetails ={
//         userId:id,
//         userName:"Nasifa",
//         UserAddress:"CPI",
//     };
//     request.userData = userDetails;
//     next();
// })

// admin.get('/user/:id',(request,response)=>{
//      console.log(request.userData);
//        response.send("This Is Admin Page")
//     })
// ----------------Route---------------
// admin.route('/adminpannel')
//      .get((request,response)=>{
//        response.send("This Is Admin Page..")
//     })
//      .post((request,response)=>{
//         response.send("This Is Register Page..")
//      })

// ------------------Engine---------------------------

app.set("view engine","ejs");
admin.route('/')
     .get((request,response)=>{
       response.render('index')
    })
     .post((request,response)=>{
        response.send("This Is Register Page..")
     })
    
app.use('/admin',admin);
// app.use('/user',user);

app.listen(5000,()=>{
    console.log("Server is running........")
})