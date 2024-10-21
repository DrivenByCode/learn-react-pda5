function CaptionImage(props) {
    console.log(props);
    // const imgUrl = "https://kkoma.net/web/product/big/201905/4aa48d0ebab9f50f9e3b47fb7b8af386.jpg";

    return (
        // <div>
        //     <img src={imgUrl} alt="구름 이미지" />
        //     <p>구름 이미지</p>
        // </div>
        <div>
            <img src={props.imgUrl} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}

export default CaptionImage;