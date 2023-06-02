import { client } from "../lib/sanityClient";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product" && _id=="b704ea69-06bc-4d1b-b303-146f5a8378ab"]`
  );
  return res;
};

interface IProducts {
  title: string;
  price: string;
}

export default async function FetchProducts() {
  const data: IProducts[] = await getProductData();
  console.log(data);
  return (
    <>
      {data.map((items) => (
        <div key={items.title}>
          <div>FetchProducts</div>
          <div>{items.title}</div>
          <div>{items.price}</div>
        </div>
      ))}
    </>
  );
}
