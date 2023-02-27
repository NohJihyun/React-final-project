// 특별한 로직이 없고 비쥬얼적인 로직만 있어서 gitHub에서 소스 가져다 붙였다
export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">Awesome Prototypes in Shop</div>
        <div className="subtitle">
          Check out what other designers have created using ProtoPie—download
          these examples to learn exactly how they made their interactions.
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>Try ProtoPie Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}
