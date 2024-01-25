import React from "react";
import WishListInfo from "./WishListInfo";

interface Props {
  statusA: boolean;
  statusB: boolean;
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setCompareIndex: React.Dispatch<React.SetStateAction<number>>;
}

const WishListPage = ({
  statusA,
  statusB,
  setIsCompareComplete,
  setCompareIndex,
}: Props) => {
  return (
    <div className="ml-6">
      <WishListInfo
        statusA={statusA}
        statusB={statusB}
        setIsCompareComplete={setIsCompareComplete}
        setCompareIndex={setCompareIndex}
      />
    </div>
  );
};
export default WishListPage;
