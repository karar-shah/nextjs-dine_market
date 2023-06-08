import { IProductsDetail } from "@/app/interface/interface";
import { client } from "../../lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";

export const getProductData = async (graqQury: string) => {
  const res = await client.fetch(graqQury);
  return res;
};
export default async function page({ params }: { params: { title: string } }) {
  const URL = `*[_type=="product" && title== "${params.title
    .split("%20")
    .join(" ")}"]{title,image,price}`;
  const data: IProductsDetail[] = await getProductData(URL);
  return (
    <>
      {data && (
        <>
          <div>
            {data.map((item: IProductsDetail) => (
              <div key={item.title}>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <img src={urlForImage(item.image).url()} alt={item.title} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
