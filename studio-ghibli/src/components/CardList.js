import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../store';
import StyledCardList from '../components-styled/StyledCardList';
import Card from './Card';

const CardList = () => {
	const movieList = useSelector((state) => state.movieList);
	const isLoading = useSelector((state) => state.isLoading);
	const error = useSelector((state) => state.error);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log('hi');
		dispatch(fetchMovieData());
	}, [dispatch]);
	const renderCardList = () =>
		movieList.map((movie) => <Card movie={movie} key={movie.id} />);

	return (
		<StyledCardList>
			{isLoading ? <h2>Loading movies...</h2> : null}
			{error ? <h2>{error}</h2> : null}
			{renderCardList()}
		</StyledCardList>
	);
};

export default CardList;
