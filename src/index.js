
let currentMovie = {}
let blood = document.querySelector('#amount')

//fetch movies 
fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies => {
        renderMovies(movies)
        renderOneMovie(movies[0])
        handleBloodForm()
    })
    

    //render functions
    function renderMovies(movies){
        movies.forEach(movie => {
            let imageTag = document.createElement('img')
            imageTag.src = movie.image
            let pictureContainer = document.querySelector('#movie-list')
            pictureContainer.append(imageTag)
            imageTag.addEventListener('click', () => renderOneMovie(movie))
        })
    }

    //show the details of the FIRST movie in the dataset 
    function renderOneMovie(movie){
        currentMovie = movie

        let title = document.querySelector('#title')
        title.textContent = movie.title
        let year = document.getElementById('year-released')
        year.textContent = movie.release_year
        let desc = document.getElementById('description')
        desc.textContent = movie.description
        let image = document.querySelector('#detail-image')
        image.src = movie.image
        let blood = document.querySelector('#amount')
        blood.textContent = movie.blood_amount
        let watchedButton = document.querySelector('#watched')
        watchedButton.textContent = movie.watched ? "Watched": "Unwatched"
        watchedButton.addEventListener('click', () => toggleWatchedButtton(movie))
    }

    function toggleWatchedButtton(movie){
        movie.watched = !movie.watched
        let watchedButton = document.querySelector('#watched')
        watchedButton.textContent = movie.watched ? 'Watched': 'Unwatched'
        console.log(movie)
    }
    
    function handleBloodForm(e){
        let bloodForm = document.querySelector('#blood-form')
        bloodForm.addEventListener('submit',(e) => {
            e.preventDefault()
            //grabs value of the input from user
            const input = document.querySelector('#blood-amount').value 
            //takes blood amount of clicked movie += by the input amount
            console.log(currentMovie.blood_amount += parseInt(input))
            blood.textContent = currentMovie.blood_amount
            
        })
    }
    
        