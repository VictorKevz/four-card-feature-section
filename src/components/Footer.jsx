import React from "react";
// import CopyrightIcon from '@mui/icons-material/Copyright';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Coded with <VolunteerActivismIcon fontSize="medium" className="icon"/> by <a href="https://github.com/VictorKevz" target="_blank">Victor.Kevz</a> <CopyrightTwoToneIcon fontSize="small" className="icon"/>{year} </p>
        </footer>
    )
}
export default Footer;