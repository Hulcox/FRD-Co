import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { useRouter } from "next/router"

const DrawerItem = ({ icon, text, link, selected }) => {
  const router = useRouter()

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => router.push("/backoffice/" + link)}
        selected={selected}
      >
        <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} sx={{ color: "white" }} />
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerItem
