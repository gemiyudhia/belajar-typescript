import { ReactNode, useState } from "react";

type ButtonProps = {
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`p-4 bg-blue-500 text-white rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

function App() {
  const [myState, setMyState] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const changeState = () => {
    setMyState(myState + 1);
  };

  const handleText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // React.ChangeEventHandler<HTMLInputElement> berasal dari onChange
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <input
        onChange={handleText}
        type="text"
        className="p-4 border rounded-md bg-slate-600"
      />

      <Button onClick={() => {}}>Click Me</Button>
    </div>
  );
}

export default App;
