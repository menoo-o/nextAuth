import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import Navbar from "../ui/dashboard/navbar/Navbar"
import styles from '../ui/dashboard/dashboard.module.css'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
       <div className={styles.container}>

        <div className={styles.menu}>
                <Sidebar />    
            </div>

            <div className={styles.content}>
                <Navbar />
                {children}
            </div>      
      </div>

    </>
  )
}
