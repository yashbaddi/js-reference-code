import { useSelector } from "react-redux";

export function Child4() {
  const data = useSelector((state) => state.someone);
  return (
    <div className="child child4">
      <span>This is a child 4 {data}</span>
    </div>
  );
}
