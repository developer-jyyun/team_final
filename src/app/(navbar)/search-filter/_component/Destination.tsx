import type { DestinationItem } from "@/app/types";

interface Props {
  data: DestinationItem;
}

const Destination = ({ data }: Props) => {
  return (
    <div className="w-[98px]">
      <div className="w-full h-[100px] py-2.5 px-[9px] bg-grey-e rounded-[12px]">
        <img
          src={data.imageUrl}
          alt={`${data.name} 이미지`}
          className="w-20 h-20"
        />
      </div>
      <p className="text-base font-medium leading-5 tracking-tighter text-center py-2">
        {data.name}
      </p>
    </div>
  );
};

export default Destination;
