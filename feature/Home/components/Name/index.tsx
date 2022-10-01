// 最小サイズは320
const Name = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[70px] -z-20 ml-[calc(50%_-_55vw)] h-[200px] w-[80vw] rounded-lg bg-base sm:ml-[0] xx:w-[350px]"></div>
        <div className="xs:w-[380px] absolute top-[100px] -z-10 ml-[calc(50%_-_55vw)] h-[140px] w-[90vw] rounded-r-lg bg-white sm:ml-0 xx:w-[400px]">
          <div className="pl-12 text-base">
            <div className="mt-6 text-3xl font-bold lg:text-4xl">
              Kazuma Kurisaki
            </div>
            <div>Web developper</div>
            <div className="xs:w-[320px] w-[230px] text-back sm:w-[400px]">
              趣味で個人開発をしているWebエンジニア
            </div>
          </div>
        </div>
        <div className="flex h-[fit-content] w-[fit-content] items-center justify-center rounded-md bg-white p-2 shadow-3xl">
          <img className="h-24 w-24 rounded-lg" src="/image/icon.jpg"></img>
        </div>
        <div className="flex">
          <div className="m-4 flex flex-col text-base"></div>
        </div>
      </div>
    </>
  )
}

export default Name
