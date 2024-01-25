import React from "react";
import WishListInfo from "./WishListInfo";

interface Props {
  statusA: boolean;
  statusB: boolean;
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const WishListPage = ({ statusA, statusB, setIsCompareComplete }: Props) => {
  return (
    <div className="ml-6">
      <WishListInfo
        statusA={statusA}
        statusB={statusB}
        setIsCompareComplete={setIsCompareComplete}
      />
    </div>
  );
};
export default WishListPage;
