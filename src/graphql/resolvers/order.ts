import  Order from '../../models/orderModel';
import {isEmpty} from './helper';

export default {
    Query: {
        /**
         * 
         */
        async getOrders(){
            try{
                const orders = Order.find();
                return orders
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
        /**
         * 
         * @param data 
         */
        async getOrdersByDate (data: Date)
        {
            try {
              return Order.find({createdAt: data})
            } catch (err) {
                throw new Error(err);
            }
        },

        /**
         * 
         * @param attribut :Array
         */
        async orderByAttribut (attribut: any) {
           
            if(attribut.isArray()){
                if(attribut.length > 1) {
                    return await Order.find({patient: attribut.patient, medecin: attribut.medecin})
                }
                else {
                    if(attribut.patient){
                        return await Order.find({patient: attribut.patient})
                    }
                    else if(attribut.medecin){
                        return await Order.find({medecin: attribut.medecin})
                    }
                }
                
            }
            return new Error("Bad request 400");
            
        }
    },
    Mutation : {
        /**
         * 
         * @param parent 
         * @param data 
         * @param context 
         * @param info 
         */
        async createOrder(parent: any, data: any, context: String, info: String){
             try {
                 // Declarion de l'object  
                 if(data){
                     if(!isEmpty(data.patient) && !isEmpty(data.medecin)){
                         if(data.drugs){
                             const order = await new Order({data});
                             order.save();
                             return order;
                         }
                     }
                     else{
                         throw new Error("missing data");
                     }
                 }
                 const order = await new Order() 
             } catch (error) {
                throw new Error(error);
             }
        }   
    },
    /**
     * 
     * @param parent 
     * @param id 
     * @param context 
     * @param info 
     */
     async deleteOrder(parent: any, id: String, context: String, info: String) {
         try {
             // TODO: delete the data
             return await Order.findOneAndDelete({_id: id})
         } catch (error) {
             throw new Error(error);
         }
     },
      async updatedOrder(id: String, data: any) {
          try {
              // TODO:
              // the data object that the sending front must comply with the structure of the Order model
              if(data){
                  return Order.findByIdAndUpdate(id, { $set: data }, { new: true });
              }
          } catch (error) {
              throw new Error(error);
          }
      }
}