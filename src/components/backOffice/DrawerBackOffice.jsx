import {
  Category,
  Group,
  Inventory,
  MeetingRoom,
  Person,
  Sell,
  Shop,
  ShoppingBag,
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
import DrawerItem from "./DrawerItem"
import { useRouter } from "next/router"

const DrawerItemList1 = [
  { text: "product", icon: <Inventory />, link: "/backoffice/product" },
  { text: "Catégorie", icon: <Category />, link: "/backoffice/categorie" },
  { text: "user", icon: <Person />, link: "/backoffice/user" },
]
const DrawerItemList2 = [
  { text: "All products", icon: <ShoppingBag />, link: "/backoffice/products" },
  { text: "All users", icon: <Group />, link: "/backoffice/users" },
  { text: "All orders", icon: <Shop />, link: "/backoffice/orders" },
]

const DrawerBackOffice = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(router.asPath)

  const handleExit = () => {
    router.push("/home")
  }

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
        {DrawerItemList2.map(({ text, icon, link }, key) => (
          <DrawerItem
            text={text}
            icon={icon}
            link={link}
            key={key}
            selected={link == selected ? true : false}
          />
        ))}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleExit}>
            <ListItemIcon>
              <MeetingRoom sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Sortir"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerBackOffice
