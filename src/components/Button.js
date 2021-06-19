import {useState} from "react"
import randomColors from "../constants/randomColors"

const Button = (props) => {
    let {value, audio} = props;
    const [color, setColor] = useState()

    const handleClick = (e) => {
       if(e.target.value) {
         playAudio(e.target.value);
         setColor(randomColors[Math.floor(Math.random() * 50)]);
         setTimeout(() => setColor("whitesmoke"), 200)
       }
    }

    const playAudio = (value) => {
        let audio = document.getElementById(value);
        audio.play()
        console.log("playing audio!");
    }

    return (
        <div className="Button">
            <button onClick={handleClick} value={value} style={{backgroundColor: color}}>
                <audio id={value} src={audio}></audio>
                {value}
            </button>
        </div>
    );
};

export default Button;
