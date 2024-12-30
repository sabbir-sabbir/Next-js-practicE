import React from 'react'
import Link from 'next/link'

const FolderOne = () => {
  return (

    <>
        <div>FolderOne</div>
        <Link href="/f1/f2" >Folder two</Link>
    </>

  )
}

export default FolderOne