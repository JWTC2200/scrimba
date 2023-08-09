import Avatar from "../components/Avatar"
import bobZiroll from "../images/bob.jpg"
import Menu from "../components/Menu"

function App() {

  return (
    <>
      <Menu
          buttonText="Sports"
          items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </>
  )
}

export default App
