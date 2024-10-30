
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
        const response = await fetch("http://127.0.0.1:5000/Admin");

        const data = await response.json(); // jsonify handles converting Python data to JSON, response.json() handles converting the raw JSON string back into a JavaScript object on the frontend.

        setProducts(data.products)
        console.log("777777777777777777777777",data)
    } 

    const [ title, setTitle] = useState("");
    const [ price, setPrice] = useState("");
    const [ bullet1, setBullet1] = useState("");
    const [ currentId, setCurrenttId] = useState("")

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openCreateModal = () => {
        if (!isModalOpen) setIsModalOpen(true);
        setModalForCreating(true);
        setTitle("");
        setPrice("");
        setBullet1("");
    }
    
    const openUpdateModal = (product) => {
        setModalForCreating(false);
        setIsModalOpen(true);
        console.log('bullet 1', product)
        setCurrenttId(product.id)
        setTitle(product.title)
        setPrice(product.price)
        setBullet1(product.bullet1)
    }

    const onSubmit = async (e) => {
        // event object that is created by js every time something happen. But has being passed by (onSubmit={onSubmit}) in the form bellow
        
        e.preventDefault() // Prevents page refreshing which is the default

        const data = { title, price, bullet1}// This is called object shorthand, where if the key and the variable name are the same, you can omit the repetition. So, it’s the same as  title: title, price: price, bullet1: bullet1, but more concise. This object will be sent to the server as JSON

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
            
            console.log('data----888888888------',data);
            // console.log('ID----------', product.id);
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
            // console.log(data);
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
                    <th>Bullet Point</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {products.map((product)=> (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.bullet1}</td>
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
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <form onSubmit={onSubmit}>
                    <div>
                        
                    </div>
                    <div>
                        <label htmlFor="title">Title</label> {/* html way to when the label is clicked the cursor appers into the box */}               
                        <input type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="text" 
                        id="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="bullet1">Bullet1</label>
                        <input type="text" 
                        id="bullet1" 
                        value={bullet1} 
                        onChange={(e) => setBullet1(e.target.value)}></input>
                    </div>
                    <button type="submit">{modalForCreating && "Create Product" || !modalForCreating && "Update Product"  }</button>
                </form>
            </div>
        </div>
        }
        </div>                
     );
}
export default Admin;