const Photo =[
    {id: 1, src: 'https://mega.com.vn/media/news/0206_hinh-nen-messi-pc3.jpg'},
    {id: 2, src: 'https://mega.com.vn/media/news/0206_hinh-nen-messi-pc22.jpg'},
    {id: 3, src: 'https://mega.com.vn/media/news/0206_hinh-nen-messi-pc22.jpg'}
]
const Simple =() => {
    return <div className="">
        <img src={Photo[1].src} className="w-[400px]" alt="" />
        <button className="btn">Prev</button>
        <button className="btn">Next</button>
    </div> 
}
export default Simple