const renderStars = (averageScore: number) => {
  const totalStars = Array.from({ length: 5 }, (_, index) => index + 1);

  return totalStars.map((starNumber) => {
    if (starNumber <= Math.floor(averageScore)) {
      return (
        <img src="/icons/starIcon.svg" alt="노랑 별 아이콘" key={starNumber} />
      );
    } else if (
      starNumber === Math.ceil(averageScore) &&
      averageScore % 1 !== 0
    ) {
      return (
        <img
          src="/icons/starIconHalf.svg"
          alt="반쪽 별 아이콘"
          key={starNumber}
        />
      );
    } else {
      return (
        <img
          src="/icons/starIconGray.svg"
          alt="회색 별 아이콘"
          key={starNumber}
        />
      );
    }
  });
};

export default renderStars;
