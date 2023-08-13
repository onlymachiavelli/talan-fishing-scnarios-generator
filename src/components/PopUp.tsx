const PopSmoke = ({ ...props }) => {
  return (
    <div
      className="w-full h-screen fixed felx items-center justify-center  top-0 bg-[#000000cb]"
      style={{
        display: props.Display,
      }}
    >
      <div className="w-2/3  h-auto p-10 bg-[#273f4f] border border-[#ffffff93]  rounded shadow-xl">
        {props.children}
      </div>
    </div>
  )
}

export default PopSmoke
