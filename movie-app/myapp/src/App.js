import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";


class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    
    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");  // 뭘? axios await
        this.setState({movies:movies, isLoading: false})
    };

    componentDidMount(){
        this.getMovies();
    }

    

    render(){
        const {isLoading, movies} = this.state;
        return (
            <section className="container">  
                {isLoading ? 
                <span className="loader__text">Loading......</span>:
                <div className="movies">
                    {movies.map(movie =>(                    
                        <Movie 
                               key={movie.id}
                               id={movie.id} 
                               year={movie.year} 
                               title={movie.title} 
                               summary={movie.summary} 
                               poster={movie.medium_cover_image}
                               genres={movie.genres}
                        />
                    ))}
                </div>
                }
            </section>
        );
    }
}


export default App;

// setTimeout(()=>{
        //     this.setState({isLoading: false})
        // }, 3000)