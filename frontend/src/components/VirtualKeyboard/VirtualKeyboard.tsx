import React, { FunctionComponent, MouseEventHandler } from "react";
import { KEYS_ARRAY } from "../../assets/const";
import "./VirtualKeyboard.scss";

const VirtualKeyboard: FunctionComponent = () => {
  const onClickHandler: MouseEventHandler = (e: any) => {
    console.log(e);
  };

  return (
    <div className="virtual-keyboard">
      {KEYS_ARRAY.map((keys, index) => {
        return (
          <div key={index} className="virtual-key-row">
            {keys.map((key, idx) => (
              <VirtualKey
                key={idx}
                label={key}
                onClickHandler={onClickHandler}
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
    <button onClick={onClickHandler} className="virtual-key">
      {label}
    </button>
  );
};

interface VirtualKeyProps {
  label: string;
  onClickHandler: MouseEventHandler;
}

export default VirtualKeyboard;
