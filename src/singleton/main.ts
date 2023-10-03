import { Database } from "./db/data-base";

(async () => {
  const db = Database.getInstance(); //* const "db" se guarda la instancia
  await db.connect();
  const connection = db.getConnection();

  //* las peticiones hacia la base de datos pueden
  //* pueden generar exception.
  try {
   const [rows, fields] = await connection.execute("SELECT * FROM students");
   //* rows son las filas (imprimir)
   console.log(rows);
   //* imprime los metadatos
   console.log('Fields', fields);
  } catch(error) {
    console.error("Error al ejecutar la consulta: ", error);
  } finally {
    //* Es una buena práctica cerrar la conexión cuando ya no la necesitamos
    await connection.end();
  }
})();

// (()=>{})();
// (()=>{})();

//const sumar  = (num1: number, num2: number) => num1 + num2;
// const sumar = (num1: number, num2: number) => {
//   return num1 + num2;
// }

// function sumar(num1: number, num2: number) {
//   return num1+num2;
// }
//sumar(1,5);


