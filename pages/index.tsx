import type { NextPage } from 'next'
import MainFrame from "@/layouts/mainframe";
import home from "../modules/home/home";

const Home: NextPage = () => {


  const home1 = home();

  return (
      <MainFrame contents={home1}/>
  )
}
export default Home
