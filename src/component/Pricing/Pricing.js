import React from 'react';

const Pricing = () => {
    return (
        <div className='flex p-1 justify-between'>
            <div className='card-container rounded mb-4'>
                {/* Free MemberShip section */}
                <div className="card-body p-2">
                    <div className="card-img">
                        <h1 className='text-3xl text-mydark font-bold text-center'>Free Member</h1>
                    </div>
                    <div className="card-content mt-2">
                        <h3 className='font-semibold text-center mb-4'>Limited Access</h3>
                        <h3 className='text-myparagraphcolor text-center block mb-2 text-mybtn text-semibold'>$0/Month</h3>
                        <p className='text-myparagraphcolor text-xs text-justify tracking-tight break-all mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem id error exercitationem vel recusandae modi veritatis. Inventore debitis qui facere?</p>
                        <div className='w-full flex justify-center'>
                            <button className='mx-auto bg-mybtn px-4 text-mywhite rounded-lg mt-2 hover:bg-transparent hover:text-mydark ease-in-out duration-300'>Active</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Golden Package */}
            <div className='card-container rounded mb-4'>
                <div className="card-body p-2">
                    <div className="card-img">
                        <h1 className='text-3xl text-mydark font-bold text-center'>Golden Package</h1>
                    </div>
                    <div className="card-content mt-2">
                        <h3 className='font-semibold text-center mb-4'>Life Time Access</h3>
                        <h3 className='text-myparagraphcolor text-center block mb-2 text-mybtn text-semibold'>$50/Month</h3>
                        <p className='text-myparagraphcolor text-xs text-justify tracking-tight break-all mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem id error exercitationem vel recusandae modi veritatis. Inventore debitis qui facere?</p>
                        <div className='w-full flex justify-center'>
                            <button className='mx-auto bg-mybtn px-4 text-mywhite rounded-lg mt-2 hover:bg-transparent hover:text-mydark ease-in-out duration-300'>Active</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Platinum Package */}
            <div className='card-container rounded mb-4'>
                <div className="card-body p-2">
                    <div className="card-img">
                        <h1 className='text-3xl text-mydark font-bold text-center'>Platinum Package</h1>
                    </div>
                    <div className="card-content mt-2">
                        <h3 className='font-semibold text-center mb-4'>Life Time Access & support</h3>
                        <h3 className='text-myparagraphcolor text-center block mb-2 text-mybtn text-semibold'>$99/Month</h3>
                        <p className='text-myparagraphcolor text-xs text-justify tracking-tight break-all mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem id error exercitationem vel recusandae modi veritatis. Inventore debitis qui facere?</p>
                        <div className='w-full flex justify-center'>
                            <button className='mx-auto bg-mybtn px-4 text-mywhite rounded-lg mt-2 hover:bg-transparent hover:text-mydark ease-in-out duration-300'>Active</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;