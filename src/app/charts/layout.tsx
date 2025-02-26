export default function ChartLayout({barchart, linechart, hitmap}: {
    barchart: React.ReactNode,
    linechart: React.ReactNode,
    hitmap: React.ReactNode,
}) {
    
    return (
       <>
       <div>
       {barchart}
       </div>
       <div>
       { linechart }
       </div>
       <div>
      {hitmap}
       </div>
       </>
    );
}