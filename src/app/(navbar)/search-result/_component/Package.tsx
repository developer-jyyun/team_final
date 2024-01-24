import LikeButton from "@/app/_component/common/atom/LikeButton";
import type { PackageInfo } from "@/app/types";
import Link from "next/link";

interface Props {
  data: PackageInfo;
}
const Package = ({ data }: Props) => {
  // console.log(data);
  return (
    <Link
      href={`/items/${data.packageId}`}
      className="my-5 flex flex-col gap-2 w-[155px]"
    >
      <div className="relative h-[120px] rounded-[12px] overflow-hidden">
        <img
          className="object-cover w-full"
          src={data.imageUrl}
          alt="대표 이미지"
        />
        <LikeButton id={data.packageId} isWish={data.isWish} />
      </div>
      <div className="w-full overflow-hidden flex flex-col gap-2">
        <p className="text-[10px] font-normal text-black-6">
          {data.nationName}
        </p>
        <p className="h-[44px] text-lg text-wrap text-black-2 font-bold leading-6 text-ellipsis line-clamp-2">
          {data.title}
        </p>
        <p className="text-[13px] text-black-4 font-medium">
          {data.minPrice.toLocaleString()}원~
        </p>
      </div>
    </Link>
  );
};

export default Package;
