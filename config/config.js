const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI || "mongodb+srv://sshield9:3Q13UNA39HHnnnb4@cluster0.s7strj2.mongodb.net/DressStore?retryWrites=true&w=majority&appName=AtlasApp" ||
process.env.MONGO_HOST || + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config
/*
const config = { env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://zmalek:QPPeaH0IhRTVL0UD@cluster0.xtiiqxk.mongodb.net/Skeleton?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config*/
