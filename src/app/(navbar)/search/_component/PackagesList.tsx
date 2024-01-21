"use client";

import React from "react";
import usePackageListQuery from "@/hooks/query/usePackageListQuery";
import type { PackageInfo } from "@/app/types";
import Package from "./Package";

const PackagesList = () => {
  const { data, isLoading } = usePackageListQuery();

  if (isLoading) return <div>스켈렙톤 할 수 있으까,,</div>;

  return (
    <div className="h-[263px] overflow-auto whitespace-nowrap last:mr-0">
      {data?.data.map((item: PackageInfo) => <Package data={item} />)}
    </div>
  );
};

export default PackagesList;
