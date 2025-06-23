import React from 'react'
import { useRef } from "react";
import Heading from '../utils/Heading'
import CmnText from '../utils/CmnText'
import ContactDetail from '../utils/ContactDetail'
import { IoLocation } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import Input from '../utils/Input'
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6"
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      url: "#",
      icon: <FaDribbble />,
    },
    {
      id: 3,
      url: "#",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      url: "#",
      icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      url: "#",
      icon: <FaBehance />,
    },
  ];

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b0plvnb", "template_h2pa0s7", form.current, {
        publicKey: "g65BxPqvoRa6GIUmh",
      })
      .then(
        () => {
          Swal.fire({
            title: "Your form has been submitted!",
            icon: "success",
            draggable: true,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <section id='contact' className='bg-gray-50/50'>
      <div className="container bg-white rounded-sm shadow-lg z-12 transform translate-y-[3%] lg:translate-y-[10%]">
        <div className="contact py-9 px-7 lg:p-[88px] lg:grid lg:grid-cols-2">
          <div className="info">
            <Heading>Let’s discuss your Project</Heading>
            <CmnText className='text-left'></CmnText>


            <div className="contact-box flex flex-col gap-4 mt-[35px]">

              <ContactDetail logo={<IoLocation />} heading={'Address:'} title={'New Mexico 31134'} link={'www.facebook.com'} />
              <ContactDetail logo={<HiOutlineMail />} heading={'My Email:'} title={'mymail@mail.com'} link={'mailto:iftemahbub@gmail.com'} />
              <ContactDetail logo={<IoIosCall />} heading={'Call Me Now:'} title={'00-1234 00000'} link={'tel:+8801571335775'} />
            </div>

            <div className="discussLinks mt-4 lg:mt-6 flex w-full max-w-[250px] lg:max-w-[264px] bg-gray-white justify-center items-center">
              {socialLinks.map((link) => (
                <a
                  className="w-10 lg:w-12 h-10 lg:h-12 rounded-sm text-primary-500 grid place-items-center font-medium lg:text-lg hover:bg-primary-500 hover:text-gray-white transition-all duration-300"
                  key={link.id}
                  href={link.url}
                >
                  {link.icon}
                </a>
              ))}

            </div>

          </div>
          <div className="form flex flex-col " >

            <div className="content">
              <CmnText className='mb-[60px] pt-[40px]' ></CmnText>
            </div>
         
            <form ref={form} onSubmit={sendEmail}>
              
                <Input name="user_name" placeholder="Name*" />
                <Input name="user_email" placeholder="Email*" type="email" />
                <Input name="location" placeholder="Location" />
                <div className="grid md:grid-cols-3 md:gap-6">
                  <Input placeholder="Budget*" name="user_budget" type="number" />
                  <Input
                    className="md:col-span-2"
                    placeholder="Subject*"
                    name="subject"
                  />
                </div>
                <Input name="user_message" placeholder="Message*" type='text' />
                <button className=" flex items-center mt-9 lg:mt-[38px] text-sm lg:text-[16px] font-semibold text-gray-white leading-[150%] bg-primary-500 rounded-sm px-3 lg:px-6 py-2 lg:py-3 hover:bg-transparent hover:text-primary-500 hover:outline-2 outline-primary-500 cursor-pointer transition-all duration-300">
                  Submit
                  <VscSend className="ml-2 lg:ml-3" />
                </button>
              </form>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
