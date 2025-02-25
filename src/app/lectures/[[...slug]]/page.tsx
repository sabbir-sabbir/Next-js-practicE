export default function LecturesHere({ params }: { params: { slug: string[] } }) {
    if (params.slug?.length == 2){
        return <div>Lecture: Chemistry {params.slug[1]}</div>;
    };
    
    if (params.slug?.length == 3){
        return <div>Lecture: Biology {params.slug[2]}</div>;
    };
    return (
        <>
        <div>
            <h1>Lectures</h1>
            
        </div>
        </>
    );
}