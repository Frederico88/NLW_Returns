import express from 'express';
import { routes } from './route';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);




app.listen(3333, ()=>{
    console.log('Servidor rodando na porta 3000!');
})



//Get = Buscar informações
//Post = Cadastrar informações
//Put = Atualizar informações de uma entidade
//Patch = Atualizar informações unicas de uma entidade
