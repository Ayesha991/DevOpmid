import { MongoClient } from 'mongodb';

let db = null;

export const connectDB = async () => {
  try {
    const uri =
      process.env.MONGODB_URI ||
      process.env.MONGO_URI ||
      'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    
    await client.connect();
    db = client.db(process.env.DB_NAME || 'passwordManager');
    
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    if (!collectionNames.includes('passwords')) {
      await db.createCollection('passwords');
    }

    // Ensure indexes exist even when collection already exists.
    await db.collection('passwords').createIndex({ id: 1 }, { unique: true });
    await db.collection('passwords').createIndex({ createdAt: 1 });
    
    console.log('✓ Connected to MongoDB successfully');
    return db;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return db;
};
