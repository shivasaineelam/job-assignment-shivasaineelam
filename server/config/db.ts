import mongoose  from "mongoose"

const url="mongodb+srv://shivasai:shivasai@cluster0.8039zjo.mongodb.net/ANSCER"
const connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(url, {
      });
      console.log('MongoDB connected...');
    } catch (error) {
      console.log('Error connecting to MongoDB:');
    }
  };
  
  export default connectDB;