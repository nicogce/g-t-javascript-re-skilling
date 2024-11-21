import { Task } from "../types/Task.type";

const { format } = require('date-fns');

const getTask = (connection: any, taskId: number): Promise<Task> => {
    return new Promise<Task>((resolve, reject) => {
        const sql: string = "SELECT * FROM tasks WHERE id = '" + taskId + "'";
        connection.query(sql, (err: any, result: Task, fields: any) => {
            if (err) throw err;
            resolve(result);
        });
    });
}

const getTasks = (connection: any): Promise<Task[]> => {
    let tasks: Task[] = [];

    return new Promise<Task[]>((resolve, reject) => {
        connection.query("SELECT * FROM tasks", (err: any, result: any, fields: any) => {
            if (err) throw err;
            result.forEach((item: Task) => {
                tasks.push(item);
            });

            resolve(tasks);
        });
    });
}

const createTask = (connection: any, taskDescription: string): void => {
    const date = format(new Date(), 'yyyy-MM-dd');
    const sql: string = "INSERT INTO tasks (description, createdOn, updatedOn) VALUES ('" + taskDescription + "', '" + date + "', '" + date + "')";
    connection.query(sql, (err: any, result: any) => {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
    });
}

const updateTask = (connection: any, taskId: number, newDescription: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const sql: string = "UPDATE tasks SET description = '" + newDescription + "', updatedOn = '" + format(new Date(), 'yyyy-MM-dd') + "' WHERE id = '" + taskId + "'";
        connection.query(sql, function (err: any, result: any) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            resolve(result.affectedRows);
        });
    });
}

const deleteTask = (connection: any, taskId: number): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const sql: string = "DELETE FROM tasks WHERE id = '" + taskId + "'";
        connection.query(sql, function (err: any, result: any) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
            resolve(result.affectedRows);
        });
    });
}

export { createTask, getTask, getTasks, updateTask, deleteTask }