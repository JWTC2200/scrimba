import Menu from "../components/Menu"
import MenuButton from "../components/MenuButton"
import MenuDropdown from "../components/MenuDropdown"
import MenuItem from "../components/MenuItem"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
}

export default App
