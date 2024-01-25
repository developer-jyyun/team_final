"use client";

import React from "react";
import usePackageListQuery from "@/hooks/query/usePackageListQuery";
import type { PackageInfo } from "@/app/types";
import Package from "./Package";
import SkeletonItem from "./SkeletonItem";

const PackagesList = () => {
  const { data, isLoading } = usePackageListQuery();

  if (isLoading)
    return (
      <div className="flex gap-3 overflow-auto">
        {[0, 1, 2].map((item) => (
          <SkeletonItem key={item} />
        ))}
      </div>
    );

  return (
    <div className="h-[263px] overflow-auto whitespace-nowrap last:mr-0">
      {data?.data.map((item: PackageInfo) => (
        <Package key={item.packageId} data={item} />
      ))}
    </div>
  );
};

export default PackagesList;
