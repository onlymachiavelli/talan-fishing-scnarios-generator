import * as React from "react"
import Posts from "../components/posts"
import PopSmoke from "../components/PopUp"
import useCollect from "../hooks/useCollector"
const Manual = () => {
  const [pop, setPop] = React.useState({
    display: "none",
    data: {},
  })

  /**
   Posts schema 
   {
      content : String 
      Reactions 
      
   }
   */
  const [posts, setPosts] = React.useState([])

  const {
    name,
    link,
    mail,
    desc,
    spec,
    ind,
    setName,
    setLink,
    setMail,

    setDesc,
    setSpec,
    setInd,
  } = useCollect()
  return (
    <main className="w-full h-screen overflow-y-scroll bg-[#17252e] pb-10">
      <header className="w-full h-auto p-5 flex items-center border-b border-white">
        <p className="text-white   text-xl">John Wick The hunter</p>
      </header>
      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
          <input
            placeholder="Enter the Company's name"
            className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Enter The Link"
            className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
          />

          <input
            placeholder="Enter the Company's Email"
            className="w-1/3 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center w-full px-10 py-5">
          <textarea
            placeholder="Company's Description"
            className="m-auto w-full rounded border border-[#ffffff99] bg-[#273f4f] p-2 outline-none text-white text-sm py-4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
          <input
            placeholder="Enter the Company's Industries"
            className="w-full h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={ind}
            onChange={(e) => setInd(e.target.value)}
          />
        </div>

        <div className="w-full h-auto flex items-center justify-center gap-3 px-10 py-5">
          <input
            placeholder="Enter the Company's Specialities"
            className="w-full h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          />
        </div>

        <Posts />
        <Posts />

        <button
          className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow"
          type={"button"}
        >
          Kill Them
        </button>
      </div>

      <PopSmoke Display={pop.display} Data={pop.data} />
    </main>
  )
}
export default Manual

//company's name , description
