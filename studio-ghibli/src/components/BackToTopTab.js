import StyledBackToTopTab from '../components-styled/StyledBackToTopTab';

const BackToTopTab = () => {
	return (
		<StyledBackToTopTab href='#movieList'>
			<div className='back-to-top-tab'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					width='25'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M5 11l7-7 7 7M5 19l7-7 7 7'
					/>
				</svg>
			</div>
		</StyledBackToTopTab>
	);
};

export default BackToTopTab;
