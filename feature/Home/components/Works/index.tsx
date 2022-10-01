import Section from '../Section'
import Code from './Code'

const Works = () => {
  return (
    <>
      <Section title="Works"></Section>
      <div className="mt-4 flex flex-wrap justify-center">
        <div className="m-2">
          <a
            href="https://www.minecraft-dot.pictures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center">
              <img
                className="h-[240px] w-[400px] rounded-lg border-l-8 border-base"
                src="/image/minecraft_dot.png"
              ></img>

              <div className="text-xl text-base">Minecraft Dot</div>
              <div className="">
                写真をマインクラフトのドット絵に変換・編集できるアプリ
              </div>
            </div>
          </a>
          <Code url="https://github.com/kult0922/minecraftDot"></Code>
        </div>
        <div className="m-2">
          <a
            href="https://kurisaki-en.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center">
              <img
                className="h-[240px] w-[400px] rounded-lg border-l-8 border-base"
                src="/image/kurisakien.png"
              ></img>
              <div className="text-xl text-base">栗崎園 ECサイト</div>
              <div>お茶農家 「栗崎園」のECサイト</div>
            </div>
          </a>
          <Code url="https://github.com/kult0922/kurisakien"></Code>
        </div>
      </div>
    </>
  )
}

export default Works
