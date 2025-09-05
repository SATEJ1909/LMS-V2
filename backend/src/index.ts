import express from 'express';
const app = express();
import prisma from './prisma.js';
import UserRouter from './routes/user.routes.js';
import AdminRouter from './routes/admin.routes.js';
import InstructorRouter from './routes/instructor.routes.js';

app.use(express.json());

app.use("/api/v1/user" , UserRouter);
app.use("/api/v1/admin" , AdminRouter);
app.use("/api/v1/instructor" , InstructorRouter);



async function main(){
    await prisma.$connect();
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}

main();



