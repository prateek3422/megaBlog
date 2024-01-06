import conf from "../conf/conf";
import { Client, Databases, Storage, ID, qu, Query } from "appwrite";

class Service {
  Client = new Client();
  databases;
  Storage;

  constructor() {
    this.Client.setEndpoint(conf.AppwriteUrl).setProject(
      conf.AppwriteProductId
    );
    this.databases = new Databases(this.Client);
    this.Storage = new Storage(this.Client);
  }

  async createPost({ slug, title, content, status, userId, featureImages }) {
    try {
      return await this.databases.createDocument(
        conf.AppwriteDatabaseId,
        conf.AppwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featureImages,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async UpdatePost(slug, { title, content, status,  featureImages }) {
    try {
      return await this.databases.updateDocument(
        conf.AppwriteDatabaseId,
        conf.AppwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featureImages,
        }
      );
    } catch (error) {
      console.log("updatePost", error);
    }
  }

  async deletPost(slug){
    try {
         await this.databases.deleteDocument(
            conf.AppwriteDatabaseId,
            conf.AppwriteCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.log("deletePost", error)
        return false
    }
  }

  async getPost({slug}){
    try {
       await this.databases.getDocument(
        conf.AppwriteDatabaseId,
        conf.AppwriteCollectionId,
        slug
      )
      return true 
    } catch (error) {
      console.log('getPost', error)
      return false
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]){
    try {
      await this.databases.listDocuments(
        conf.AppwriteDatabaseId,
        conf.AppwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log('all Posts',error)
    }
  }

//  upload flies

async uploadFlie(file){
  try {
     await this.Storage.createFile(
      conf.AppwriteBucketId,
      ID.unique(),
      file
    )
    return true

  } catch (error) {
    console.log('upload files',error)
    return false
  }
}


async deletFile(fileId){
  try {
    await this.Storage.deleteFile(
      conf.AppwriteBucketId,
      fileId
    )
    return true
  } catch (error) {
    console.log('delete file', error)    
  }
}

getFilePriview(fileId){
  return this.Storage.getFilePreview(
    conf.AppwriteBucketId,
    fileId
  )
}

}

const service = new Service();
export default service;
