import { gql } from 'apollo-server-express';


export default gql  `
  type Order {
    id: String!
    drugs: [Drugs]!
    patient: String!
    medecin: String!
    createdAt: Date!
    updatedAt: Date!
  }
  type Drugs {
      name: String!
      frequency: String!
      tags: String!
      TobeCareful: String
  }
  
  type MessageInfo {
    messagecreated: String
    messagedeleted: String!
  }
 
   extend type Query  {
      orders: [Order]!
      order (id: ObjectId!) : [Order]!
      orderByAttribut(tabAttribut: any): [Order]!
   }
   extend type Mutation {
       createOrder(): Ordrer
       deleteOrder(id: ObjectId!): Order
       updatedOrder(id: ObjectId! , data: any): Order
   }
`;