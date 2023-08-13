import * as React from "react"
import axios from "axios"
const useCollect = () => {
  const [name, setName] = React.useState("")
  const [link, setLink] = React.useState("")
  const [mail, setMail] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [spec, setSpec] = React.useState("")
  const [ind, setInd] = React.useState("")

  //person infromation
  const [posts, setPosts]: any = React.useState([])
  const [Fullname, setFName] = React.useState("")
  const [Email, setEmail] = React.useState("")
  const [Profile, setProfile] = React.useState("")
  const [industries, setIndu] = React.useState("")
  const [specialization, setSpeci] = React.useState("")
  const [description, setDescription] = React.useState("")

  const Generate = async () => {
    const reqBody = {
      company: {
        name: name,
        link: link,
        mail: mail,
        desc: desc,
        spec: spec,
        ind: ind,
      },
      posts: {
        posts,
      },
    }

    console.log(reqBody)
  }

  return {
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

    Fullname,
    Email,
    Profile,
    industries,
    specialization,
    description,
    setFName,
    setEmail,
    setProfile,
    setIndu,
    setSpeci,
    setDescription,
    posts,
    setPosts,

    Generate,
  }
}

export default useCollect
