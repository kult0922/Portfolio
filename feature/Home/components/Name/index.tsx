// 最小サイズは320
const Name = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-base absolute top-[70px] -z-20 ml-[calc(50%_-_55vw)] h-[360px] w-[380px] rounded-lg sm:ml-[0] sm:w-[400px]"></div>
        <div className="xs:w-[400px] absolute top-[100px] -z-10 ml-[calc(50%_-_55vw)] h-[300px] w-[430px] rounded-r-lg bg-white sm:ml-0 sm:w-[480px]">
          <div className="pl-12 text-base">
            <div className="mt-6 text-3xl font-bold lg:text-4xl">
              Kazuma Kurisaki
            </div>
            <div>Web developper</div>
            <div className="text-back xs:w-[320px] w-[230px] sm:w-[400px]">
              吾輩わがはいは猫である。名前はまだ無い。
              どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
              吾輩はここで始めて人間というものを見た。
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
