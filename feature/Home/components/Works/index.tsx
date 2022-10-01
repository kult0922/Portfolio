import Section from '../Section'
import Work from './Work'

const Works = () => {
  return (
    <>
      <Section title="Works"></Section>
      <div className="mt-4 flex flex-wrap justify-center">
        <Work
          imagePath="/image/minecraft_dot.png"
          webUrl="https://www.minecraft-dot.pictures"
          codeUrl="https://github.com/kult0922/kurisakien"
          title="Minecraft Dot"
          description="写真をマインクラフトのドット絵に変換・編集できるアプリ"
        />
        <Work
          imagePath="/image/kurisakien.png"
          webUrl="https://kurisaki-en.com/"
          codeUrl="https://github.com/kult0922/minecraftDot"
          title="「栗崎園」ECサイト"
          description="お茶農家「栗崎園」ECサイト"
        />
      </div>
    </>
  )
}

export default Works
