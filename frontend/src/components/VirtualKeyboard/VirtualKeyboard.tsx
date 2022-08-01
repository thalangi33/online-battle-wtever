import React, { FunctionComponent, MouseEventHandler } from "react";
import { KEYS_ARRAY} from "assets/const";
import "./VirtualKeyboard.scss";

interface gameFunction {
  gameLogic: Function
}

const VirtualKeyboard = (props: gameFunction) => {
  const onClickHandler: MouseEventHandler = (e: any) => {
    console.log(e);
  };
  const exampleFunction = (key: string) => {
    console.log("This is key: " + key.charCodeAt(0));
  }
  const convertKeyToKeycode = (key: string) => {
    if (key === "ENTER")
      return 13
    else if (key === "BACKSPACE")
      return 8
    else 
      return key.charCodeAt(0)
  }

  return (
    <div className="virtual-keyboard">
      {KEYS_ARRAY.map((keys, index) => {
        return (
          <div key={index} className="virtual-key-row">
            {keys.map((key, idx) => (
              <VirtualKey
                key={idx}
                label={key}
                onClickHandler={() => {{props.gameLogic(convertKeyToKeycode(key), key.toLowerCase()); exampleFunction(key)}}}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

const VirtualKey: FunctionComponent<VirtualKeyProps> = ({
  label,
  onClickHandler,
}) => {
  return (
    <button onMouseDown={onClickHandler} className="virtual-key">
      {label}
    </button>
  );
};

interface VirtualKeyProps {
  label: string;
  onClickHandler: MouseEventHandler;
}

export default VirtualKeyboard;
