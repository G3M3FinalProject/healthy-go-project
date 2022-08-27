import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	width: 100%;

	z-index: 1;
`;

export const Brand = styled.div`
	display: flex;
	align-items: center;

	color: white;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;

	font-size: 18px;

	padding: 0 5% 0 0;
	gap: 0.9rem;

	color: white;
`;

export const Flag = styled.img`
	z-index: -1;
	position: absolute;
	width: 100%;
`;

export const Logo = styled.img`
	width: auto;
`;
