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

  const changeState = () => {
    setMyState(myState + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={() => {}}>Click Me</Button>
    </div>
  );
}

export default App;
