import { redirect } from "next/navigation"

export default function reviewsPage({ params }: { params: { productId: string, reviewId: string } }) {
  
    if(params.reviewId > 60){
        redirect('/')
    }


    return (
        <>
        <div>
            <h1>This is reviews {params.reviewId}</h1>
        </div>
        </>
    )
}