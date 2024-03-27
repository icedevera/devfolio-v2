import './cube.css'

const Cube: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center gap-40 pt-20">
      <figure className="cube">
        <div className="face front">
          <div className="innerFace colorOne"></div>
          <div className="frontInner"></div>
        </div>
        <div className="face top">
          <div className="innerFace colorTwo"></div>
          <div className="topInner"></div>
        </div>
        <div className="face right">
          <div className="innerFace colorTwo"></div>
          <div className="rightInner"></div>
        </div>
        <div className="face left">
          <div className="innerFace colorTwo"></div>
          <div className="leftInner"></div>
        </div>
        <div className="face bottom">
          <div className="innerFace colorTwo"></div>
          <div className="bottomInner"></div>
        </div>
        <div className="face back">
          <div className="innerFace colorTwo"></div>
          <div className="backInner"></div>
        </div>
        <div className="coverX"></div>
        <div className="coverY"></div>
        <div className="coverZ"></div>
      </figure>
    </div>
  )
}

export default Cube
