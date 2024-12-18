import Modal from "./Modal";
import { useState, useEffect} from "react";

const Admin = () => {
    const [products, setProducts ] = useState([]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalForCreating, setModalForCreating] = useState(true); // It toggles the modal's button between Update and Create

    
    // -------------------------------  GET PRODUCTS LIST -----------------------------
    useEffect(() => { 
        fetchProducts()      
    }, [])

    const fetchProducts = async () => {
        const response = await fetch("http://127.0.0.1:5000/get_products");

        const data = await response.json(); // jsonify handles converting Python data to JSON, response.json() handles converting the raw JSON string back into a JavaScript object on the frontend.

        setProducts(data.products)
    } 

    const [ currentId, setCurrenttId] = useState("")
    const [ title, setTitle] = useState("");
    const [ price, setPrice] = useState("");
    const [ bullet1, setBullet1] = useState("");
    const [ bullet2, setBullet2] = useState("");
    const [ bullet3, setBullet3] = useState("");
    const [ bullet4, setBullet4] = useState("");
    const [ bullet5, setBullet5] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [category, setCategory] = useState("");
    const [isNew, setIsNew] = useState("");
    const [group, setGroup] = useState("");
    const [allias, setAllias] = useState("");
    const [inCart, setInCart] = useState("");

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openCreateModal = () => {
        if (!isModalOpen) setIsModalOpen(true);
        setModalForCreating(true);
        setTitle("");
        setPrice("");
        setBullet1("");
        setBullet2("");
        setBullet3("");
        setBullet4("");
        setBullet5("");
        setImg1("");
        setImg2("");
        setImg3("");
        setImg4("");
        setCategory("");
        setIsNew("");
        setGroup("");
        setAllias("");
        setInCart("");
    }
    
    const openUpdateModal = (product) => {
        setModalForCreating(false);
        setIsModalOpen(true);
        console.log('bullet 1', product)
        setCurrenttId(product.id)
        setTitle(product.title)
        setPrice(product.price)
        setBullet1(product.bullet1)
        setBullet2(product.bullet2)
        setBullet3(product.bullet3)
        setBullet4(product.bullet4)
        setBullet5(product.bullet5)
        setImg1(product.img1)
        setImg2(product.img2)
        setImg3(product.img3)
        setImg4(product.img4)
        setCategory(product.category)
        setIsNew(product.isNew)
        setGroup(product.group)
        setAllias(product.allias)
        setInCart(product.inCart)
    }

    const onSubmit = async (e) => {
        // event object that is created by js every time something happen. But has being passed by (onSubmit={onSubmit}) in the form bellow
        
        e.preventDefault() // Prevents page refreshing which is the default

        const data = { title, price, bullet1, bullet2, bullet3, bullet4, bullet5, img1, img2, img3, img4, category, isNew, group, allias, inCart}// This is called object shorthand, where if the key and the variable name are the same, you can omit the repetition. So, it’s the same as  title: title, price: price, bullet1: bullet1, but more concise. This object will be sent to the server as JSON

        // -----------------------------  CREATE PRODUCT -------------------------------------
        if(modalForCreating){      
        
        const url = "http://127.0.0.1:5000/create_product"
        const options = { method: "POST", headers: {"Content-Type": "application/json"}, body:JSON.stringify(data)} //The data object is converted into a JSON string so it can be sent in the body of the POST request.the body is the part of the request that contains the data being sent to the server. 
        const response = await fetch(url, options)// This is a normal fetch request, but the values have being divided into two constans above
        if (response.status !== 201 && response.status !== 200) {
            const message = await response.json()
            console.log('data----------',data);
            alert(message.message);
        }else{
            closeModal();
            fetchProducts();
        }           
        
        // -----------------------------  UPDATE PRODUCT ---------------------------------------
        }
        else{
            const url = `http://127.0.0.1:5000/update_product/${currentId}`
            const options = { method: "PATCH" , headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}    
            const response = await fetch(url, options);
    
        if (response.status !== 201 && response.status !== 200) {
            // const data = await response.json()
            console.log(data);
            // alert(data.message);
        }else{
            closeModal();
            fetchProducts();
        }
     }
}
    
        // --------------------------  DELETE PRODUCT -----------------------
        const deleteProduct = async (id) => { 
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_product/${id}`, options) // Template Literal to insert a variable id, and also options as a second argument of the function fetch.
            if (response.status === 200) {
                fetchProducts()
            }else{  
                console.log("Fail to delete")
            }
        }
        catch (error) {
            alert(error)
        }
     }   
    
   
    return (    
        <div className="admin-container">
        <table>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    {/* <th>Bullet 1</th>
                    <th>Bullet 2</th>
                    <th>Bullet 3</th>
                    <th>Bullet 4</th>
                    <th>Bullet 5</th> */}
                    <th>Image 1</th>
                    {/* <th>Category</th>
                    <th>New</th>
                    <th>Group</th>
                    <th>Allias</th>
                    <th>In Cart</th> */}
                    <th>Actions</th>
                </thead>
                <tbody>
                    {products.map((product)=> (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        {/* <td>{product.bullet1}</td>
                        <td>{product.bullet2}</td>
                        <td>{product.bullet3}</td>
                        <td>{product.bullet4}</td> 
                        <td>{product.bullet5}</td>*/}
                        <td>{product.img1}</td>
                        {/* <td>{product.category}</td>
                        <td>{product.isNew}</td>
                        <td>{product.group}</td>
                        <td>{product.allias}</td>
                        <td>{product.inCart}</td> */}
                        <td>
                            <button onClick={() => openUpdateModal(product)}>Update</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>                        
                        </td>
                    </tr>
                    ))}
                </tbody>
        </table>
        {/* MODAL */}
        <button onClick={openCreateModal}>Open Create New Product</button>
        { isModalOpen && <div className="modal">
            {<Modal onSubmit={onSubmit} setIsModalOpen={setIsModalOpen} title={title}  price={price} bullet1={bullet1} bullet2={bullet2} bullet3={bullet3} bullet4={bullet4} bullet5={bullet5} img1={img1} img2={img2} img3={img3} img4={img4} category={category} isNew={isNew} group={group} allias={allias} inCart={inCart} setTitle={setTitle} setPrice={setPrice} setBullet1={setBullet1} setBullet2={setBullet2} setBullet3={setBullet3} setBullet4={setBullet4} setBullet5={setBullet5} setImg1={setImg1} setImg2={setImg2} setImg3={setImg3} setImg4={setImg4} setCategory={setCategory} setIsNew={setIsNew} setGroup={setGroup} setAllias={setAllias} setInCart={setInCart} modalForCreating={modalForCreating}/>}
          
        </div>
        }
        </div>                
     );
}
export default Admin;