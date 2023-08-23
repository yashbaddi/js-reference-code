import { useDispatch, useSelector } from "react-redux";
import { actionSomethingCreator } from "../actionCreators";

export function Child2() {
  const data = useSelector((state) => state.something);
  const dispatch = useDispatch();

  dispatch(actionSomethingCreator(1));

  return (
    <div className="child">
      <span>This is a child 2 {data}</span>
    </div>
  );
}
