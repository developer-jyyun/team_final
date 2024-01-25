interface Props {
  slideIndex: number;
  slideLength: number;
  thema?: string;
}

const SwiperBadge = ({ slideIndex, slideLength, thema }: Props) => {
  return (
    <div
      className={`absolute flex items-center justify-center ${
        thema ? "right-10" : "right-6"
      } bottom-4 px-2 z-10 bg-grey-e rounded-lg web:px-3`}
    >
      <span className="text-[10px] text-black-6 font-light web:text-sm">
        {slideIndex + 1} / {slideLength}
      </span>
    </div>
  );
};

export default SwiperBadge;
