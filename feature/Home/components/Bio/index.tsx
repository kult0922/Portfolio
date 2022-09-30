import Experience from '../Experience'
import Section from '../Section'

const Bio = () => {
  return (
    <div className="">
      <Section title="Bio"></Section>
      <div className="mt-4">
        <Experience
          year="2019"
          title="千葉大学融合理工学府 情報科学先行 修士課程 卒業"
        ></Experience>
        <Experience year="2019" title="楽天株式会社 入社"></Experience>
      </div>
    </div>
  )
}

export default Bio
