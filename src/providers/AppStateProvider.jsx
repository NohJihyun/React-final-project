//Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.
import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
//함수에 인자로 props 기본 props인 childern이 들어온다
//컴포넌트를 <AppStateContext.Provider> 사용하는데 provider value를 넣어줄수 있다 | value ={} 값을 {} 형태로 넣어준다
const AppStateProvider = ({ children }) => {
  // 기존앞전에 만들었던 물건들의 상태도 state로 가지고 있어야 한다. prototyes 변수에 담긴 데이터를 말한다
  // Prototypes.jsx 에있었던 데이터를 초기값으로 가져다가 useState에 셋팅해준다
  const [prototypes] = useState([
    {
      id: "pp-01",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "macOS Folder Concept",
      artist: "Dominik Kandravý",
      desc: "Folder concept prototype by Dominik Kandravý.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
      price: 30,
      pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
    },
    {
      id: "pp-04",
      title: "Translator",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
      price: 40,
      pieUrl: "https://cloud.protopie.io/p/b91edba11d",
    },
    {
      id: "pp-05",
      title: "In-car voice control",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",
      price: 50,
      pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
    },
    {
      id: "pp-06",
      title: "The Adventures of Proto",
      artist: "Richard Oldfield",
      desc: `Made exclusively for Protopie Playoff 2021
                    Shout up if you get stuck!
                    For the full experience. View in the Protopie App.
                    #PieDay #PlayOff #ProtoPie`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",
      price: 60,
      pieUrl: "https://cloud.protopie.io/p/95ee13709f",
    },
    {
      id: "pp-07",
      title: "Sunglasses shop app",
      artist: "Mustafa Alabdullah",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",
      price: 70,
      pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
    },
    {
      id: "pp-08",
      title: "Alwritey—Minimalist Text Editor",
      artist: "Fredo Tan",
      desc: `This minimalist text editor prototype was made with ProtoPie by Fredo Tan.
                    ---
                    Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.
                    ---
                    ProtoPie is an interactive prototyping tool for all digital products.
                    ---
                    Learn more about ProtoPie at https://protopie.io.`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",
      price: 80,
      pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
    },
    {
      id: "pp-09",
      title: "Voice search for TV",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
    },
    {
      id: "pp-10",
      title: "Finance App Visual Interaction 2.0",
      artist: "Arpit Agrawal",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
      price: 90,
      pieUrl:
        "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
    },
    {
      id: "pp-11",
      title: "Whack-a-mole",
      artist: "Changmo Kang",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/ab796f897e",
    },
    {
      id: "pp-12",
      title: "Voice Note",
      artist: "Haerin Song",
      desc: `Made by Haerin Song
                    (Soda Design)`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
  ]);
  // // state 영역 | [첫번째인자 값지정 | 두번째인자 값변경 ] | userState() 초기값
  // //AppStateProvider안에 useState 활용해서 상태를 갖고 있도록한다
  // //기존데이터도 상태로 갖고 있어야 하며 prototypes, order에 물건을 넣는 함수를 만들어서 같이 사용해야 해서 addToOrder 함수를 value에 같이 넣어둔다
  // // remove 해당 order도 삭제한다 또한 전체주문을 취소하기 위해서 removeAll도 value값에 넣는다
  const [orders, setOrders] = useState([]);
  // [{id, quantity: 1}]
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  // [[ 바로 상위로 직을 학습하면서 정리해둔 똑같은 소스이다 주석처리된 소스는 ]]
  // // [] 디펜던씨리스트 없는 최초에 그려지는 함수를 value에 셋팅을 해준다.
  // // 상위 orders 상태의 addToOrder가 클릭되서 상품이 담기는 작업의 로직을 만들어준다.
  // // 어떤 상품을 addToOrder 할건지 id를 넣어주면 된다. | 어떤 상품을 + 클릭시 담기는 작업을 한다.
  // // orders라는 상태의 addToOrder가 실행이 되면은 | id를 체크하고 | 한번클릭시와 두번클릭시의 데이터 구조를 만든다 [{id, quantity:1}]
  // const addToOrder = useCallback((id) => {
  //   // setOrders 을 함수를 실행하는데, 데이터를 넣는게 아니라 함수를 넣는다 orders를 받아서 새로운 데이터를 return 해준다
  //   // 상품이 이미 id가 있는 케이스면 , quantity 만올려준다 , 없으면 새로추가 | 상품이 있는지 없는지 여부 판단
  //   setOrders((orders) => {});
  //   // 인자로 들어온 id 와 order상태의 id 를 비교해 찾는다
  //   const finded = orders.find((order) => order.id === id);
  //   // 있으면 finded가 어떠한 데이터일것이고, 아니면 undefinend 일것 이다
  //   // 데이터가 없음면
  //   if (finded === undefined) {
  //     //구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
  //     //분해해서 ...order를 넣어주고  뒷부분에 새로 데이터를 만들어서 리턴한다.
  //     return [...orders, { id, quantity: 1 }];
  //   } else {
  //     // + 클릭시 상품을 담을때 앞전 데이터가 있다면 quantity만 한자리 올려주면 된다. | orders 상태에서 map() 돌린다 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.
  //     // map() 돌린 결과물이 새로운 orders 객체가 된다. 같은 reference 를 참조하지 않는다.
  //     // map 돌면서 order를 꺼낸다음에 order.id가 id 와 같으면 id는 id가 quantity +1
  //     return orders.map((order) => {
  //       if (order.id === id) {
  //         return {
  //           id,
  //           quantity: order.quantity + 1,
  //         };
  //       } else {
  //         return order;
  //       }
  //     });
  //   }
  // }, []);

  // addToOrder 들어간 상품 삭제
  const remove = useCallback((id) => {
    // order 받고 리턴할때 order를 필터해서 order 얻어서 order.id 와 인자로 들어오는 id와 다르면 새로운 배열로 만들어진다.
    setOrders((order) => {
      return order.filter((order) => order.id !== id);
    });
  }, []);
  // 전체주문 취소는 id 상관없이 [] 빈배열로 셋팅해주면 전체주문 취소가 된다.
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);
  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
