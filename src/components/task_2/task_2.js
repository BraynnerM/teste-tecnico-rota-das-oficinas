import React, { useState, useEffect } from "react";
import BackToHomeLink from "../back-to-home-link/back-to-home-link";
import Card from "../card/card";
import styled from "styled-components";

const BoardSize = 10;

const Task_2_component = () => {
    const [board, setBoard] = useState([]);
    const [running, setRunning] = useState(false);

    // Inicializar o tabuleiro com células vazias
    useEffect(() => {
        const newBoard = Array(BoardSize)
            .fill(null)
            .map(() => Array(BoardSize).fill(false));
        setBoard(newBoard);
    }, []);

    // Função para alterar o estado de uma célula no tabuleiro
    const toggleCellState = (row, col) => {
        const newBoard = [...board];
        newBoard[row][col] = !newBoard[row][col];
        setBoard(newBoard);
    };

    // Função para executar uma iteração do jogo
    const runIteration = () => {
        const newBoard = board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                const liveNeighbors = countLiveNeighbors(rowIndex, colIndex);
                if (cell && (liveNeighbors < 2 || liveNeighbors > 3)) {
                    // Qualquer célula viva com menos de dois vizinhos vivos morre de solidão
                    // Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação
                    return false;
                } else if (!cell && liveNeighbors === 3) {
                    // Qualquer espaço vazio com exatamente três vizinhos vivos se torna uma célula viva
                    return true;
                } else {
                    // Qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração
                    return cell;
                }
            })
        );
        setBoard(newBoard);
    };

    // Função para contar o número de vizinhos vivos de uma célula
    const countLiveNeighbors = (row, col) => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newRow = row + i;
                const newCol = col + j;
                if (
                    newRow >= 0 &&
                    newRow < BoardSize &&
                    newCol >= 0 &&
                    newCol < BoardSize &&
                    board[newRow][newCol]
                ) {
                    count++;
                }
            }
        }
        return count;
    };

    // Função para alternar o estado de execução do jogo
    const toggleRunning = () => {
        setRunning(!running);
    };

    // Executar o jogo em cada iteração
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(runIteration, 300);
        }
        return () => {
            clearInterval(interval);
        };
    }, [running]);

    return (
        <>
            <Card>
                <StyledBoard>
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <Cell
                                key={`${rowIndex}-${colIndex}`}
                                alive={cell}
                                onClick={() => toggleCellState(rowIndex, colIndex)}
                            />
                        ))
                    )}
                </StyledBoard>
                <Controls>
                    <Button onClick={toggleRunning}>
                        {running ? "Stop" : "Start"} Game
                    </Button>
                </Controls>
            </Card>
            <BackToHomeLink />
        </>
    );
};

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${BoardSize}, 30px);
  grid-template-rows: repeat(${BoardSize}, 30px);
  gap: 1px;
  background-color: #e5b33d;
  padding: 5px;
  margin: auto;
  @media (max-width:480px) {
    grid-template-columns: repeat(${BoardSize}, 20px);
    grid-template-rows: repeat(${BoardSize}, 20px);
  }
`;

const Cell = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.alive ? "#325633" : "#fff")};
  border: 1px solid #ccc;
  cursor: pointer;
  @media (max-width:480px) {
    width: 20px;
  height: 20px;
  }
`;

const Controls = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.button`
  margin-bottom: 10vh;
  border-radius:1.5vh;
  background-color: #ffffff;
  height: 5vh;
  width: 20vw;
  font-size: 1.6vh;
  cursor: pointer;
  &:hover {
    color: #eeeeee;
    background-color: #000000;
    transition: color  0.5s ease-in-out, background-color 0.4s ease-in-out;
    }
`

export { Task_2_component };
