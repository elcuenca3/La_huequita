import { connect, connection } from "mongoose";

const conn={
    isConnectes:false

}
 
 export async function dbConect(){
if(conn.isConnectes) return;


     const db = await connect( process.env.MONGO_URL)

     conn.isConnected= db.connections[0].readyState;

     console.log(db.connection.db.databaseName)
}
connection.on("connected",()=>{
    console.log("conexion establecida")
})
connection.on("error",(err)=>{
    console.log(err)
})
export async function dbConnect() {
  if (conn.isConected) return;

  const db = await connect(process.env.MONGODB_URI);

  conn.isConnected = db.connections[0].readyState;

  // console.log(conn.isConnected);
}