import mysql, { Connection } from "mysql2/promise";

export class Database {

  private static instance: Database; //* Database.instance

  private connection!: Connection; // * afirmacion de nulidad

  private constructor() {}

  public static getInstance(): Database {

    if(!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    if(!this.connection) {
      this.connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'nodedb',
        password: 'academyjava',
        port: 3306
      });
    }
  }

  public getConnection(): Connection {
    return this.connection;
  }

}
