export default function Image({route} : {route: string}) {
  return (
    <div className="">
        <img className="img-fluid" src={route} />
    </div>
  )
}
