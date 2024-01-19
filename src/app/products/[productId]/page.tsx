import Partners from "@/components/Partners";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

export default function page({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const { productId } = params;
  return (
    <>
      <ProductDetails productId={productId} />;
      <RelatedProducts />
      <Partners />
    </>
  );
}
