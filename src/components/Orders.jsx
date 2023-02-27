// Orders 컴포넌트
// 최초의 상품리스트 화면에서 클릭으로 상품이 담길시 그려내는 화면
// 프로바이더에 셋팅된 데이터를 hooks 로 전달받아 화면에 그려내기 위해서 render  hooks를 import  한다
import { useMemo } from "react";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Orders() {
  //[[hooks 으로 데이터를 받아서 꺼내서 사용한다 만든 hook 함수를 실행한다 ()]]
  //즉, 앞전 컴포넌트처럼 프로바이더에 초기값 데이터가 셋팅이 되어있는것을 context api 데이터를 받아서 hook을 이용해서 따로빼서 데이터를 컴포넌트에 이관하는 작업
  const orders = useOrders();
  //[[ 프로바이더에 있는 프로토타입에 데이터 썸네일을 contex api를 통해 데이터를 받아 hooks를 이용해서 전달받는다. 만들어둔 hook을 임폴트]]
  const prototypes = usePrototypes();
  //[[context api 로 데이터 뿐만이 아니라 함수도 전달을 하는데 useAction hooks 에서 처리를 해두었기 때문에 import 받아서 함수를 제공 받으면 된다 실제 실행될 함수를 ]]
  const { remove, removeAll } = useActions();

  //[[토탈금액]]
  //useMemo() 재사용된 값을 반환하는 훅이다 데이터의 많은 가공이 필요할때 적합 첫렌더가 실행되고 , 매번 함수를 실행하는것이 아닌 캐시된 데이터를 반환해 보여준다.
  //언제 다시 계산되냐
  //[] 디펜던씨는 order에 따라서 달라진다 prototypes는 우리 프로젝트에서 변하지 않기 때문에 orders가 변하면 다시 계산된다고 생각하면 된다.
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  //console.log(orders);

  //[[상품이 담겼을시에 데이터가 없는 화면 ui가 나오는데, 어떤품목이 또한 품목에 가격합산 처리를 해줘야 한다 데이터가 있었을시]]
  //첫번째로 orders가 0이면 empty를 보여주는 형식으로 작성한다
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );
  }
  //orders 영역 버튼 + 클릭시에 데이터가 있는 부분을 그린다. 몇개의 품목과 가격이 나와야한다
  //두번째로 0이 아니일때 데이터가 있을때 보여주는 소스 작성
  return (
    <aside>
      <div className="order">
        <div className="body">
          {/* order 상태의 초기값에서 map돌면서 order를 꺼낸다 map을 돌리고 있어서 key={} 있어야 하고 key order에서 나온 id면 된다 */}
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
