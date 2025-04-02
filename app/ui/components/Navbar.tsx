import React from "react";
import { Form, Link } from "react-router";
import { useSearchParams } from "react-router";

const movies=[]

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  
    const [query, setQuery] = React.useState(searchTerm);
  return <nav className="nav-bar">
   <Link to={'/'} className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
    </Link>
    <Form role="search">
      <input
        id="query"
    className="search"
    type="search"
        placeholder="Search movies..."
        
    name="query"
    onChange={(e) => setQuery(e.target.value)}
  />
    </Form>
 
  <p className="num-results">
    Found <strong>{movies.length}</strong> results
  </p>
  </nav>
}

export default Navbar;


