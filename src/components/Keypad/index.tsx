import React, { useState } from "react";
import ModalPopup from "../Modal";
import styled from "styled-components";

const Keypad = () => {
	//Set Initial State For Keypad - False (state changes to true on keypad click)
	const [codeOne, setCodeOne] = useState([{ 1: false, num: 1 }]);
	const [codeTwo, setCodeTwo] = useState([{ 1: false, num: 2 }]);
	const [codeThree, setCodeThree] = useState([{ 1: false, num: 3 }]);
	const [codeFour, setCodeFour] = useState([{ 1: false, num: 4 }]);
	const [codeFive, setCodeFive] = useState([{ 1: false, num: 5 }]);
	const [codeSix, setCodeSix] = useState([{ 1: false, num: 6 }]);
	const [codeSeven, setCodeSeven] = useState([{ 1: false, num: 7 }]);
	const [codeEight, setCodeEight] = useState([{ 1: false, num: 8 }]);
	const [codeNine, setCodeNine] = useState([{ 1: false, num: 9 }]);

	//Set Initial State Four Keypad Counter
	const [clickCounter, setClickCounter] = useState(0);

	//Set password for keypad
	const code =
		codeOne[0][1] && codeTwo[0][1] && codeThree[0][1] && codeFour[0][1];

	//If password is correct (password state changes to true) unlock door
	if (code === true)
		return (
			<>
				<ModalPopup />
				<Keypad />
			</>
		);

	console.log(clickCounter);

	// If password is > 4 clicks, incorrect pin notification displayed
	if (clickCounter >= 4) return <h1>Wrong Pin</h1>;

	return (
		<Container>
			<span onClick={() => setClickCounter(clickCounter + 1)}>
				<Keys onClick={() => setCodeOne([{ 1: true, num: 1 }])}>
					{codeOne[0].num}
				</Keys>
				<Keys onClick={() => setCodeTwo([{ 1: true, num: 2 }])}>
					{codeTwo[0].num}
				</Keys>
				<Keys onClick={() => setCodeThree([{ 1: true, num: 3 }])}>
					{codeThree[0].num}
				</Keys>
				<Keys onClick={() => setCodeFour([{ 1: true, num: 4 }])}>
					{codeFour[0].num}
				</Keys>
				<Keys onClick={() => setCodeFive([{ 1: true, num: 5 }])}>
					{codeFive[0].num}
				</Keys>
				<Keys onClick={() => setCodeSix([{ 1: true, num: 6 }])}>
					{codeSix[0].num}
				</Keys>
				<Keys onClick={() => setCodeSeven([{ 1: true, num: 7 }])}>
					{codeSeven[0].num}
				</Keys>
				<Keys onClick={() => setCodeEight([{ 1: true, num: 8 }])}>
					{codeEight[0].num}
				</Keys>
				<Keys onClick={() => setCodeNine([{ 1: true, num: 9 }])}>
					{codeNine[0].num}
				</Keys>
			</span>
		</Container>
	);
};

export default Keypad;

const Keys = styled.button`
	color: #003c8f;
	font-size: 2.25rem;
	font-family: "Varela Round", sans-serif;
	text-align: center;
	width: 5rem;
	height: 5rem;
	border-radius: 0.5rem;
	margin-right: 0.5rem;
	margin-top: 0.5rem;
`;

const Container = styled.div`
	height: 17rem;
	width: 17rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 15%;
`;
