

const Modal = ({onSubmit, setIsModalOpen, title, price, bullet1, bullet2, bullet3, bullet4, bullet5, img1, img2, img3, img4, category, isNew, group, allias, inCart, bestSeller, setCategory, setIsNew, setGroup, setAllias, setInCart, setTitle, setPrice, setBullet1, setBullet2, setBullet3, setBullet4, setBullet5, setImg1, setImg2, setImg3, setImg4, setBestSeller,  modalForCreating}) => {

    const closeModal = () => {
        setIsModalOpen(false)
    }
 
    

    return ( 
        <div className="modal-content">
        <span className="close" onClick={() => {closeModal()}}>&times;</span>
        <form onSubmit={(e)=> {onSubmit(e)}}>
            <div>
                
            </div>
            <div>
                <label htmlFor="title">Title</label> {/* html way to when the label is clicked the cursor appers into the box */}               
                <input type="text" 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" 
                id="price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="bullet1">Bullet1</label>
                <textarea  
                id="bullet1" 
                value={bullet1} 
                onChange={(e) => setBullet1(e.target.value)}
                autoComplete="off"></textarea>
            </div>
            <div>
                <label htmlFor="bullet2">Bullet2</label>
                <textarea 
                id="bullet2" 
                value={bullet2} 
                onChange={(e) => setBullet2(e.target.value)}
                autoComplete="off"></textarea>
            </div>            
            <div>
                <label htmlFor="bullet3">Bullet3</label>
                <textarea
                id="bullet3" 
                value={bullet3} 
                onChange={(e) => setBullet3(e.target.value)}
                autoComplete="off"></textarea>
            </div>            
            <div>
                <label htmlFor="bullet4">Bullet4</label>
                <textarea 
                id="bullet4" 
                value={bullet4} 
                onChange={(e) => setBullet4(e.target.value)}
                autoComplete="off"></textarea>
            </div>            
            <div>
                <label htmlFor="bullet5">Bullet5</label>
                <textarea 
                id="bullet5" 
                value={bullet5} 
                onChange={(e) => setBullet5(e.target.value)}
                autoComplete="off"></textarea>
            </div>
            <div>
                <label htmlFor="img1">Image 1</label>
                <input type="text" 
                id="img1" 
                value={img1} 
                onChange={(e) => setImg1(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="img2">Image 2</label>
                <input type="text" 
                id="img2" 
                value={img2} 
                onChange={(e) => setImg2(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="img3">Image 3</label>
                <input type="text" 
                id="img3" 
                value={img3} 
                onChange={(e) => setImg3(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="img4">Image 4</label>
                <input type="text" 
                id="img4" 
                value={img4} 
                onChange={(e) => setImg4(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input type="text" 
                id="category" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="isNew">New</label>
                <input type="text" 
                id="isNew" 
                value={isNew} 
                onChange={(e) => setIsNew(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="group">Group</label>
                <input type="text" 
                id="group" 
                value={group} 
                onChange={(e) => setGroup(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="allias">Allias</label>
                <input type="text" 
                id="allias" 
                value={allias} 
                onChange={(e) => setAllias(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="inCart">In Cart</label>
                <input type="text" 
                id="inCart" 
                value={inCart} 
                onChange={(e) => setInCart(e.target.value)}
                autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="bestSeller">BSR</label>
                <input type="text"
                id="bestSeller"
                value={bestSeller}
                onChange={(e) => setBestSeller(e.target.value)}
                autoComplete="off"></input>

            </div>
            <button type="submit">{modalForCreating && "Create Product" || !modalForCreating && "Update Product"  }</button>
        </form>
    </div>
     );
}
 
export default Modal;