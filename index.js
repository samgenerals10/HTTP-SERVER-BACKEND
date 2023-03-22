const http = require("http");

const handlAllRequest=(req,res) => {
    const url = req.url;
    res.setHeader("Content-Type", "text/html");

    if (url === "/"){
        res.write("<h1>This is my first backend lesson</h1>");
    }

    if (url == "/with"){
        res.write("<h1>with node js / Http</h1>")
    }

    if (url == "/at"){
       res.write("<h1>Codetrain Africa</h1>")       
    }

    else if (url == "/contact"){

        res.write("<h1>0269 456 789</h1>")
    }

    res.end();
};

const server= http.createServer(handlAllRequest) 

server.listen(4000,()=>{
    console.log("Now server started,you can start your request");
})