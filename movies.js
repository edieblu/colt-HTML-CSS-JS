var movies = [
	{
		title: "Casablanca",
		rating: 5,
		hasWatched: true
	},

	{
		title: "Baby Driver",
		rating: 4.5,
		hasWatched: false
	},

	{
		title: "Lord of the Rings",
		rating: 4.3,
		hasWatched: true
	},

	{
		title: "My Neighbor Totoro",
		rating: 3.8,
		hasWatched: false
	}
]

movies.forEach(function(movie){
	if (movie.hasWatched) {
		console.log('You have watched "' + movie.title + '" - ' + movie.rating + " stars")
	} else {
		console.log('You have not seen "' + movie.title + '" - ' + movie.rating + " stars")
	}
})