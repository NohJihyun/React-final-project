// context api 로  프로바이더에 value 에 셋팅된 데이터를 전달하는 직접적인 방식이 아닌 전달하는 방식
import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototype() {
  // 이 hook 안에서 다른 hook을 사용할수 있기 때문에
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
