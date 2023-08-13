import Reactions from "./Reactions"
const Posts = ({ ...props }) => {
  return (
    <>
      <div className="w-10/12 h-auto p-10 bg-[#203647] m-auto rounded shadow border border-[#ffffff99] mt-5">
        <textarea
          placeholder="Post's Content"
          value={props.Value}
          onChange={props.Change}
          className="m-auto w-full rounded border border-[#ffffff99] bg-[#273f4f] p-2 outline-none text-white text-sm py-4"
        ></textarea>

        {props.children}
      </div>
    </>
  )
}

export default Posts
