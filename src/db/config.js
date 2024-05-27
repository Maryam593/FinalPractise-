import  {Sequelize} from 'sequelize';
//building a connection

const dbUserName = process.env.DB_NAME
const dbName = process.env.DB_USERNAME

const dbLocalhost = process.env.DB_LOCALHOST
const dbPassword = process.env.DB_PASSWORD
console.log("db password",dbPassword)
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize( dbUserName, dbName,dbPassword, {
  host: dbLocalhost,
  dialect: 'postgres' 
});


//testing a connection 

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {connectDB}
export default sequelize;