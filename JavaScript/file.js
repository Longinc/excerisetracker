let movies = [];

const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value
    }
    movies.push(movie);
    document.forms[0].reset();

    console.warn('added' , {movies} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
}
