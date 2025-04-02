import { redirect } from "react-router";

const MAIN_URL = "http://www.omdbapi.com/?"

const API_KEY = import.meta.env.VITE_API_KEY;
export async function login() {
    redirect('/')
}

export async function getMovies(query:string="batman") {
    try {
        const res = await fetch(`${MAIN_URL}s=${query}&apikey=${API_KEY}`);
        const data = await res.json();
        console.log(data)
        return data;
        
    } catch (error) {
       console.error(error)
    }
}