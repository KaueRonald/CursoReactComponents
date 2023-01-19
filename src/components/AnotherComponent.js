const AnotherComponente = () => {

    const handleClick = () => {
        console.log('Hola');
    }
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
        </div>
    )
}

export default AnotherComponente;