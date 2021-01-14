import  Order from '../../models/orderModel';


export default {
    Query: {
        async getOrders(){
            try{

            }
            catch (err) {
                throw new Error(err);
              }
        },
        async getOrder(id: number){
            try {
                return Order.findById(id);
              } catch (err) {
                throw new Error(err);
              }
        },
        async getOrdersByDate (data: Date)
        {
            try {
                
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation : {
        async addOrder(parent: any, data: any, context: String, info: String){
             try {
                 // Declarion de l'object
             } catch (error) {
                 
             }
        }   
    }
}