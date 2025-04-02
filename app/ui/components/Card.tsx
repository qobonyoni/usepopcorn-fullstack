import React from "react";
import { Link } from "react-router";

interface MovieType{
    Title: string;
    Poster: string;
    Year: string;
    imdbID: string;

}



function Card({movie}:{ movie: MovieType }) {
    return <li className="card" >
        <Link className="flex flex-col gap-2" to={`movie/${movie.imdbID}`}>
            <img className="max-h-[350px]" src={movie.Poster} alt={movie.Title} />
            <div className="p-32 text-center ">
                <h1 className="text-4xl">{movie.Title}</h1>
                <p className="text-2xl text-[#919191]">{movie.Year}</p>
               
            </div>
            
      </Link>
  </li>;
}

export default Card;
