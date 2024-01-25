"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChangeCompareProduct from "./_component/ChangeCompareProduct";
import WishListPage from "./_component/WishListPage";

// interface Product {
//   packageId: number;
//   title: string;
//   imageUrl: string;
//   price: number;
//   hashtags: string[];
//   lodgeDays: number;
//   tripDays: number;
// }

interface CompareProduct {
  hashtags: string[];
  imageUrl: string;
  isWish: false;
  lodgeDays: number;
  minPrice: number;
  nationName: string;
  packageId: number;
  title: string;
  tripDays: number;
}

interface SimilarProductsdata {
  code: number;
  data: CompareProduct[];
}

// 추천 상품 데이터를 가져오는 API 함수
const fetchSimilarProducts = async (
  fixedPackageId: number,
  page: number,
  pageSize: number,
): Promise<SimilarProductsdata> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/similar-packages?fixedPackageId=${fixedPackageId}&page=${page}&pageSize=${pageSize}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const responseData: SimilarProductsdata = await response.json();
  return responseData;
};

const Compare = () => {
  const searchParam = useSearchParams();

  const [isCompareComplete, setIsCompareComplete] = useState(false);

  const [products, setProducts] = useState<CompareProduct[]>([]); // 현재 페이지의 상품들
  const [storedProducts, setStoredProducts] = useState<CompareProduct[]>([]); // 저장된 상품들

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [compareIndex, setCompareIndex] = useState(-1); // 비교 상품 인덱스

  const [currentItem, setCurrentItem] = useState<CompareProduct | null>(null);

  const [statusA, setStatusA] = useState(false);
  const [statusB, setStatusB] = useState(false);

  const handleCompareCompleteA = () => {
    setIsCompareComplete(true);
    setStatusA(true);
    setStatusB(false);
  };
  const handleCompareCompleteB = () => {
    setIsCompareComplete(true);
    setStatusA(false);
    setStatusB(true);
  };

  // console.log(searchParam.get("lid"));
  // console.log(searchParam.get("rid"));
  // lid=24020823618&rid=24033121265
  useEffect(() => {
    // 컴포넌트가 마운트될 때 추천 상품 데이터를 가져옴

    if (!searchParam.get("rid")) {
      return;
    }
    const fetchData = async () => {
      try {
        const responseData = await fetchSimilarProducts(
          Number(searchParam.get("rid")),
          currentPage,
          10,
        );
        if (Array.isArray(responseData.data)) {
          setProducts(responseData.data.slice(0, 5)); // 상품들의 첫 5개를 설정
          setStoredProducts(responseData.data.slice(5)); // 나머지 5개를 저장
          setCurrentItem(responseData.data.slice(5)[1]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (compareIndex === 6) {
      setCurrentPage((prevPage) => prevPage + 1);
      setCompareIndex(1);
    }
    // console.log(currentItem);
  }, [compareIndex]);

  // useEffect(() => {
  //   console.log(products, storedProducts);
  // }, [products, storedProducts]);

  // console.log(currentItem);
  const handleRefresh = () => {
    // console.log(1);
    // console.log(storedProducts[compareIndex]);
    setCurrentItem(storedProducts[compareIndex]);
    // 새로고침 버튼을 클릭할 때의 로직
    // 배열의 다음 5개 항목으로 순환
    // const nextIndex = (compareIndex + 1) % storedProducts.length;
    // setCompareIndex(nextIndex);

    // 상품 목록 업데이트
    // const newProducts = [
    //   ...storedProducts.slice(nextIndex, nextIndex + 4),
    //   ...storedProducts.slice(0, nextIndex),
    // ].slice(0, 5);

    // setProducts(newProducts);

    // setCurrentPage를 사용하여 페이지를 업데이트합니다.
    setCompareIndex((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <DefaultHeader
        text={isCompareComplete ? "찜 리스트" : "1:1 비교"}
        iconSrc="/icons/refreshIcon.svg"
        iconAlt="새로고침"
        onIconClick={handleRefresh}
      />
      {isCompareComplete ? (
        <WishListPage
          statusA={statusA}
          statusB={statusB}
          setIsCompareComplete={setIsCompareComplete}
        />
      ) : (
        <ChangeCompareProduct
          products={products}
          compared={currentItem as CompareProduct}
          compareIndex={compareIndex}
          onChangeA={handleCompareCompleteA}
          onChangeB={handleCompareCompleteB}
          // setCurrentItem={setCurrentItem}
          setIsCompareComplete={setIsCompareComplete}
        />
      )}
    </section>
  );
};

export default Compare;
