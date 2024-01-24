const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  if (cleaned.length <= 3) {
    return cleaned; // 3자리 이하일 경우 그대로 반환
  }
  const match = cleaned.match(/^(\d{3})(\d{3,4})?(\d{4})?$/);
  if (match) {
    return `${match[1]}-${match[2] ? match[2] : ""}${
      match[3] ? `-${match[3]}` : ""
    }`;
  }
  return phoneNumber;
};

export default formatPhoneNumber;
