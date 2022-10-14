import type { NextPage } from 'next'
import MainFrame from "@/layouts/mainframe";
import programming from "@/modules/programming/programming";
const Html: NextPage = () => {
  const programmingHome = programming();

  return (
      <MainFrame contents={programmingHome}/>
  )
}
export default Html
