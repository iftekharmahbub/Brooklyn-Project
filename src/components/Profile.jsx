import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { GrLinkedinOption } from "react-icons/gr";
import { RiBehanceFill } from "react-icons/ri"; 
import Button from '../utils/Button';
import { MdOutlineFileDownload } from "react-icons/md";
import Heading from '../utils/Heading';
import Detail from './../utils/Detail';

const Profile = () => {
    const socialLinks = [
    { 
        id: 1,
        icon: <FaFacebookF />,
        link: '#'
        },
        {
            id: 2,
            icon: <FaDribbble />,
            link: '#'
        },
        {
            id: 3,
            icon: <LuInstagram />,
            link: '#'
        },
        {
            id: 4,
            icon: <GrLinkedinOption />,
            link: '#'
        },
        {
            id: 5,
            icon: <RiBehanceFill />,
            link: '#'
        }
    ]
    return (
        <>
            <section id='profile' className='lg:mt-[145px] mt-[100px] pb-[140px] lg:pb-0 relative z-20  '>
                <div className="container relative z-20">
                    <div className="shadow-custom pb-15 lg:p-[112px] 
                                    grid lg:grid-cols-2 gap-25 items-center bg-white rounded-2xl">

                        <div className="profileImg py-15 lg:py-0 mb-8 lg:mb-0 relative max-w-[424px] lg:max-w-[100%] max-h-[468px]
                           mx-auto ">
                            {/* Social links */}
                            <img src="/public/images/profile.png" className='w-full' alt="" />
                            <div className="socialLinks flex w-full z-10 justify-center 
                            max-w-[260px] p-3 shadow-social bg-white absolute -translate-y-1/2 -translate-x-1/2 left-1/2 right-1/2" >
                                {socialLinks.map((social) => (   
                                    <a
                                        className='inline-block w-[48px] h-[48] p-[15px] cursor-pointer hover:rounded-sm text-primary-500 bg-white hover:bg-primary-500 hover:text-white transition-all duration-300 text-center'
                                        href={social.link} key={social.id}>{social.icon}</a>
                                ))}
                            </div>
                        </div>
                        <div className="profileInfo flex flex-col justidfy-start px-8 lg:px-0">
                            
                            <Heading>
                                I am Professional User Experience Designer
                            </Heading>

                            <Detail className={'mt-8 mb-4'}>
                                I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                            </Detail>

                            <Detail>
                                I design and develop services for customers specializing creating stylish, modern websites, web services.
                            </Detail>

                            {/* Button */}
                              
            <div className="btn-group mt-8 flex gap-4">
                <Button>MY Projects</Button>
                <Button className={'!flex gap-3 items-center bg-transparent !text-primary-500 outline-1 outline-primary-500  '} > <MdOutlineFileDownload className='text-xl' /> Download CV </Button>
            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
