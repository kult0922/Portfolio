type Props = {
  title: string
}

const Section: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="text-2xl text-white decoration-4">{title}</div>
      <div className="w-[100%] border-b border-white"></div>
    </>
  )
}

export default Section
