import { useRouter } from "next/navigation";

interface Props {
  value: string;
  disabled: boolean;
  handleDelete: (selected: string) => string;
}

const Option = ({ value, disabled, handleDelete }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.replace(`/search-result${handleDelete(value)}`);
  };
  return (
    <div className="flex items-center px-2 py-1 bg-pink-3 rounded-[12px]">
      <span className="mr-1 text-black-4 text-center text-sm font-medium">
        {value}
      </span>
      {!disabled && (
        <div onClick={handleClick} className="p-0.5 w-3 h-3">
          <img src="/icons/deleteIcon.svg" alt="삭제 아이콘" />
        </div>
      )}
    </div>
  );
};

export default Option;
