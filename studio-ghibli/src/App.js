import StyledHeader from './components-styled/StyledHeader';
import BackToTopTab from './components/BackToTopTab';
import CardList from './components/CardList';

function App() {
	return (
		<div className='App'>
			<a href='#movieList'>
				<StyledHeader>
					<div className='header-img-background'>
						<img src='https://ghibliapi.herokuapp.com/images/logo.svg' />
					</div>
				</StyledHeader>
			</a>
			<p id='movieList'></p>
			<BackToTopTab />
			<CardList id='movieList' />
		</div>
	);
}

export default App;
