import Experience from './Experience'
import Section from '../Section'

const Bio = () => {
  return (
    <div className="">
      <Section title="Bio"></Section>
      <div className="mt-4">
        <Experience
          year="2019"
          title="千葉大学 情報画像学科 学士課程 卒業"
        ></Experience>
        <Experience
          year="2021"
          title="千葉大学融合理工学府 情報科学専攻 修士課程 卒業"
        ></Experience>
        <Experience year="2021" title="楽天株式会社 入社"></Experience>
      </div>
    </div>
  )
}

export default Bio
