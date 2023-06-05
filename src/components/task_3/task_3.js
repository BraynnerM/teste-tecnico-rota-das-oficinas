import React, { useState, useEffect } from "react";
import BackToHomeLink from "../back-to-home-link/back-to-home-link";
import Card from "../card/card";
import styled from "styled-components";

const Task_3_component = () => {
    const [nomeAlimento, setNomeAlimento] = useState("");
    const [valorAlimento, setValorAlimento] = useState("");
    const [alimentos, setAlimentos] = useState([]);
    const [alimentosSelecionados, setAlimentosSelecionados] = useState([]);
    const [nomeCliente, setNomeCliente] = useState("");
    const [clientes, setClientes] = useState([]);
    const [totalConta, setTotalConta] = useState(0);

    const adicionarAlimento = () => {
        if (nomeAlimento && valorAlimento > 0) {
            const novoAlimento = { nome: nomeAlimento, valor: valorAlimento };
            setAlimentos([...alimentos, novoAlimento]);
            setNomeAlimento("");
            setValorAlimento("");
        }
    };

    const handleAlimentoSelecionado = (alimentoNome) => {
        const alimentosSelecionadosAtualizados = alimentosSelecionados.includes(alimentoNome)
            ? alimentosSelecionados.filter((nome) => nome !== alimentoNome)
            : [...alimentosSelecionados, alimentoNome];
        setAlimentosSelecionados(alimentosSelecionadosAtualizados);
    };

    const adicionarCliente = () => {
        if (nomeCliente && alimentosSelecionados.length >= 0) {
            const alimentosVinculados = alimentos.filter((alimento) =>
                alimentosSelecionados.includes(alimento.nome)
            );
            const valorTotalAlimentos = alimentosVinculados.reduce(
                (acc, alimento) => acc + alimento.valor,
                0
            );

            const novoCliente = {
                nome: nomeCliente,
                alimentos: alimentosSelecionados,
                valorTotalAlimentos,
            };
            setClientes([...clientes, novoCliente]);
            setNomeCliente("");
            setAlimentosSelecionados([]);
        }
    };

    const calcularTotalConta = () => {
        const totalAlimentos = alimentos.reduce((acc, alimento) => acc + alimento.valor, 0);
        setTotalConta(totalAlimentos);
    };

    const encontrarAlimentosRepetidos = (clientes) => {
        const alimentosRepetidos = {};

        for (const cliente of clientes) {
            for (const alimento of cliente.alimentos) {
                if (alimentosRepetidos[alimento]) {
                    alimentosRepetidos[alimento]++;
                } else {
                    alimentosRepetidos[alimento] = 1;
                }
            }
        }

        return alimentosRepetidos;
    };

    useEffect(() => {
        calcularTotalConta();
    }, [alimentos]);

    const alimentosRepetidos = encontrarAlimentosRepetidos(clientes);

    return (
        <>
            <Card>
                <OverFlowDiv>
                    <h2>Divisor de Conta de Restaurante</h2>
                    <h3>Cadastre aqui os Alimentos Consumidos:</h3>
                    <Label>
                        Nome do Alimento:
                        <Input type="text" value={nomeAlimento} onChange={(e) => setNomeAlimento(e.target.value)} />
                    </Label>
                    <br />
                    <Label>
                        Valor do Alimento:
                        <Input
                            type="number"
                            value={valorAlimento}
                            onChange={(e) => setValorAlimento(parseFloat(e.target.value))}
                        />
                    </Label>                    
                    <Button onClick={adicionarAlimento}>Adicionar Alimento</Button>                    
                    <h3>Lista de alimentos a serem vinculados ao cliente {nomeCliente}:</h3>
                    <Ul>
                        {alimentos.map((alimento, index) => (
                            <li key={index}>
                                <Input
                                    type="checkbox"
                                    checked={alimentosSelecionados.includes(alimento.nome)}
                                    onChange={() => handleAlimentoSelecionado(alimento.nome)}
                                />
                                {alimento.nome} - R$ {alimento.valor.toFixed(2)}
                            </li>
                        ))}
                    </Ul>
                    <Ul>
                        {alimentosSelecionados.map((alimento, index) => (
                            <li key={index}>{alimento}</li>
                        ))}
                    </Ul>
                    <Label>
                        Nome do Cliente:
                        <Input type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
                    </Label>                    
                    <Button onClick={adicionarCliente}>Adicionar Cliente</Button>                    
                    <h3>Clientes Cadastrados</h3>
                    {clientes.map((cliente, index) => {
                        const valorTotalAlimentosConsumidos = cliente.alimentos.reduce((acc, alimento) => {
                            const valorAlimento = alimentos.find(item => item.nome === alimento).valor;
                            return acc + (valorAlimento / alimentosRepetidos[alimento]);
                        }, 0);

                        return (
                            <div key={index}>
                                <P>Nome: {cliente.nome}</P>
                                <Ul>
                                    <Label>Alimentos Consumidos: </Label>
                                    {cliente.alimentos.map((alimento, index) => (
                                        <li key={index}>
                                            {alimento} - R$ {(alimentos.find(item => item.nome === alimento).valor / alimentosRepetidos[alimento]).toFixed(2)}
                                        </li>
                                    ))}
                                    <Label>Taxa de serviço (10%): R$ {(valorTotalAlimentosConsumidos * 0.1).toFixed(2)}</Label>
                                    <br />
                                    <Label>Total: R$ {(valorTotalAlimentosConsumidos * 1.1).toFixed(2)}</Label>
                                </Ul>
                            </div>
                        );
                    })}
                    <br />
                    <h3>Total da Conta</h3>
                    <Label>R$ {(totalConta * 1.1).toFixed(2)}</Label>
                    <br />
                </OverFlowDiv>
            </Card>
            <BackToHomeLink />
        </>
    );
};

const OverFlowDiv = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  margin-left:2vh;
  align-items: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;    
  }
  ::-webkit-scrollbar-track {
    background: #ffffff; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 4px; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: 720px) {
    width: 70vw;
  }
`
const Label = styled.label`
font-size: 2vh;
@media (max-width: 480px) {
    font-size: 1.6vh;
}
`
const P = styled.p`
font-size: 2vh;
@media (max-width: 480px) {
    font-size: 1.6vh;
}
`

const Ul = styled.p`
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
  margin-top: 2vh;
  margin-bottom: 2vh;
  border-radius:1.5vh;
  background-color: #ffffff;
  height: 10vh;
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

export { Task_3_component };
