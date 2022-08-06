import { Layout } from "../components/Layout";
import { Menu } from "../components/Menu";
import { Sidebar } from "../components/Sidebar";
import '../styles/config.css'
import '../styles/normalize.css'

export function Home() {

  return (
    <Layout>
      <Menu />
      <Sidebar />
    </Layout>
  )
}