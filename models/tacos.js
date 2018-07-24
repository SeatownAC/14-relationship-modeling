'use strict';

import mongoose from 'mongoose';

const tacoSchema = mongoose.Schema({
  type: { type:String, required:true },
  quantity: { type:String, uppercase:true, required:true },
  dateEaten: {type:Date},
  
});

export default mongoose.model('tacos', tacoSchema);