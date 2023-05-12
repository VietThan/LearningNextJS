
import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : "Develop. Preview. Ship. 🚀"}</h1>;
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];


    function handleClick(){
        setLikes(likes + 1)
    }

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React 💙" />
            <Header />
            <Header title="A new title" />
            <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
        );
}
          
