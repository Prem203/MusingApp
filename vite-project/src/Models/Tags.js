import Posts from "./Posts";

export default class Tags {
    constructor({
        tag = "",
        post = [new Posts()],
    }){
        this.post = post;
    }

     
}