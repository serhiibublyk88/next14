import { notFound } from "next/navigation";
import { Products } from "./Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};


// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
  
// }): Promise<Metadata> {
//   const product = await getData(slug);
//   return{title: product.title}
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SSR, ISR, SSG
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SSR
// const fetchData = async () => {
//   const response = await fetch("https://api.example.com/products");
//   const data = await response.json();
//   return data;
// };

// export default async function Page() {
//   const data = await fetchData();

//   if(!data) notFound

//   return <Products />;
// }

//SSG
// const fetchData = async () => {
//   const response = await fetch("https://api.example.com/products",{
// cache: 'force-cache',})
//   const data = await response.json();
//   return data;
// };

// export default async function Page() {
//   const data = await fetchData();

//   if(!data) notFound

//   return <Products />;
// }

//ISR
const fetchData = async () => {
  const response = await fetch("https://api.example.com/products", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return data;
};

export default async function Page() {
  const data = await fetchData();

  if (!data) notFound;

  return <Products />;
}
