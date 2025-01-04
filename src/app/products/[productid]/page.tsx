export default async function ProductDetails({
    params,
}: {
    params: Promise<{productid: string}>
}) {
    const productid = (await params).productid;
    return <div>
        <h1>Details About Product:...{productid}</h1>
    </div>
}