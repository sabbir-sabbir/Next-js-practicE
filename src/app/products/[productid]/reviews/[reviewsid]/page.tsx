export default async function ProductReviews({
    params,
}: {
    params: Promise<{productid: string, reviewsid: string}>
}) {
  const {productid, reviewsid} = await params;
  return <div>
    <h1>Reviews {reviewsid}  for product {productid}</h1>
  </div>
}