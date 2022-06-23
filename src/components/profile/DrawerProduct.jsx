import {
  CreditCard,
  Inventory,
  Key,
  MeetingRoom,
  Person,
} from "@mui/icons-material"
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import DrawerItem from "../backOffice/DrawerItem"

const DrawerItemList1 = [
  { text: "mes Commandes", icon: <Inventory />, link: "/profile/account" },
  { text: "Mon Compte", icon: <Person />, link: "/profile/account" },
  { text: "Sécurité", icon: <Key />, link: "/profile/account" },
  {
    text: "Mes Cartes de Crédit",
    icon: <CreditCard />,
    link: "/profile/account",
  },
]

const DrawerProduct = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(router.asPath)

  const handleExit = () => {
    router.push("/logout")
  }

  useEffect(() => {
    console.log(router, selected)
  }, [])
  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "secondary.main",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {DrawerItemList1.map(({ text, icon, link }, key) => (
          <DrawerItem
            text={text}
            icon={icon}
            link={link}
            key={key}
            selected={link == selected ? true : false}
          />
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleExit}>
            <ListItemIcon>
              <MeetingRoom sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Deconnection"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerProduct
