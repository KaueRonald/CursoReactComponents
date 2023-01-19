import {useState, useEffect} from 'react';

const HooksComponent = () => {

    let idade = 30
    const [novaIdade, SetNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    }

    const changeNewAge = () => {
        SetNovaIdade(45);
    }

    useEffect(() => {
        console.log("Testando...");
    })

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default HooksComponent;