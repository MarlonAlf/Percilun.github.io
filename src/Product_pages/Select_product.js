const Select_pdct = (prop) => {// Receive onSelect function as props

       const onSelect = prop.onSelect; // Contains the function that returns the selected value to the parent component in order to update the page with the selected product
       const currentProduct = prop.currentProduct; // This is the product that comes from paragrams when clicking a specific card
       const products = prop.selected_group; // Contains the products that had been filtered in the parent component that belong to the same select_group propety


       
       
       // Handler function to update the selected value when the selection happends
       const handleSelectChange = (event) => {
           onSelect(event.target.value); // Call onSelect function and pass the selected value, event.target refers to the element that triggered the event
           };


    return ( 
        <div>
            {/* This condition eliminates the whole select component  */}
            {products.length > 1 &&  
            
            //When a selection happends it is captured by onChange and evoques the function handleSelectChange, 
            <select id="select" onChange={handleSelectChange}>
                
                { <option value={currentProduct[0].id}><h2>{currentProduct[0].select_alias}</h2></option>}
                
                {products.map((item) => {
                    if (item.id !== currentProduct[0].id) {
                    return (
                        <option value={item.id}> <h2>{item.select_alias}</h2></option>
                    )
                    }})
                }
                
            </select>
        }
        </div>
     );
}
 
export default Select_pdct;

//In the parent component, you have a state variable selectedAnimal and a function handleSelectAnimal that updates this state variable using setSelectedAnimal. This function is responsible for updating the state of the parent component.

// You pass handleSelectAnimal down to the child component (Select_pdct) as a prop named onSelect. This allows the child component to call handleSelectAnimal when an option is selected.

// In the child component (Select_pdct), when the selection changes (onChange event occurs), the handleSelectChange function is called. Inside this function, onSelect(event.target.value) is used to call the handleSelectAnimal function passed from the parent component, passing the selected value as an argument.

// By calling onSelect(event.target.value) in the child component, you're essentially invoking the handleSelectAnimal function in the parent component, passing the selected value (event.target.value) to it.

// Inside the handleSelectAnimal function in the parent component, setSelectedAnimal is called to update the selectedAnimal state with the new selected value. This causes the parent component to re-render with the updated state, reflecting the selected value.