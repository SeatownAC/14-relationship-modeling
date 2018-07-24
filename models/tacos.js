'use strict';

import mongoose from 'mongoose';

const tacoSchema = mongoose.Schema({
  type: { type:String, required:true },
  quantity: { type:String, uppercase:true, required:true },
  tacoTruckName: { type:String, required:true },
  
});

export default mongoose.model('tacos', tacoSchema);