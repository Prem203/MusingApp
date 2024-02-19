import {Component} from "react";
import { doc, getDocs, collection } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";

export default class Posts {

    constructor({
         postId = "", 
         postdesc = "" } = {}) {   
      this.postId = postId;
      this.postdesc = postdesc;
      this.db = new MyFirebaseDB();
    }

      async fetchPosts() {
        try {
          const database = new MyFirebaseDB();
          console.log("hey enterd")
            const postcollection = await getDocs(collection(database.db, "posts"));
    
            const postList = [];
          console.log("postList  ppljkl",postList)
            for (let i of postcollection.docs){
              postList.push({id:i.id, desc:i.data().desc});
            }
            
            console.log('Postlist  - retrurning now',postList);
            return postList;
          } 
          
         catch (error) {
          console.error("Error fetching post details:", error);
          return null;
      }
    }
}