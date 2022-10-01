import Code from './Code'

type Props = {
  webUrl: string
  codeUrl: string
  imagePath: string
  title: string
  description: string
}

const Work = ({ webUrl, codeUrl, imagePath, title, description }: Props) => {
  return (
    <>
      <div className="m-2">
        <a href={webUrl} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center">
            <img
              className="h-[240px] w-[400px] rounded-lg border-l-8 border-base"
              src={imagePath}
            ></img>

            <div className="mt-2 text-xl text-base">{title}</div>
            <div className="">{description}</div>
          </div>
        </a>
        <div className="mt-1">
          <Code url={codeUrl}></Code>
        </div>
      </div>
    </>
  )
}

export default Work
