type Props = {
  url: string
}

const Code = ({ url }: Props) => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src="/image/GitHub-Mark-Light-64px.png"
          width={24}
          className="mr-2"
        ></img>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Code
        </a>
      </div>
    </>
  )
}

export default Code
