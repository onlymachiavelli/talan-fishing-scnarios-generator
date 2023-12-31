const Reactions = ({ ...props }) => {
  return (
    <div className="w-11/12 m-auto  bg-[#273f4f] border border-[#ffffff99] rounded-full flex items-center p-3 mt-10 relative">
      <select
        name=""
        id=""
        className="bg-[#273f4f] text-white outline-none cursor-pointer"
        value={props.Re}
        onChange={props.Option}
      >
        <option value="">Choose</option>
        {props.Reactions &&
          props.Reactions.map((reaction: any, ind: any) => {
            return (
              <option key={ind} value={reaction}>
                {reaction}
              </option>
            )
          })}
      </select>

      <input
        type="text"
        placeholder="Enter the comment"
        className="bg-[#273f4f] outline-none px-3 text-sm text-white"
        value={props.Comment}
        onChange={props.Change}
      />

      <button
        type="button"
        className="absolute right-5 text-white"
        onClick={props.Show}
      >
        Reactor
      </button>
    </div>
  )
}

export default Reactions
