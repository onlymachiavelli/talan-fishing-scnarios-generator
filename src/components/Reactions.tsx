const Reactions = ({ ...props }) => {
  return (
    <div className="w-11/12 m-auto bg-[#273f4f] border border-[#ffffff99] rounded-full flex items-center p-3 mt-2 relative">
      <select
        name=""
        id=""
        className="bg-[#273f4f] text-white outline-none cursor-pointer"
      >
        <option value="">Heart</option>
      </select>

      <input
        type="text"
        placeholder="Enter the comment"
        className="bg-[#273f4f] outline-none px-3 text-sm text-white"
      />

      <button type="button" className="absolute right-5 text-white">
        Reactor
      </button>
    </div>
  )
}

export default Reactions
