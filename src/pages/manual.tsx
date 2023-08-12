import * as React from "react"
import Posts from "../components/posts"
const Manual = () => {
  return (
    <main className="w-full h-screen overflow-y-scroll bg-[#17252e] pb-10">
      <header className="w-full h-auto p-5 flex items-center border-b border-white">
        <p className="text-white   text-xl">John Wick The hunter</p>
      </header>
      <div className="w-full h-auto">
        <form>
          <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
            <input
              placeholder="Enter the Company's name"
              className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            />

            <input
              placeholder="Enter The Link"
              className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            />

            <input
              placeholder="Enter the Company's Email"
              className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            />
          </div>

          <div className="flex items-center justify-center w-full px-10 py-5">
            <textarea
              placeholder="Company's Description"
              className="m-auto w-full rounded border border-[#ffffff99] bg-[#273f4f] p-2 outline-none text-white text-sm py-4"
            ></textarea>
          </div>

          <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
            <input
              placeholder="Enter the Company's Industries"
              className="w-full h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            />
          </div>

          <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
            <input
              placeholder="Enter the Company's Specialities"
              className="w-full h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            />
          </div>

          <Posts />
          <Posts />
        </form>
      </div>
    </main>
  )
}
export default Manual

//company's name , description