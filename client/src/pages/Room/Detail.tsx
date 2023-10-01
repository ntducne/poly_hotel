import React from 'react'
import { MdOutlineKingBed } from 'react-icons/Md'
import { ImManWoman } from 'react-icons/Im'
import { FaHotel } from 'react-icons/Fa'
import { BsFillSunFill } from 'react-icons/Bs'
import { AiOutlineShake } from 'react-icons/Ai'
import { AiOutlineCoffee } from 'react-icons/Ai'
import { AiOutlineRight } from 'react-icons/Ai'
import SlideRooms from './SlideRoom'
import SlideImages from './Slideimage'

import { motion } from "framer-motion"

type Props = {}

const Detail = (props: Props) => {
    return (
        <div className='pb-[100px] '>
            {/* <SlideRooms /> */}
            <div className='h-[600px] lg:h-[860px]'>
                <div className='text-white h-full bg-pink-300 relative flex items-center justify-center'>
                    <div className='z-20 text-white text-center'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 105 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate='visible'
                    >
                        <div className='uppercase tracking-[6px] mb-5'>Just enjoy and relax</div>
                        <h1 className='text-[32px] font-extralight uppercase tracking-[3px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>Luxury Hotel</h1>
                        <button className='btn mx-auto'>Great for business trip</button>
                    </motion.div>
                    </div>
                    <div className='absolute top-0 w-full h-full'>
                        <img src="https://images.pexels.com/photos/5615059/pexels-photo-5615059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='object-cover h-full w-full' />
                    </div>
                    <div className='absolute w-full h-full bg-black/70'></div>
                </div>
            </div>
            <div className=' max-w-[1425px] bg-white m-auto  h-full pb-16 z-50'
                style={{
                    transform: 'translateY(-20%)'
                }}
            >
                <div className='p-[50px]  flex flex-col lg:flex-row'>
                    <div className='w-full h-full lg:w-[60%] mr-[30px]'>
                        <p className='pt-[15px] pb-[15px] '>
                            <span className='text-2xl'>
                                <b>
                                    Great choice for a relaxing vacation for families with children or a group of friends.
                                </b>
                            </span>
                        </p>
                        <p className='pt-[15px] pb-[15px]'>
                            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.&nbsp;
                            <em>

                                <strong>Aliquip veniam delectus, Marfa eiusmod Pinterest</strong>

                            </em>
                            &nbsp;in do umami readymade swag.&nbsp;Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown&nbsp;yr pop-up artisan.
                        </p>

                        <p className='pt-[15px] pb-[15px]'>See-through delicate embroidered organza blue
                            lining luxury acetate-mix stretch pleat detailing.
                            Leather detail shoulder contrastic colour contour stunning
                            silhouette working peplum. Statement buttons cover-up tweaks patch
                            pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.
                            Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides
                            clean and sleek.&nbsp;Polished finish elegant court shoe work duty stretchy slingback strap mid kitten
                            heel this ladylike design&nbsp;slingback strap mid kitten heel this ladylike design.
                        </p>

                        <p className="pt-[15px] pb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus,
                            gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor.</p>
                    </div>
                    <div className='w-full h-full lg:w-[30%] border-s-4 float-left'>
                        <div className='w-full  ml-[50px]'>
                            <div className='text-base font-semibold tracking-wide '>
                                Form
                            </div>
                            <div className='font-mono text-6xl font-black ml-[50px]'>
                                <span>$</span>
                                <span>200</span>
                            </div>
                            <button className='w-full bg-cyan-500 rounded-2xl h-[60px] mt-[30px] text-2xl font-semibold text-white'> <span>Book now</span></button>
                        </div>
                        <div className='w-full  ml-[50px] mt-[30px] '>
                            <div>
                                <div className='flex'>
                                    <MdOutlineKingBed className='w-[90px] h-[50px]' />
                                    <span className='ml-[50px] text-2xl'>King bed</span>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <ImManWoman className='w-[90px] h-[50px] mt-[10px]' />
                                    <span className='ml-[50px] text-2xl mt-[3px]'>
                                        3&nbsp;Adults&nbsp;
                                        1&nbsp;Children&nbsp;
                                    </span>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <FaHotel className='w-[90px] h-[50px] mt-[10px]' />
                                    <span className='ml-[50px] text-2xl mt-[3px]'>55m²</span>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <BsFillSunFill className='w-[90px] h-[50px] mt-[10px]' />
                                    <span className='ml-[50px] text-2xl mt-[3px]'>Sea view</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    transform: 'translateY(-26%)'
                }}
            className='max-w-full bg-black text-white m-auto flex flex-col lg:flex-row pt-[80px] pb-[80px]'>
                <div className='w-full h-full lg:w-[50%] m-auto  flex flex-col lg:flex-row '>
                    <div className='w-full h-full lg:w-[30%] flex text-xl ml-[480px]'>
                        <div><AiOutlineShake className="w-[40px] h-[45px]" /></div>
                        <span className='mt-[5px] ml-[20px] text-2xl font-semibold'>Amenities			</span>
                    </div>
                    <div className='w-full h-full lg:w-[50%]  mt-3'>
                        <div className='flex '>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full lg:w-[50%] flex flex-col lg:flex-row'>
                    <div className='w-full h-full lg:w-[30%] flex text-xl'>
                        <div>
                            <AiOutlineCoffee className="w-[40px] h-[45px]" />
                        </div>
                        <span className='mt-[5px] ml-[20px] font-semibold text-2xl'>Services</span>
                    </div>
                    <div className='w-full h-full lg:w-[50%]  mt-3'>
                        <div className='flex '>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5'>40-inch Samsung® LED TV</span>
                        </div>
                        <div className='flex mt-4'>
                            <div className='mt-1'> <AiOutlineRight /></div>
                            <span className='ml-5 font-light'>40-inch Samsung® LED TV</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className='mt-[-120px]'>
                <SlideImages />
            </div>

            <section className="bg-white  py-8 lg:py-16 antialiased max-w-[70%] m-auto">
                <div className="w-70% mx-auto px-4">
                    <div className="flex   mb-6">
                        <h2 className="lg:text-2xl font-bold text-gray-900 text-3xl dark:text-white">Discussion (20)</h2>
                    </div>
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                    </form>
                    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Michael Gough</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>
                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>

                            <div id="dropdownComment1"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                            instruments for the UX designers. The knowledge of the design tools are as important as the
                            creation of the design strategy.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="Jese Leos" />Jese Leos</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time
                                    title="February 12th, 2022">Feb. 12, 2022</time></p>
                            </div>
                            <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>

                            <div id="dropdownComment2"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                    alt="Bonnie Green" />Bonnie Green</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time
                                    title="March 12th, 2022">Mar. 12, 2022</time></p>
                            </div>
                            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>

                            <div id="dropdownComment3"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                    alt="Helene Engels" />Helene Engels</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time
                                    title="June 23rd, 2022">Jun. 23, 2022</time></p>
                            </div>
                            <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdownComment4"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <button type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                </div>
            </section>
            <div>

            </div>
        </div>


    )
}

export default Detail