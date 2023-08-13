import * as React from "react"
import Posts from "../components/posts"
import PopSmoke from "../components/PopUp"
import useCollect from "../hooks/useCollector"
import Reactions from "../components/Reactions"
const Manual = () => {
  const [pop, setPop] = React.useState({
    display: "none",
    data: {},
  })

  /**
   Posts schema 
   {
      content : String 
      Reactions :[

          {
          
          reaction : String,
          comment : String,
          person : {
              name : String,
              link : String,
              mail : String,
              desc : String,
              spec : String,
              ind : String
              }
          }
      ]
      
   }
   */
  const [posts, setPosts]: any = React.useState([])

  const {
    name,
    //link,
    mail,
    desc,
    spec,
    ind,
    setName,
    //setLink,
    setMail,

    setDesc,
    setSpec,
    setInd,
  } = useCollect()

  const [reactions, setReactions]: any = React.useState([
    "Like",
    "Love",
    "Support",
    "Funny",
    "Insightful",
    "Support",
    "Celebrate",
  ])
  return (
    <main className="w-full h-screen overflow-y-scroll bg-[#17252e] pb-10">
      <header className="w-full h-auto p-5 flex items-center border-b border-white">
        <p className="text-white   text-xl">John Wick The hunter</p>
      </header>
      <div className="w-full h-auto px-36">
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

        {posts.map((post: any, index: any) => {
          return (
            <Posts
              key={index}
              RCon={reactions}
              Data={post}
              value={post.content}
              Change={(e: any) => {
                const updatedPosts = [...posts]
                updatedPosts[index].content = e.target.value
                setPosts(updatedPosts)
              }}
            >
              {/* ... (button and Reactions components) */}
              {post.reactions.map((r: any, ind: any) => {
                return (
                  <Reactions
                    Reactions={reactions}
                    key={ind}
                    Re={r.reaction}
                    Comment={r.comment}
                    Change={(e: any) => {
                      const updatedPosts = [...posts]
                      updatedPosts[index].reactions[ind].comment =
                        e.target.value
                      setPosts(updatedPosts)
                    }}
                    Option={(e: any) => {
                      const updatedPosts = [...posts]
                      updatedPosts[index].reactions[ind].reaction =
                        e.target.value
                      setPosts(updatedPosts)
                    }}
                    Show={() => {
                      setPop({
                        display: "flex",
                        data: {
                          name: "",
                          link: "",
                          mail: "",
                          desc: "",
                          spec: "",
                          ind: "",
                        },
                      })
                    }}
                  />
                )
              })}
              <button
                className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow"
                type={"button"}
                onClick={() => {
                  const updatedPosts = [...posts]
                  updatedPosts[index].reactions.push({
                    reaction: "",
                    comment: "",
                    person: {
                      name: "",
                      link: "",
                      mail: "",
                      desc: "",
                      spec: "",
                      ind: "",
                    },
                  })
                  setPosts(updatedPosts)
                }}
              >
                Add Reaction
              </button>
            </Posts>
          )
        })}

        <button
          className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow"
          type={"button"}
          onClick={() => {
            setPosts([
              ...posts,
              {
                content: "",
                reactions: [],
              },
            ])
          }}
        >
          Add Post
        </button>
        <button
          className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow"
          type={"button"}
          onClick={() => {
            console.log(posts)
          }}
        >
          Kill Them
        </button>
      </div>

      <PopSmoke
        Display={
          pop.display
          //"flex"
        }
        Data={pop.data}
        OnClose={() => {
          setPop({
            display: "none",
            data: {},
          })
        }}
      >
        <div className="w-full h-auto flex items-center justify-center flex-col gap-4">
          <input
            placeholder="Full Name"
            className="w-1/2 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Profile Link"
            className="w-1/2 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email Address"
            className="w-1/2 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <input
            placeholder="Industries"
            className="w-1/2 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <input
            placeholder="Specialities"
            className="w-1/2 h-auto p-2 py-4 bg-[#273f4f] rounded shadow outline-none text-sm text-white border border-[#ffffff99]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            //value={props.Value}
            //onChange={props.Change}
            className="m-auto w-1/2 rounded border border-[#ffffff99] bg-[#273f4f] p-2 outline-none text-white text-sm py-4"
          ></textarea>
          <button
            className="text-white w-2/12 py-3 bg-[#273f4f] m-auto  block rounded-full text-sm border border-[#ffffff99]  shadow"
            type={"button"}
            onClick={() => {
              //close the popup
              setPop({
                display: "none",
                data: {},
              })
            }}
          >
            Set Person
          </button>
        </div>
      </PopSmoke>
    </main>
  )
}
export default Manual

//company's name , description
