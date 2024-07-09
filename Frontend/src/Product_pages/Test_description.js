// COPY OF Select_product


const Select_pdct = ({onSelect}) => {// Receive onSelect function as props

    // Handler function to update the selected value when the selection happends
    const handleSelectChange = (event) => {
        onSelect(event.target.value); // Call onSelect function and pass the selected value, event.target refers to the element that triggered the even
        };


 return ( 
     //When a selection happends it is captured by onChange and evoques the function handleSelectChange
     <select id="select" onChange={handleSelectChange}>
         <option value="1"><h2>Elefante</h2></option>
         <option value="2">Tigre</option>
         <option value="3">Leon</option>
         <option value="4">Conejo</option>
     </select>

  );
}

export default Select_pdct;

//In the parent component, you have a state variable selectedAnimal and a function handleSelectAnimal that updates this state variable using setSelectedAnimal. This function is responsible for updating the state of the parent component.

// You pass handleSelectAnimal down to the child component (Select_pdct) as a prop named onSelect. This allows the child component to call handleSelectAnimal when an option is selected.

// In the child component (Select_pdct), when the selection changes (onChange event occurs), the handleSelectChange function is called. Inside this function, onSelect(event.target.value) is used to call the handleSelectAnimal function passed from the parent component, passing the selected value as an argument.

// By calling onSelect(event.target.value) in the child component, you're essentially invoking the handleSelectAnimal function in the parent component, passing the selected value (event.target.value) to it.

// Inside the handleSelectAnimal function in the parent component, setSelectedAnimal is called to update the selectedAnimal state with the new selected value. This causes the parent component to re-render with the updated state, reflecting the selected value.