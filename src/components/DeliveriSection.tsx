export default function DeliveriSection() {
  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/images/bannersImg/Bbg1.png")`,
      }}
      className="flex bg-cover bg-center bg-no-repeat h-48 md:h-80 lg:h-[640px] items-center xl:h-[500px] 2xl:h-[700px]"
    >
      <div className="flex justify-center w-11/12 md:w-3/5 gap-x-1 mx-auto items-center md:text-xl lg:text-2xl">
        <div className="flex flex-col gap-y-10 lg:gap-y-40 lg:text-3xl ">
          <h2 className="border-white border-b-3  text-white lg:text-2xl lg:text-4xl  font-bold">
            Pedidos Ya
          </h2>
          <h2 className="text-white lg:text-2xl lg:text-4xl 2xl:text-4xl font-bold">
            Uber Eats
          </h2>
        </div>
        <img
          src="/src/assets/images/bannersImg/delivery.png"
          className={`w-52 -top-12 mt-10 md:w-96 md:translate-x-1/4 lg:w-3/5 2xl:max-w-[1100px] `}
        />
      </div>
    </div>
  );
}
