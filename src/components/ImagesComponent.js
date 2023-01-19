import foto from '../assets/F2.jpg'

const ImagesComponent = () => {
    return (
        <div>
            <img src="/F1.jpg" />
            <img src={foto} />
        </div>
    )
}

export default ImagesComponent;