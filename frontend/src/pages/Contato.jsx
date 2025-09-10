// src/components/ContactPage.jsx
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi'; // Exemplo de ícones

// Importar o CSS para este componente
import './ContactPage.css'; 

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Validação de campos (reforçada)
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // 2. Validação de e-mail (regex simples)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Por favor, insira um endereço de e-mail válido.');
            return;
        }
        
        // Simule o envio da mensagem para a API
        console.log("Dados do formulário:", formData);
        
        // Feedback e limpeza do formulário
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
    };

    return (
        <div className="contact-page-container">
            <header className="contact-header">
                <h1>Fale Conosco</h1>
                <p>Estamos aqui para ajudar! Envie-nos uma mensagem ou entre em contato pelos nossos canais de atendimento.</p>
                 
            </header>

            <section className="contact-content">
                <div className="contact-info-section">
                    <h2>Nossos Contatos</h2>
                    <p className="contact-description">Prefere falar diretamente? Encontre nossos detalhes abaixo:</p>
                    
                    <div className="contact-item">
                        <FiMail className="contact-icon" />
                        <span>email@exemplo.com</span>
                    </div>
                    <div className="contact-item">
                        <FiPhone className="contact-icon" />
                        <span>(XX) XXXX-XXXX</span>
                    </div>
                    <div className="contact-item">
                        <FiMapPin className="contact-icon" />
                        <span>Endereço Completo, Cidade - UF</span>
                    </div>

                    <p className="working-hours">Horário de Atendimento: Segunda a Sexta, das 9h às 18h.</p>

                    <div className="social-media-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FiInstagram className="social-icon" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FiFacebook className="social-icon" />
                        </a>
                        {/* Adicione mais ícones de redes sociais conforme necessário */}
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Envie-nos uma Mensagem</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Seu Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nome Completo"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Seu E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Assunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Qual o motivo do contato?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Sua Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Descreva sua mensagem..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Enviar Mensagem</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;