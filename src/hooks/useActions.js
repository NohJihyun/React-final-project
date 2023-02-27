// context api 로  value 에 셋팅된 데이터를 전달하는 직접적인 방식이 아닌 hoos를 이용하는 방식 따로 빼서
import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  // 프로바이더에 세팅 되어 있는것을 Context api로 전체영역으로 사용할 데이터를 가져온다 직접전달 방식이 아닌 hooks을 이용한 방식이고, value에 데이터 및 함수를 적용시켜두었다
  // 가져온것을 그대로 return 해준다
  // state 상태를 주는게 아니라, 상태를 변경하는 함수 받아서 함수를 전달하는 hook이 된다
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);

  return { addToOrder, remove, removeAll };
}
