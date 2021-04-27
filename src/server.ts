import express, { response } from 'express';

const app = express();

app.get("/", (request, response)=>{
    return response.json({message: "Hello world"})
});


app.post("/", (request, response)=>{
    //recebeu os dados para salvar
    return response.json({message: "Os dados forma salvos!"});
})


app.listen(3333, () => console.log("Server is running!"));