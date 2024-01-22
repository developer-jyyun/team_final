import PaymentMain from "./_component/PaymentMain";

export interface CompleteData {
  orderCode: number;
  myInfo: {
    username: string;
    email: string;
  };
}

const Payment = () => {
  return (
    <section>
      <PaymentMain />
    </section>
  );
};

export default Payment;
