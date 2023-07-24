// pages/otra-pagina.tsx
import { useRouter } from 'next/router';

const AlumnosCursos = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Aqui listado de alumnos</h1>
    </div>
  );
};

export default AlumnosCursos;
