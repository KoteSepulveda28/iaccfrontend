import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions);

const cursosHandler = (req: NextApiRequest, res: NextApiResponse) => {
  corsMiddleware;

  try {
    fetch('http://localhost:3000/cursos')
        .then((response) => response.json())
      .then((data) => {
        // Devolver los datos obtenidos como respuesta
        res.status(200).json(data);
      })
      .catch((error) => {
        console.error('Error al obtener los cursos:', error);
        res.status(500).json({ message: 'Error al obtener los cursos' });
      });
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    res.status(500).json({ message: 'Error al obtener los cursos' });
  }
};
export default cursosHandler;
