"use client";

import useThemeQuery from "@/hooks/query/useThemeQuery";
import { useParams } from "next/navigation";

const ThemeDetail = () => {
  const params = useParams();
  const { data } = useThemeQuery(params.id, "departure_date", 1, 10);
  console.log(data);
  return <div>2</div>;
};

export default ThemeDetail;
