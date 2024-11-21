import { createTask, deleteTask, getTask, getTasks, updateTask } from "./models/tasks.model";
import { Task } from "./types/Task.type";

const express = require('express');
const {format} = require('date-fns');
const mysql = require('mysql');
const app = express();
const port: number = 3000;

app.use(express.json());

//MySql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'nodejs'
});

connection.connect((err: any) => {
    if (err) throw err;
    console.log("DB Connected!");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

// Api routes
app.get('/', (req: any, res: any) => {
    res.send('Hello API Tasks');
});

app.get('/api/tasks', async (req: any, res: any) => {
    try {
        const tasks: Task[] = await getTasks(connection);
        res.status(200).json({tasks});
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/tasks/:id', async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const task: Task = await getTask(connection, id);        
        res.status(200).json({task});
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/tasks', async (req: any, res: any) => {
    try {
        createTask(connection, req.body.description);
        res.status(200).send('Task created succefully');
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/tasks/:id', async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const Updated: boolean = await updateTask(connection, id, req.body.description);
        if (Updated) {
            res.status(200).send(`Task #${id} was Updated to "${req.body.description}" succefully`);
        } else {
            res.status(404).json({message: `Task #${id} not found`})
        }
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

app.delete('/api/tasks/:id', async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const Updated: boolean = await deleteTask(connection, id);
        if (Updated) {
            res.status(200).send(`Task #${id} was Deleted succefully`);
        } else {
            res.status(404).json({message: `Task #${id} not found`})
        }
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});