import Button from "./Button"

import buttonData from "../constants/buttonData"

const Piano = () => {
  return (
    <div className="Piano">
        <h1 id="title">Piano App</h1>
        {buttonData.map((button, idx) => {
            return <Button key={idx} value={button.key} audio={button.audio} />
        })}
    </div>
  );
};

export default Piano;
