import { DataSource, DataSourceOptions } from "typeorm"
import {config} from "dotenv"
config({path: `config/.${process.env.NODE_ENV || 'development'}.env`})


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["dist/src/**/*.entity.js"],
    migrations:["dist/src/migrations/*.js"],
    migrationsTableName: "migrations",
    migrationsRun:false
} 

const AppDataSource = new DataSource(dataSourceOptions);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;