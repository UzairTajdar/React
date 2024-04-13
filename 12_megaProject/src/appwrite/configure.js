import {Client,Databases,Storage,ID, Query} from 'appwrite'
import config from '../config/config'

export class Services{
      client = new Client();
      databases;
      storage;
      constructor(){
            this.client
                 .setEndpoint(config.appwriteURL)
                 .setProject(config.appwriteProjectID);
                 this.databases = new Databases(this.client);
                 this.storage = new Storage(this.client);
      }
      async createPost ({title,slug,userID,content,featuredImage,status}){
            try {
                  return await this.databases.createDocument(
                        config.appwriteDataBaseID,
                        config.appwriteCollectionID,
                        slug,
                        {
                              title,
                              content,
                              userID,
                              featuredImage,
                              status
                        },
                  )
            } catch (error) {
                  console.log('Create Post ' ,error)
            }
      }
      async updatePost (slug,{title,content,featuredImage,status}){
            try {
                  return await this.databases.updateDocument(
                        config.appwriteDataBaseID,
                        config.appwriteCollectionID,
                        slug,
                        {
                              title,
                              content,
                              userID,
                              featuredImage,
                              status
                        }
                  )
            } catch (error) {
                  console.log('Update Post ' ,error)
            }
      }
      async deletePost(slug){
           try {
            await this.databases.deleteDocument(
                  config.appwriteDataBaseID,
                  config.appwriteCollectionID,
                  slug,
            )
            return true
           } catch (error) {
            console.log('Delete Post ' ,error)
            return false
           }
      }
      async getPost(slug){
           try {
            return await this.databases.getDocument(
                  config.appwriteDataBaseID,
                  config.appwriteCollectionID,
                  slug,
            )
           } catch (error) {
            console.log('Get Post ' ,error)
            return false
           }
      }
      async getPosts(queries = [Query.equal('status','active')]){
            try {
                  return await this.databases.listDocuments(
                        config.appwriteDataBaseID,
                        config.appwriteCollectionID,
                        queries
                  )
            } catch (error) {
                  console.log('Get Posts ',error)
                  return false
            }
      }

//File Services

async uploadFile(file){
      try {
          return await this.storage.createFile(
              config.appwriteStorageID,
              ID.unique(),
              file,
          )
      } catch (error) {
          console.log("Appwrite serive :: uploadFile :: error", error);
          return false
      }
  }
      async deleteFile(fileID){
            try {
                  await this.storage.deleteFile(
                        config.appwriteStorageID,
                        fileID,
                  )
                  return true
            } catch (error) {
                  console.log('Delete File ' ,error)
                  return false
            }
      }
      getFilePreview(fileID){
            return this.storage.getFilePreview(
                  config.appwriteStorageID,
                  fileID
            )
      }
}

const Service = new Services()
export default Service