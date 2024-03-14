import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_ blogsystem', 'freedb_raghad', 'UqhVT35wws!Zz3H', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });
    export const connectDB =async ()=>{
        try{
            return await sequelize.sync({alter:true ,force:true});
        }catch(err){
            console.log("error to connect databaes");
            console.log(err);
        }
    }