import {ref} from 'vue'
import axios from "axios"


const getPosts = () => {
    const posts = ref([])
    const load = async () => {
    try{
        let {data} = await axios("http://localhost:3333/posts")
        posts.value = data
      } catch(e) {
        console.log(e)
      }
    }

    load()
    return {posts, load} 
}

export default getPosts