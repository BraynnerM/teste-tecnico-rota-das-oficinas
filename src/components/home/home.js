import Card from '../card/card';
import StyledLink from '../styled-link/styled-link';

const TaskList = () => {
    return (        
        <Card>
            <StyledLink to={'/task_1/'}>Tarefa 1 - Conversor de números romanos</StyledLink>
            <StyledLink to={'/task_2/'}>Tarefa 2 - Jogo da Vida</StyledLink>
            <StyledLink to={'/task_3/'}>Tarefa 3 - Divisor de conta de restaurante</StyledLink>
        </Card>        
    )
};

export { TaskList };
