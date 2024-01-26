"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChangeCompareProduct from "./_component/ChangeCompareProduct";
import WishListPage from "./_component/WishListPage";

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
  const [compareIndex, setCompareIndex] = useState(0); // 비교 상품 인덱스

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

  useEffect(() => {
    if (!searchParam.get("lid")) {
      return;
    }
    const fetchData = async () => {
      try {
        const responseData = await fetchSimilarProducts(
          !searchParam.get("rid")
            ? Number(searchParam.get("lid"))
            : Number(searchParam.get("rid")) || 24042217462,
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
  }, [currentPage, searchParam.get("rid"), searchParam.get("lid")]);

  useEffect(() => {
    if (compareIndex === 6) {
      setCurrentPage((prevPage) => prevPage + 1);
      setCompareIndex(0);
    }
  }, [compareIndex]);

  // console.log(currentItem);

  const handleRefresh = () => {
    setCurrentItem(storedProducts[compareIndex]);
    setCompareIndex((prevPage) => prevPage + 1);
  };

  return isCompareComplete ? (
    <section>
      <DefaultHeader text="찜 리스트" />
      <WishListPage
        statusA={statusA}
        statusB={statusB}
        setIsCompareComplete={setIsCompareComplete}
        setCompareIndex={setCompareIndex}
      />
    </section>
  ) : (
    <section>
      <DefaultHeader
        text={"1:1 비교"}
        iconSrc="/icons/refreshIcon.svg"
        iconAlt="새로고침"
        onIconClick={handleRefresh}
      />
      {isCompareComplete ? (
        <WishListPage
          statusA={statusA}
          statusB={statusB}
          setIsCompareComplete={setIsCompareComplete}
          setCompareIndex={setCompareIndex}
        />
      ) : (
        <ChangeCompareProduct
          products={products}
          compared={currentItem as CompareProduct}
          compareIndex={compareIndex}
          setCompareIndex={setCompareIndex}
          onChangeA={handleCompareCompleteA}
          onChangeB={handleCompareCompleteB}
          setIsCompareComplete={setIsCompareComplete}
        />
      )}
    </section>
  );
};

export default Compare;
