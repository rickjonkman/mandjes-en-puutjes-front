import React, {useState} from 'react';
import UserInfoForm from "./UserInfoForm.jsx";
import UserPreferencesForm from "./UserPreferencesForm.jsx";
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstname: '',
        preferences: {
            showMeat: true,
            showFish: true,
            showVega: true,
            showVegan: true,
        },
        enabled: true,
    });

    const onChangeHandler = (e) => {
        const { name, value, checked } = e.target;

        if (name === 'preferences') {
            const updatedPreferences = formData.preferences.map((pref) => {
                return Object.prototype.hasOwnProperty.call(pref, value) ? { [value]: checked } : pref;
            });
            setFormData({
                ...formData,
                preferences: updatedPreferences,
            })
            return;
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/register', formData);
            if (response.status === 200 || response.status === 201) {
                navigate('general/login');
            }
        } catch (e) {
            console.error(e);
            setError(e.response.data.message);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <form className="login-register__form" onSubmit={e => handleFormSubmit(e)}>

            <UserInfoForm
                emailValue={formData.username}
                passwordValue={formData.password}
                firstnameValue={formData.firstname}
                handleOnChangeUsername={onChangeHandler}
                handleOnChangePassword={onChangeHandler}
                handleOnChangeFirstname={onChangeHandler}
            />

            <UserPreferencesForm />

            <SubmitButton
                buttonClass="button__register"
                buttonType="submit"
                buttonText="Registreren"
            />

        </form>
    );
};

export default RegisterForm;