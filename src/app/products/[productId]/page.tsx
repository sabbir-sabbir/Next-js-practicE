export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <div>
            <p>Here All Details {params.productId}</p>
        </div>
    );
}
