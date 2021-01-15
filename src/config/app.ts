import express,{Application} from 'express';
import config from 'config';
import consola from 'consola';
import helmet from 'helmet'
import mongoose from 'mongoose';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from '../graphql/schema/typedefs';
import resolvers from '../graphql/resolvers/index'; 

const env = config.get('env') as string;
const port = config.get('PORT') as number;
const db = config.get('MONGO_URL') as string;
const path = '/graphql';
export function start(){
   const app: Application = express();
    try{
        if(env==="production"){
            app.use(helmet());
        }
        const connectDB = async () => {
            try {
              await mongoose.connect(db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
              });
          
              console.log("MongoDB Connected...");
            } catch (err) {
              console.error(err.message);
              process.exit(1);
            }
          }
          connectDB();
        
          const server = new ApolloServer({ typeDefs,  resolvers: resolvers as any  });
       
          server.applyMiddleware({ app, path });
         app.listen(port,()=>consola.info(`Server running on port ${port}`))
    }catch(e){
        throw new Error(e.message);
    }
}