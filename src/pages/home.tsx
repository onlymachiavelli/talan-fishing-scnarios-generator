import * as React from "react"
import Lottie from "lottie-react"
import Hack from "./../lotti/Hack.json"
import { Link } from "react-router-dom"
const Home = () => {
  //create a ref
  const lottieRef = React.useRef(null)
  return (
    <main className="w-full h-screen bg-[#17252e] flex items-center justify-center flex-col">
      <Lottie
        ref={lottieRef}
        animationData={Hack}
        loop
        autoplay
        width={100}
        height={100}
        style={{
          width: 300,
          height: "auto",
        }}
      />

      <Link
        className="text-white w-2/12 py-3 bg-[#273f4f] m-auto mt-10 block rounded-full text-sm border border-[#ffffff99]  shadow flex items-center justify-center"
        to={"/manual"}
      >
        Start Hunting
      </Link>
    </main>
  )
}

export default Home
