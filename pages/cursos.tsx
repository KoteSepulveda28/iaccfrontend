import { useEffect, useState } from 'react';
import { Table, Space, Button} from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Curso = {
    id: number;
    nombre: string;
    codigo: string;
    anio : number;
    semestre : string;
    sede : string;
};

const CursosPage = () => {
    const [cursos, setCursos] = useState<Curso[]>([]);

    useEffect(() => {
        fetch('/api/cursos')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCursos(data);
        })
        .catch((error) => {
            console.error('Error al obtener los cursos:', error);
        });
    }, []);


    const router = useRouter();
    const redirectToAnotherPage = (parametro : number) => {
        router.push(`/alumnosCursos?id=${parametro}`);
    };


    const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'NOMBRE',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'CODIGO',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
        title: 'AÑO',
        dataIndex: 'anio',
        key: 'anio',
    },
    {
        title: 'SEMESTRE',
        dataIndex: 'semestre',
        key: 'semestre',
    },
    {
        title: 'SEDE',
        dataIndex: 'sede',
        key: 'sede',
    },   

    // Agrega aquí otras columnas si tienes más campos en el objeto Curso
    {
      title: 'ACCIONES',
      key: 'acciones',
      render: (curso: Curso) => (
        <Space size="middle">
            {
                <Button onClick={() => redirectToAnotherPage(curso.id)}>Ver alumnos</Button>
            }
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Cursos</h1>
      <Table dataSource={cursos} columns={columns} />
    </div>
  );
};

export default CursosPage;
