"use client";

import useGetWishListQuery from "@/hooks/query/useGetWishListQuery";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import MyPicProduct from "./MyPicProduct";
import WishListNone from "./WishListNone";

interface WishProduct {
  hashtags: string[];
  imageUrl: string;
  lodgeDays: number;
  minPrice: number;
  nationName: string;
  packageId: number;
  title: string;
  tripDays: number;
}

interface Props {
  statusA?: boolean;
  statusB?: boolean;
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const WishListInfo = ({
  statusA = false,
  statusB = true,
  setIsCompareComplete,
}: Props) => {
  const router = useRouter();

  const {
    data: wish,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetWishListQuery();

  const boxRef = useRef(null);

  useEffect(() => {
    const currentRef = boxRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isFetching && hasNextPage) {
            fetchNextPage();
          }
        }
      },
      { threshold: 0.5 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isFetching, hasNextPage, fetchNextPage]);

  if (wish?.pages[0].data.length === 0) {
    return <WishListNone />;
  }

  // console.log(wish);

  return (
    <div>
      <div className="my-7">
        <h3 className="text-black-2 text-lg font-semibold">
          총{" "}
          <b className="text-pink-main">
            {wish?.pages[0].page.totalElements || 0}
          </b>
          개의 패키지 상품
        </h3>
      </div>
      {!wish ? (
        <button
          type="button"
          onClick={() => {
            router.push("/signin");
          }}
          className="border-[1px] border-solid border-pink text-pink rounded-[6px] px-2 py-1 m-3"
        >
          로그인 하러 가기
        </button>
      ) : (
        <>
          {wish?.pages.map((item, index) => {
            return (
              <div key={index}>
                {item.data.map((my: WishProduct, ItemIndex: number) => {
                  return (
                    <MyPicProduct
                      key={ItemIndex}
                      hashtags={my.hashtags}
                      id={my.packageId}
                      imageUrl={my.imageUrl}
                      lodgeDays={my.lodgeDays}
                      price={my.minPrice}
                      title={my.title}
                      tripDays={my.tripDays}
                      statusA={statusA}
                      statusB={statusB}
                      setIsCompareComplete={setIsCompareComplete}
                    />
                  );
                })}
              </div>
            );
          })}
          <div ref={boxRef} className="w-full h-24" />
        </>
      )}
    </div>
  );
};
export default WishListInfo;
