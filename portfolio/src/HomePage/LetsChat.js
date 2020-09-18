import emailjs from 'emailjs-com';
import './css/LetschatStyle/Letschat.css'
import Modal from "./Modal.js"
import React, {useState } from 'react';
import { useForm } from "react-hook-form";

export default function LetsChat() {
  const [isOpen,setIsOpen] = useState(false);

  const {register,handleSubmit,errors} = useForm();

  const onSubmit = (data,e) =>{
    const { name, email, message } = data;
    console.log(message)
    let templateParams = {
      from_name: name,
      from_e_mail: email,
      to_name: "Johnny",
      message: message
    };
    emailjs.send(
      "Gmail",
      "template_yz6xryb",
      templateParams,
      'user_xoryRMDvJfloJ3E21k1lY'
    );
    e.target.reset();
  }

  return(
    <div className="form-group-field">
      <button onClick={()=>setIsOpen(true)} className="lets-chat-button">Let's chat</button>
      <Modal open ={isOpen} onClose ={()=>setIsOpen(false)}>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

      <div className ="input-group">
      <input className = "form-input-field" type="text" name="Name" placeholder="Name" ref={register({required:"Please let me know your name"})}/>
      <label className = "form-label">Name</label>
      </div>
      <div className ="input-group">
      <input className = "form-input-field" type="email" name="E-mail" placeholder="E-mail" ref={register({required:"Please let me know your email address"})} />
      <label className = "form-label">Email</label>
      </div>
      <div className ="input-group">
      <textarea className = "form-input-field" type="text" name="Message" placeholder="Message" ref={register({required:"Anything you want to tell me about?"})}/>
      <label className = "form-label">Message</label>
      </div>
      <input className = "submit-button" className="lets-chat-button" type="submit" value="Send"/>
    </form>
      </Modal>
      
    </div>
  );
 }




