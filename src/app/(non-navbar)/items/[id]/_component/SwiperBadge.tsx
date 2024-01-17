interface Props {
  slideIndex: number;
  slideLength: number;
}

const SwiperBadge = ({ slideIndex, slideLength }: Props) => {
  return (
    <div className="absolute flex items-center justify-center right-6 bottom-4 px-2 z-10 bg-grey-e rounded-lg web:px-3">
      <span className="text-[10px] text-black-6 font-light web:text-sm">
        {slideIndex + 1} / {slideLength}
      </span>
    </div>
  );
};

export default SwiperBadge;
