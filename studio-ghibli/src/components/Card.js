import StyledCard from '../components-styled/StyledCard';

const Card = (props) => {
	const { movie } = props;
	// console.log('movie: ', movie);
	return (
		<StyledCard>
			<h1>{movie.title}</h1>
			<h3>{movie.original_title}</h3>
			<h3>{movie.original_title_romanised}</h3>
			<p>{movie.description}</p>
			<p>Director: {movie.director}</p>
			<p>Producer: {movie.producer}</p>
			<p>Release date: {movie.release_date}</p>
			<p>Running time: {movie.running_time} min</p>
			<p>Rating: {movie.rt_score}</p>
		</StyledCard>
	);
};

export default Card;
