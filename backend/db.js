const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://gofood:mern123@cluster0.ath82wk.mongodb.net/gofoodmern?retryWrites=true&w=majority";

async function mongoDB() {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true});
    console.log("Connected to the database");

    const fetched_data = mongoose.connection.db.collection("food-items");
    if (!fetched_data) {
      console.log("Collection not found");
      return;
    }

    // Fetch and log data
    const data = await fetched_data.find({}).toArray(); // Await the toArray method
    if (data.length === 0) {
      console.log("No data found in collection");
    } else {
     
     const foodCategory =  mongoose.connection.db.collection("foodCategory")
     if(!foodCategory){
      console.log("Collection not found")
      return
     }
    const catData = await  foodCategory.find({}).toArray();
    if(catData.length == 0){
      console.log("No data found");
    }
    else{
      global.foodCategory = catData;
      global.food_items = data;
    }
   
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }


}

module.exports = mongoDB;
