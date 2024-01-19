import type { PackageReview } from "@/app/types";

interface Props {
  review: PackageReview;
}

const ReviewItem = ({ review }: Props) => {
  return (
    <li className="w-full flex flex-col gap-3 mb-[29px]">
      <h2 className="font-semibold max-w-[93%] truncate web:text-lg">
        {review.content}
      </h2>
      <div className="flex gap-[23px] items-center text-xs web:text-sm">
        <div className="flex gap-1">
          <img
            src="/icons/starIconMini.svg"
            alt="별 아이콘"
            className="web:w-4"
          />
          <span className="text-black-2">{review.averageStars}</span>
        </div>
        <span className="text-black-8"> {review.createdAt}</span>
      </div>
      <div className="flex justify-between text-xxs font-medium web:text-sm">
        <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent web:px-2">
          <dt className="text-black-4 ">상품구성</dt>
          <dd className="text-pink-main"> {review.productScore}</dd>
        </dl>
        <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent web:px-2">
          <dt className="text-black-6">가이드 친절도</dt>
          <dd className="text-pink-main"> {review.guideScore}</dd>
        </dl>

        <div className="flex gap-1 p-1 rounded-xl bg-pink-transparent web:px-2">
          <span className="text-black-6">일정구성</span>
          <span className="text-pink-main"> {review.scheduleScore}</span>
        </div>

        <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent web:px-2">
          <dt className="text-black-6">가이드 시간/일정준수</dt>
          <dd className="text-pink-main"> {review.appointmentScore}</dd>
        </dl>
      </div>
    </li>
  );
};

export default ReviewItem;
