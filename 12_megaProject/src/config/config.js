const config = {
      appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
      appwriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
      appwriteDataBaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
      appwriteCollectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
      appwriteStorageID : String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
}

export default config;