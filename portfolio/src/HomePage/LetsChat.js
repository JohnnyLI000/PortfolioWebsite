import emailjs from 'emailjs-com';
import { Button } from '@material-ui/core';
import Modal from "./Modal.js"
import React, {useState } from 'react';
import { useForm } from "react-hook-form";
export default function LetsChat() {
  const [isOpen,setIsOpen] = useState(false);
  let validation = false;


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
      "template_68vgi4b",
      templateParams,
      'user_xoryRMDvJfloJ3E21k1lY'
    );
    e.target.reset();
  }

  return(
    <div>
      <button onClick={()=>setIsOpen(true)}>open modal</button>
      <Modal open ={isOpen} onClose ={()=>setIsOpen(false)}>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" ref={register({required:"Please let me know your name"})}/>
      {errors.name&&  <p>{errors.name.message}</p>}
      <label>Email</label>
      <input type="email" name="email" ref={register({required:"Please let me know your email address"})} />
      {errors.email&&  <p>{errors.email.message}</p>}
      <label>Message</label>
      <input type="text" name="message" ref={register({required:"Anything you want to tell me about?"})}/>
      {errors.message &&  <p>{errors.message.message}</p>}
      <input type="submit" value="Send"/>
    </form>
      </Modal>
      
    </div>
  );
 }




