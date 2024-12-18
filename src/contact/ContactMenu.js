import React, { useState } from 'react'
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import "../styles/contact.css";

export default function ContactMenu() {
    const initialState = {
        name: "",
        email: "",
        mensagem: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isLoading, setisLoading] = useState(false);
    const [isSent, setisSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validateForm();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setisLoading(true);

        const { name, email, mensagem } = formData;
        const sanitizedData = {
            name: "Name: " + DOMPurify.sanitize(name),
            email: "Email: " + DOMPurify.sanitize(email),
            mensagem: "Mensagem: " + DOMPurify.sanitize(mensagem),
        };

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs
            .send(serviceID, templateID, sanitizedData, userID)
            .then((response) => {
                console.log("Email foi enviado com sucesso!", response.text);
                setFormData(initialState);
                setErrors({});
                setisSent(true);
            })
            .catch((error) => {
                console.error("O envio falhou.", error);
            })
            .finally(() => {
                setisLoading(false);
            });
    };

    const validateForm = () => {
        const { name, email, mensagem } = formData;
        const errors = {};
        if (!name.trim()) {
            errors.name = "O nome é obrigatório.";
        }
        if (!email.trim()) {
            errors.email = "O email é obrigatório.";
        } else if (!isValidEmail(email)) {
            errors.email = "O email não é válido.";
        }
        if (!mensagem.trim()) {
            errors.mensagem = "Uma mensagem é obrigatória.";
        }
        return errors;
    };

    const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    return (
        <div className="contact-menu">
            {!isSent && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "error" : ""}
                            disabled={isLoading}
                        />
                        {errors.name && (
                            <span className="error-message">{errors.name}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            className={errors.mensagem ? "error" : ""}
                            disabled={isLoading}
                        ></textarea>
                        {errors.mensagem && (
                            <span className="error-message">{errors.mensagem}</span>
                        )}
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "ENVIANDO..." : "ENVIAR"}
                    </button>
                </form>
            )}
            {isSent && (
                <div className="success-message">
                    <p>Sucesso!</p>
                    <p>A sua mensagem foi enviada!</p>
                </div>
            )}
        </div>
    );
}
