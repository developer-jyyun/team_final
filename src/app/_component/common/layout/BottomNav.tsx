import IconButton from "../atom/IconButton";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full h-[56px] bg-white flex justify-center items-center">
      <ul className="w-[500px] flex justify-around">
        <li>
          <IconButton
            href="/"
            text="홈"
            basic="./icons/navHomeIcon.svg"
            active="./icons/navHomeIcon.svg"
          />
        </li>
        <li>
          <IconButton
            href="/search"
            text="검색"
            basic="./icons/navSearchIcon.svg"
            active="./icons/navSearchActiveIcon.svg"
          />
        </li>
        <li>
          <IconButton
            href="/heart"
            text="찜"
            basic="./icons/navHeartIcon.svg"
            active="./icons/navHeartActiveIcon.svg"
          />
        </li>
        <li>
          <IconButton
            href="/my"
            text="마이"
            basic="./icons/navMyIcon.svg"
            active="./icons/navHomeIcon.svg"
          />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
