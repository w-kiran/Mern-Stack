import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog{
            "id": number,
            "title": string,
            "content": string,
            "published": false,
            "author": {
                "name":string
            }
}

export const useBlog =({id}:{id:string}) =>{
    const [loading, setLoading]= useState(true);
    const [blog, setBlog]= useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
               Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
              setBlog(response.data.blog);
              console.log(blog);
              setLoading(false);
          })
        .catch((error) => {
            console.error(`Error fetching blog with ID ${id}:`, error);
            console.log(blog);

            setLoading(false);
          });
    },[id])
    return {
        loading,
        blog,
    }
}
export const useBlogs = () =>{
    const [loading, setLoading]= useState(true);
    const [blogs, setBlogs]= useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then (response =>{
            setBlogs(response.data.blogs);
            setLoading(false);
        })
    },[])
    return {
        loading,
        blogs,
    }
}



