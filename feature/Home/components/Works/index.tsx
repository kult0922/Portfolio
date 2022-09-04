import Section from '../Section'

const Works = () => {
  return (
    <>
      <Section title="Works"></Section>
      <div className="flex justify-center">
        <div>
          <a
            href="https://www.minecraft-dot.pictures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-[400px] rounded-lg"
                src="/image/minecraft_dot.png"
              ></img>

              <div className="text-xl">Minecraft Dot</div>
              <div>写真をマインクラフトのドット絵に変換し編集できるアプリ</div>
            </div>
          </a>

          <a
            href="https://kurisaki-en.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-[400px] rounded-lg"
                src="/image/kurisakien.png"
              ></img>
              <div className="text-xl">栗崎園 ECサイト</div>
              <div>お茶農家 「栗崎園」のECサイト</div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Works
