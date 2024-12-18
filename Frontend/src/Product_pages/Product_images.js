import { useState } from "react";
import { useEffect } from "react";

const Pdct_img = (props) => {
    const images = props.product[0];


    // After receiving the images in images.img_ and images.img_2 and so on, I have to add dynamic image paths, this is because the Pdct_img's parent component Single_product_page is using the parameters to filter the data, this causes images not to follow the dynamic  path SPP/parameter. That is why bellow I used PUBLIC_URL and asigned them to constants. The rest of the code remains the mostly the same. It has to be in two steps, because it first have to load this part and then the one inside return()
     
    // Only define img_1, img_2, etc., if `images` is available
    const img_1 = images ? `${process.env.PUBLIC_URL}${images.img1}` : '';
    const img_2 = images ? `${process.env.PUBLIC_URL}${images.img2}` : '';
    const img_3 = images ? `${process.env.PUBLIC_URL}${images.img3}` : '';
    const img_4 = images ? `${process.env.PUBLIC_URL}${images.img4}` : '';
        
     // Single product page image swap

     const [mainImage, setMainImage] = useState(''); // Initialize state variable with an empty string

     useEffect(() => {
        setMainImage(img_1); // Set initial image value to img_1 when the component mounts
    }, [images]); // Trigger effect when images prop changes

 
    const handleImageSwap = (event) => {
        let exitingImage = mainImage;
        let enteringImage = event.target.src;
        setMainImage(enteringImage);
        event.target.src = exitingImage;
    }
    if (!images) {
        // Display a loading message or empty content if images are undefined
        return <div>Loading images...</div>;
    }

    return (  
        <div className="listing"> 
                <div id="listing-img">
                    <img className="img-swap" src={mainImage} onClick={handleImageSwap} />
                    <img className="img-swap" src={img_2} onClick={handleImageSwap} />
                    <img className="img-swap" src={img_3} onClick={handleImageSwap} />
                    <img className="img-swap" src={img_4} onClick={handleImageSwap} />
                </div>
            
         </div>

         
         
     );
}
 
export default Pdct_img;