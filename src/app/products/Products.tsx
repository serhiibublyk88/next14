import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Products.module.scss";
import { useParams, usePathname } from "next/navigation";
export function Products() {



   return(
      <div className={styles.products}>Products
      <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />

      
      
      </div>)
      
  
}