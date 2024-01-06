import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const iconGenerator = ({ icon }) => {
  if (icon == "home") {
    return <HomeOutlinedIcon />;
  } else if (icon == "library") {
    return <LocalLibraryOutlinedIcon />;
  } else if (icon == "treding") {
    return <TrendingUpOutlinedIcon />;
  } else if (icon == "description") {
    return <DescriptionOutlinedIcon />;
  } else {
    return;
  }
}


