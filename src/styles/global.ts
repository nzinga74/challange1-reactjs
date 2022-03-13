import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	:root {
		--background: #f0f2f5;
		--red: #E52E4D;
		--blue: #5429CD;
		--green: #33CC95;
		--blue-light: #6933FF;

		--text-title: #363F5F;
		--text-body: #969CB3;

		--shape: #FFFFFF;

	}

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html{
		@media (max-width: 1080px){
			font-size: 93.75;
		}
		@media (max-width: 750px){
			font-size: 87.5%;
		}
	}

	body {
		background-color: var(--background);
		--webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}
	[disabled]{
		cursor: not-allowed;
		opacity: 0.5;
	}
	.react-modal-overlay{
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
  .react-modal-content{
		width: 100%;
		max-width: 500px;
		background-color: var(--background);
		border-radius: 0.24rem;
		padding: 3rem;
		position: relative;
	}
	.react-modal-close{
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}

`;
