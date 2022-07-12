import React, { FunctionComponent, MouseEventHandler } from "react";
import { KeysArray } from "../../assets/const";
import "./VirtualKeyboard.sass";

const VirtualKeyboard: FunctionComponent = () => {
  const onKeyDownEventHandler: MouseEventHandler = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      {KeysArray.map((keys, index) => {
        return (
          <div key={index} className="virtual-key-row">
            {keys.map((key, idx) => (
              <VirtualKey
                key={idx}
                label={key}
                onKeyDownEventHandler={onKeyDownEventHandler}
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
  onKeyDownEventHandler,
}) => {
  return (
    <button onClick={onKeyDownEventHandler} className="virtual-key">
      {label}
    </button>
  );
};

interface VirtualKeyProps {
  label: string;
  onKeyDownEventHandler: MouseEventHandler;
}

export default VirtualKeyboard;
