export default function reviewsPage({ params }: { params: { productId: string, reviewId: string } }) {
    return (
        <>
        <div>
            <h1>This is reviews {params.reviewId}</h1>
        </div>
        </>
    )
}