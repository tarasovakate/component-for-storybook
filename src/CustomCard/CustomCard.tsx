import { FC } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import useTheme from "@mui/material/styles/useTheme"
import Checkbox from "@mui/material/Checkbox"

export interface CustomCardProps {
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success"
  text?: string
  light?: boolean
  img?: string
  margin?: string
  onChange?: () => void
  activeCheckBox?: boolean
  backgroundCard?: string
}

export const CustomCard: FC<CustomCardProps> = ({
  color = "secondary",
  text = "Text",
  light,
  img = "/images/CardMedia.jpg",
  margin = "10px",
  backgroundCard = "white",
  onChange,
  activeCheckBox
}) => {
  const theme = useTheme()
  return (
    <Card sx={{ margin: margin, width: "300px", borderRadius: "15px", boxShadow: light ? `0 0 0 3px ${theme.palette[color].main}` : "none" }}>
      <CardActionArea>
        <img style={{ height: "130px", width: "100%", objectFit: "cover" }} src={img} alt="green iguana" />
        <CardContent sx={{ padding: "15px", display: "flex", backgroundColor: backgroundCard }}>
          <Checkbox
            onChange={onChange}
            sx={{
              padding: 0,
              "&.Mui-checked": {
                color: theme.palette[color].main
              }
            }}
            defaultChecked={activeCheckBox ? true : false}
          />
          <Typography sx={{ ml: "5px" }}>{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
