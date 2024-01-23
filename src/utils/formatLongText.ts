/*
  특정 길이 넘어가는 텍스트 말줄임표 가공하기
  parameters
  - originalText: string  (원본 텍스트)
  - textLimit: number     (제한할 길이)
  
  전달받은 문자열이 제한하고자 하는 길이를 초과한다면, 해당 길이만큼으로 문자열을 자르고 뒤에 ... 을 붙이는 식으로 가공해 반환합니다.
  textLimit의 길이 이하인 경우, 전달받았던 문자열을 그대로 반환합니다.
*/

const formatLongText = (originalText: string, textLimit: number) => {
  if (originalText.length > textLimit) {
    const trimmedText = originalText.substring(0, textLimit);
    return trimmedText.concat(" ...");
  }
  return originalText;
};

export default formatLongText;
