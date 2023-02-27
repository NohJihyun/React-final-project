// [[상품리스트 부분에 데이터를 map돌면서 프로토타입을 하나씩 꺼내서 ui로 만들어주면 된다  ]]
//import AppStateContext from "../contexts/AppStateContext";
import usePrototype from "../hooks/usePrototypes";
import useActions from "../hooks/useActions";

export default function Prototypes() {
  // 상위에 있었던 prototypes 변수에 있는 데이터를 옮겨서 데이터를 context를 활용해서 가져온다 메인페이지 데이터들
  // prototypes 가 value {{데이터가 여러개여서}} prototypes {} 객체만 꺼내온다.
  // 즉, provider컴포넌트에 데이터를 전체전역데이터로 셋팅된것을 AppStateContext통해서, api useContext로 실행해 가져오게 되면  prototypes변수는  데이터를 갖고있는 객체가 된다.
  //const { prototypes } = useContext(AppStateContext);   [[ 직접 api context로 value에 셋팅된 prototype state 데이터를 받아서 사용하는것을 꺼내서 사용하는 방식으로 hooks사용 아래로직]]
  //[[hooks 으로 데이터를 받아서 꺼내서 사용한다 만든 hook 함수를 실행한다 usePrototype()]]
  const prototypes = usePrototype();
  //[[context api 를 이용해 직접 전달 받는 방식이 아닌 hooks를 이용해서 state 및 라이프싸이클 관련하여 전달을 받는데 데이터가 아님 함수를 전달받는다.]]
  const { addToOrder } = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototypes) => {
          //prototypes 부터 하나하나빼온다
          //jsx element를 리턴 | 최적화 key꼭 고유한 식별자로 넣는다. prototypes provider에 초기값 배열데이터서 하나하나씩 가져온다.
          const { id, thumbnail, title, price, desc, pieUrl } = prototypes;
          //[[+버튼을 누르면 add to order 하기 함수동작하는 부분을 id넣고 만들어준다. ]]
          const click = () => {
            addToOrder(id);
          };

          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                />
                <div>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype_edit"
                    src={thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
              {/* + 버튼 있는곳에서 onclick 함수 연결해주기 */}
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
