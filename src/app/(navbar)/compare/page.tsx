"use client";

import React, { useState, useEffect } from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import ChangeCompareProduct from "./_component/ChangeCompareProduct";
import WishListPage from "./_component/WishListPage";

interface Product {
  packageId: number;
  title: string;
  imageUrl: string;
  price: number;
  hashtags: string[];
  lodgeDays: number;
  tripDays: number;
}

interface SimilarProductsdata {
  code: number;
  data: Product[];
}

// 추천 상품 데이터를 가져오는 API 함수
const fetchSimilarProducts = async (
  fixedPackageId: number,
  page: number,
  pageSize: number,
): Promise<SimilarProductsdata> => {
  const response = await fetch(
    `/v1/packages/similar-packages?fixedPackageId=${fixedPackageId}&page=${page}&pageSize=${pageSize}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const responseData: SimilarProductsdata = await response.json();
  return responseData;
};

const Compare = () => {
  const [isCompareComplete, setIsCompareComplete] = useState(false);
  const [products, setProducts] = useState<Product[]>([]); // 현재 페이지의 상품들
  const [storedProducts, setStoredProducts] = useState<Product[]>([]); // 저장된 상품들
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [compareIndex, setCompareIndex] = useState(0); // 비교 상품 인덱스

  const handleCompareComplete = () => {
    setIsCompareComplete(true);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 추천 상품 데이터를 가져옴
    const fetchData = async () => {
      try {
        const responseData = await fetchSimilarProducts(0, currentPage, 10);
        if (Array.isArray(responseData.data)) {
          setProducts(responseData.data.slice(0, 5)); // 상품들의 첫 5개를 설정
          setStoredProducts(responseData.data.slice(5)); // 나머지 5개를 저장
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleRefresh = () => {
    // 새로고침 버튼을 클릭할 때의 로직
    // 배열의 다음 5개 항목으로 순환
    const nextIndex = (compareIndex + 1) % storedProducts.length;
    setCompareIndex(nextIndex);

    // 상품 목록 업데이트
    const newProducts = [
      ...storedProducts.slice(nextIndex, nextIndex + 4),
      ...storedProducts.slice(0, nextIndex),
    ].slice(0, 5);

    setProducts(newProducts);

    // setCurrentPage를 사용하여 페이지를 업데이트합니다.
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <DefaultHeader
        text={isCompareComplete ? "찜 리스트" : "1:1 비교"}
        iconSrc="/icons/refreshIcon.svg"
        iconUrl="#"
        iconAlt="새로고침"
        onIconClick={handleRefresh}
      />
      {isCompareComplete ? (
        <WishListPage />
      ) : (
        <ChangeCompareProduct
          products={products}
          onChange={handleCompareComplete}
        />
      )}
    </section>
  );
};

export default Compare;
