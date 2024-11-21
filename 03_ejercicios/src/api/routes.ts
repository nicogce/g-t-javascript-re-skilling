import { Task } from "./types/Task.type";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "./models/tasks.model";


function initRestRoutes (router: any, connection: any): void {
    const prefix: string = '/api/tasks';
    
    router.get(prefix, async (req: any, res: any) => {
        try {
            const tasks: Task[] = await getTasks(connection);
            res.status(200).json({tasks});
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    });
    
    router.get(`${prefix}/:id`, async (req: any, res: any) => {
        try {
            const {id} = req.params;
            const task: Task = await getTask(connection, id);        
            res.status(200).json({task});
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    });
    
    router.post(prefix, async (req: any, res: any) => {
        try {
            createTask(connection, req.body.description);
            res.status(200).send('Task created succefully');
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    });
    
    router.put(`${prefix}/:id`, async (req: any, res: any) => {
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
    
    router.delete(`${prefix}/:id`, async (req: any, res: any) => {
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
}

export {initRestRoutes}