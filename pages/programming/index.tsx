import type { NextPage } from 'next'
import MainFrame from "@/layouts/mainframe";
import programming from "@/modules/programming/programming";



const Programming: NextPage = () => {
  const programmingHome = programming();
  return (
      <MainFrame contents={programmingHome}/>
  )
}
export default Programming
