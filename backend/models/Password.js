import { getDB } from '../config/database.js';

class Password {
  static async getAll() {
    try {
      const db = getDB();
      const passwords = await db
        .collection('passwords')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
      return passwords;
    } catch (error) {
      throw new Error(`Failed to fetch passwords: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const db = getDB();
      const password = await db.collection('passwords').findOne({ id });
      return password;
    } catch (error) {
      throw new Error(`Failed to fetch password: ${error.message}`);
    }
  }

  static async create(data) {
    try {
      const db = getDB();
      
      // Validate required fields
      if (!data.site || !data.username || !data.password || !data.id) {
        throw new Error('Missing required fields: site, username, password, id');
      }

      const entry = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const result = await db.collection('passwords').insertOne(entry);
      return { ...entry, _id: result.insertedId };
    } catch (error) {
      throw new Error(`Failed to create password: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const db = getDB();
      const collection = db.collection('passwords');
      
      const updateData = {
        ...data,
        updatedAt: new Date()
      };

      const updateResult = await collection.updateOne(
        { id },
        { $set: updateData }
      );

      if (updateResult.matchedCount === 0) {
        throw new Error('Password entry not found');
      }

      const updatedPassword = await collection.findOne({ id });
      return updatedPassword;
    } catch (error) {
      throw new Error(`Failed to update password: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const db = getDB();
      const result = await db.collection('passwords').deleteOne({ id });

      if (result.deletedCount === 0) {
        throw new Error('Password entry not found');
      }

      return { success: true, message: 'Password deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete password: ${error.message}`);
    }
  }

  static async deleteAll() {
    try {
      const db = getDB();
      await db.collection('passwords').deleteMany({});
      return { success: true, message: 'All passwords deleted' };
    } catch (error) {
      throw new Error(`Failed to delete passwords: ${error.message}`);
    }
  }
}

export default Password;
