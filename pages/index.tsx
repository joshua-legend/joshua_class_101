import type {NextPage} from 'next'
import MainFrame from "@/layouts/mainframe";
import home from "@/modules/home/home";

const Home: NextPage = () => {
  return (
      <MainFrame modules={home()}/>
  )
}
export default Home
