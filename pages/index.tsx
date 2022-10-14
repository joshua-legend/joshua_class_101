import type { NextPage } from 'next'
import MainFrame from "@/layouts/mainframe";
import home from "@/modules/home/home";

const Home: NextPage = () => {
  const Home_ = home();
  return (
      <MainFrame contents={Home_}/>
  )
}
export default Home
