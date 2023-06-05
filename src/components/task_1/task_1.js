import { useState } from "react";
import BackToHomeLink from "../back-to-home-link/back-to-home-link";
import Card from "../card/card";
import { romanToArabic, arabicToRoman } from "./rules";
import styled from "styled-components";

const Task_1_component = () => {
    const [romanInput, setRomanInput] = useState("");
    const [arabicInput, setArabicInput] = useState("");
    const [romanResult, setRomanResult] = useState("");
    const [arabicResult, setArabicResult] = useState("");

    const convertRomanToArabic = () => {
        const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    
        if (!regex.test(romanInput)) {
            alert('Digite um número romano válido!');
            return;
        }
    
        const arabicValue = romanToArabic(romanInput);
        if (arabicValue > 3999) {
            alert('O número romano excede o limite de 3999!');
            return;
        }
    
        setArabicResult(arabicValue);
    };
    const convertArabicToRoman = () => {
        let arabicValue = Number(arabicInput);
        if (arabicValue < 0) {
            arabicValue = Math.abs(arabicValue);
            setArabicInput(String(arabicValue));
        }
    
        if (arabicValue > 3999) {
            alert('O número arábico excede o limite de 3999!');
            return;
        }
    
        const romanValue = arabicToRoman(arabicValue);
        setRomanResult(romanValue);
    };

    return (
        <>
            <Card>
                <Div>
                <Label>
                    Numeral Romano:
                    <Input
                        type="text"
                        value={romanInput}
                        onChange={(e) => setRomanInput(e.target.value.toUpperCase())}
                    />
                    <Button onClick={convertRomanToArabic}>Converter para Arábico</Button>
                </Label>
                <P>Resultado em Arábico: {arabicResult}</P>
                <hr />
                <Label>
                    Numeral Arábico:
                    <Input
                        type="number"
                        value={arabicInput}
                        onChange={(e) => setArabicInput(e.target.value)}
                    />
                    <Button onClick={convertArabicToRoman}>Converter para Romano</Button>
                </Label>
                <P>Resultado em Romano: {romanResult}</P>
                </Div>
            </Card>
            <BackToHomeLink />
        </>
    );
};

const Div = styled.div`
padding: 1vh;`

const Label = styled.label`
font-size: 2vh;
@media (max-width: 480px) {
    font-size: 1.6vh;
}
`

const P = styled.p`
font-size: 1.8vh;
@media (max-width: 480px) {
    font-size: 1.4vh;
}
`

const Input = styled.input`
font-size: 2.2vh;
margin: 1vh;
@media (max-width: 480px) {
    font-size: 1.8vh;
}
`

const Button = styled.button`
  margin-bottom: 10vh;
  border-radius:1.5vh;
  background-color: #ffffff;
  height: 5vh;
  width: 20vw;
  font-size: 1.6vh;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 1.2vh;
    }
  &:hover {
    color: #eeeeee;
    background-color: #000000;
    transition: color  0.5s ease-in-out, background-color 0.4s ease-in-out;
    }
`

export { Task_1_component };
