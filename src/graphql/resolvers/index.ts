import orderResolver from './order';
import {IResolvers} from 'graphql-tools';

const resolvers: IResolvers =  {
    Query: {
        ...orderResolver.Query 
    },
    Mutation: {
        ...orderResolver.Mutation
    }
}

export default resolvers;