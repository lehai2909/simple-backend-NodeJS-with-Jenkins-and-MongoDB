const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/express-mvp-db')
const sequelize = new Sequelize('postgres://express-mvp-dbuser:123321@localhost:5432/express-mvp-db')

async function test(){
    await sequelize.authenticate();
    
}
   
test().then(()=>console.log('Connection has been established successfully.'))
.catch((err)=>console.log(err))

sequelize.close().then(()=>console.log("Close connection"))

