const PopSmoke = ({ ...props }, { children }: any) => {
  return (
    <div
      className="w-full h-screen fixed top-0 bg-[#00000098]"
      style={{
        display: props.Display,
      }}
    >
      <div className=""></div>
    </div>
  )
}

export default PopSmoke
