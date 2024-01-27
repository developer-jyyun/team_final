import { useRouter } from "next/navigation";
import Button from "@/app/_component/common/atom/Button";

interface Props {
  orderId?: number;
  packageId?: number;
}
const ReviewButton = ({ orderId, packageId }: Props) => {
  const router = useRouter();

  const handleReviewPageRedirect = () => {
    router.push(`/my/review?oid=${orderId}&pid=${packageId}`);
  };

  return (
    <Button
      text="리뷰 작성하기"
      styleClass="w-full rounded-xl text-xs font-semibold p-1 bg-pink text-white"
      onClickFn={handleReviewPageRedirect}
    />
  );
};

export default ReviewButton;
