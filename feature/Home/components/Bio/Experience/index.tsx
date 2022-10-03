type Props = {
  year: string
  title: string
}

const Section: React.FC<Props> = ({ year, title }) => {
  return (
    <>
      <div className="flex">
        <div className="mr-4 text-base">{year}</div>
        <div className="">{title}</div>
      </div>
    </>
  )
}

export default Section
