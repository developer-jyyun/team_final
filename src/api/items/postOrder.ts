import type { Price } from "@/app/types";

interface Props {
  packageId: number;
  availableDateId: number;
  requestMessage: string;
  cancelFeeAgreement: boolean;
  numberOfPeople: Price;
}

const postOrder = async (body: Props) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      },
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postOrder;
