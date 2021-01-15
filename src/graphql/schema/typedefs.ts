import { gql } from 'apollo-server-express';



export default gql`
scalar Date
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
      TobeCareful: String!
  }
  
  type MessageInfo {
    messagecreated: String
    messagedeleted: String
  }
 
   extend type Query  {
      orders:[Order]
      order(id: String) : Order
      orderByAttribut(tabAttribut): [Order]
   }
   extend type Mutation {
       createOrder(data:any): Order
       deleteOrder(id: String): Order
       updatedOrder(id: String! , data): Order
   }
`;