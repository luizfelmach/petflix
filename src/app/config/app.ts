import express, { Express, json } from 'express';
import { routes } from './routes';
import cors from 'cors';

const setupApp = async (): Promise<Express> => {
    const app = express();
    app.use(cors());
    app.use(json());
    routes(app);
    return app;
};

export { setupApp };
