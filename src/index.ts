import morgan from 'morgan';
import express from 'express';
import authRoute from './routes/auth.routes';
// import { connect } from 'http2'; // Esta línea no parece necesaria, pero no la removo ya que pediste no quitar nada
import conectDBMongo from './config/db';

// Inicializar el servidor de express 
const app = express();

// Asignar el número de puerto
const PORT = 3000;

app.use(express.json()); // Todo lo que reciba es de tipo JSON
app.use(morgan('dev'));  // Mostrar logs de las peticiones

app.use('/api/vi/auth', authRoute); // ruta principal

conectDBMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`El servidor funciona con el puerto: ${PORT}`);
        console.log("El servidor está funcionando:", PORT);
    });
});
