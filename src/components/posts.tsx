import Reactions from "./Reactions"
const Posts = ({ ...props }) => {
  return (
    <>
      <div className="w-10/12 h-auto p-10 bg-[#203647] m-auto rounded shadow border border-[#ffffff99] mt-5">
        <textarea
          placeholder="Post's Content"
          className="m-auto w-full rounded border border-[#ffffff99] bg-[#273f4f] p-2 outline-none text-white text-sm py-4"
        ></textarea>

        {
          //reactions
        }

        <Reactions />

        <button
          className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow"
          type={"button"}
        >
          Add Reaction
        </button>
      </div>
    </>
  )
}

export default Posts
