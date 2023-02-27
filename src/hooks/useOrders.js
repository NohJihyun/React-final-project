// context api 로  프로바이더에 value 에 셋팅된 데이터를 전달하는 직접적인 방식이 아닌 전달하는 방식
import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);

  return orders;
}
