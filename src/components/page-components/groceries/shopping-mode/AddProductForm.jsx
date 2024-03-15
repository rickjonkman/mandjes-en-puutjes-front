import {useContext, useState} from 'react';
import Form from "../../../ui/forms/Form.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import {GroceriesContext} from "../../../../context/GroceriesContext.jsx";


const AddProductForm = () => {

    const [productName, setProductName] = useState('');
    const { handleAddProduct } = useContext(GroceriesContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddProduct(productName);
        setProductName('');
    }

    return (
        <Form formClass="add-product__form" formSubmitHandler={handleSubmit} >

            <label htmlFor="add-product--input"><h4>Voeg product toe</h4>
            <input
                type="text"
                id="add-product--input"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                autoFocus={true}
            /></label>

            <SubmitButton
                buttonClass="add-product__button"
                buttonText="Voeg product toe"
                buttonType="submit"
            />

        </Form>
    );
};

export default AddProductForm;