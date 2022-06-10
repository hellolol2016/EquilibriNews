import {BsInstagram,BsGithub,BsYoutube} from "react-icons/bs"
import {Footer, Stack} from "@mantine/core"
import Link from "next/link"
export default function Bottom(){
  return(
<>
      <Footer></Footer>
          <Stack sx={{flexDirection:"row",justifyContent:"center"}} style={{fontSize:"40px", padding:"20px"}}>
           <Link href="https://www.instagram.com/wennis_dang/"><BsInstagram ></BsInstagram></Link>
           <Link href="https://github.com/hellolol2016"><BsGithub></BsGithub></Link>
           <Link href="https://www.youtube.com/channel/UC33Fd7TYX5tzYCTYbBNmOhw"><BsYoutube></BsYoutube></Link>
            </Stack> 
    </>
)
}