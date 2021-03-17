import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	font-weight: 800;
	text-align: center;
	margin-bottom: 50px;
	background-image: url('https://i0.wp.com/www.adobomagazine.com/wp-content/uploads/2020/01/studio-ghibli-hero-2.png?fit=1440%2C757&ssl=1');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-top: 20px solid #e8e6e3ee;
	border-bottom: 20px solid #e8e6e3ee;
	height: 96vh;
	cursor: pointer;
	& img {
		height: 300px;
		border-radius: 25px;
	}
	& .header-img-background {
		width: 100%;
		padding: 15px 0;
		background-color: #e8e6e388;
	}
`;

export default StyledHeader;
