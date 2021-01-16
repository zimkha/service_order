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

    type Query  {
      getOrders:[Order]
      getOrder(id: String) : Order!
      getOrdersByDate(date: Date): [Order]!
      orderByAttribut(tabAttribut:String ): [Order]
   }
   input Drug {
      name: String!
      frequency: String!
      tags: String!
   }
    type Mutation {
       createOrder(patient: String, medecin: String, drugs: Drug): Order
       deleteOrder(id: ID): Order
       updatedOrder(id: ID! , data: String): Order
   }
`
;