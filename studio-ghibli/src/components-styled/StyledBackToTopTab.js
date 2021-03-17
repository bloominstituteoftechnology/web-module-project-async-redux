import styled from 'styled-components';

const StyledBackToTopTab = styled.a`
	& {
		color: #e8e6e3;
		text-decoration: none;
	}
	&:visited {
		color: #e8e6e3;
		text-decoration: none;
	}
	& .back-to-top-tab {
		display: flex;
		justify-content: center;
		align-items: center;
		position: sticky;
		top: 90vh;
		padding: 20px;
		width: 27px;
		background: #181a1b88;
		border-top: 2px solid #181a1b55;
		border-right: 2px solid #181a1b55;
		border-bottom: 2px solid #181a1b55;
		border-radius: 0 10px 10px 0;
	}
	& .back-to-top-tab:hover {
		background: #181a1b;
		border-top: 2px solid #181a1b;
		border-right: 2px solid #181a1b;
		border-bottom: 2px solid #181a1b;
	}
`;

export default StyledBackToTopTab;
