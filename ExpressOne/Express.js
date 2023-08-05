const express=require('express');
const app = express();

// app.use(express.json());
//  app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public/`,{
//     index:"index.html"
// }));

const router = express.Router();
app.use(router);

router.get('/',(request,response)=>{
    response.send("This Is Home Page....!")
})
router.get('/About',(request,response)=>{
    response.send("This Is About Page....!")
})

// app.get('/',(request,response)=>{
//     response.send("This Is Home Page....!")
// })
// app.get('/About',(request,response)=>{
//     response.send("This Is About Page....!")
// })
app.post('/Contact',(request,response)=>{
    // console.log(request.body.name);
    // console.log(request.body.toString());
     console.log(request.body);
    response.send("This Is Contact Page....!")
})

app.listen(5000,()=>{
    console.log("Server is running........")
})