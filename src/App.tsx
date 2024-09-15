import { useState } from "react";

type User = {
  username: string;
  email: string;
}
function App() {
const [myState, setMyState] = useState<number>(0)
const [currentUser, setCurrentUser] = useState<User>()// dari objek User yang sudah di declare sebelumnya
  
const changeState = () => {
  setMyState(myState + 1)
  setCurrentUser({
    username: "",
    email: "",
  })
}

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button onClick={changeState} className="p-4 bg-blue-500 text-white rounded-md">
        Click Me
      </button>

      <p>State: {myState}</p>
    </div>
  );
}

export default App;
