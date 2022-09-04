type Props = {
  title: string
}

const Section: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="text-2xl underline decoration-green-400 decoration-4">
        {title}
      </div>
    </>
  )
}

export default Section
