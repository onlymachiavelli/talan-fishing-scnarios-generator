import * as React from "react"
import axios from "axios"
const useCollect = () => {
  const [name, setName] = React.useState("")
  const [link, setLink] = React.useState("")
  const [mail, setMail] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [spec, setSpec] = React.useState("")
  const [ind, setInd] = React.useState("")

  const Generate = async () => {}

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
  }
}

export default useCollect
