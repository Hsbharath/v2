import React, { useState, forwardRef } from 'react';

const V4Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Simulate sending data (replace with actual API call if needed)
      setTimeout(() => {
        setSubmitMessage('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <div
      ref={ref}
      className='relative w-full min-h-[400px] flex flex-col xl:flex-row justify-start content-center gap-12 p-6 xl:p-12 mt-12'
    >
      <div className='w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col xl:flex-row justify-start content-center gap-12 mx-auto py-16'>
        <div
          className='w-full xl:w-[20%] flex flex-col justify-start items-start'
          data-aos='fade-up'
        >
          <div className='mb-12'>
            <h4 className='text-4xl text-black font-medium'>Contact</h4>
            <svg
              width='154'
              height='30'
              viewBox='0 0 154 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.06599 28C2.05351 27.9965 1.96465 27.9863 2.01566 27.943C2.52788 27.5082 3.63262 27.0892 4.16309 26.8322C11.1268 23.4583 18.1117 20.1383 25.3689 17.2336C32.1147 14.5336 38.9679 12.0219 46.0044 9.91356C49.7342 8.79597 53.608 7.73705 57.53 7.20772C58.597 7.0637 60.5118 6.75549 61.6068 7.0653C63.1811 7.51078 60.9971 10.0511 60.8015 10.3337C58.9264 13.0425 56.5289 15.403 54.3592 17.9314C53.937 18.4233 53.2134 19.0909 53.0254 19.7044C52.8072 20.417 54.7693 19.4907 55.5503 19.1704C63.8854 15.752 71.9899 12.0395 80.531 8.97364C86.0714 6.98488 92.612 4.18166 98.868 4.60156C99.6124 4.65153 100.947 4.84544 101.535 5.38483C102.435 6.20988 101.776 7.69603 101.443 8.55352C101.04 9.59236 100.493 10.553 99.9081 11.5228C99.6381 11.9705 98.9734 12.7431 99.0861 13.2959C99.2647 14.1721 101.225 13.2229 102.19 12.8757C106.124 11.4595 109.922 9.76882 113.833 8.30429C120.467 5.81971 127.488 3.1985 134.712 2.24463C136.394 2.02247 139.636 1.45718 140.088 3.4765C140.662 6.03625 139.815 8.82726 139.803 11.4089C139.801 11.9763 139.714 12.9578 140.6 13.125C141.589 13.3116 142.911 12.8151 143.813 12.5624C145.187 12.1775 146.521 11.6993 147.923 11.3875C149.306 11.0801 150.6 11.0852 152 10.9532'
                stroke='#F3BB44'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <h1 className='text-xl text-black font-light'>
            Write your{' '}
            <span className='text-[#f3bb44] font-bold'>message!</span>. if you
            have any attachements to share please send it to{' '}
            <a href='mailto:bharathh.868@gmail.com'>
              <span className='text-[#f3bb44] font-bold'>
                bharathh.868@gmail.com
              </span>
            </a>
          </h1>
        </div>
        <div
          className='w-full xl:w-[80%] flex flex-col justify-start items-start gap-12'
          data-aos='fade-left'
        >
          <h1 className='text-2xl xl:text-4xl text-black font-medium'>
            Looking for someone to{' '}
            <span className='text-[#f3bb44]'> help with your project? </span>Or{' '}
            <span className='text-[#f3bb44]'>
              Want to hire for freelance work?{' '}
            </span>
            please leave a message i will get back ASAP.
          </h1>
          <form
            onSubmit={handleSubmit}
            className='w-full flex flex-col justify-start items-start gap-6'
          >
            <div className='w-full flex flex-col xl:flex-row justify-start items-start gap-6'>
              <div className='w-full xl:w-1/2 flex flex-col justify-start items-start gap-2'>
                <label>First Name *</label>
                <input
                  className='w-full h-[50px] bg-white border-2 px-2'
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <span className='w-full error bg-red-600 text-white p-2'>
                    {formErrors.firstName}
                  </span>
                )}
              </div>
              <div className='w-full xl:w-1/2 flex flex-col justify-start items-start gap-2'>
                <label>Last Name *</label>
                <input
                  className='w-full h-[50px] bg-white border-2 px-2'
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <span className='w-full error bg-red-600 text-white p-2'>
                    {formErrors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className='w-full flex flex-col xl:flex-row justify-start items-start gap-6'>
              <div className='w-full xl:w-1/2 flex flex-col justify-start items-start gap-2'>
                <label>Email *</label>
                <input
                  className='w-full h-[50px] bg-white border-2 px-2'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <span className='w-full error bg-red-600 text-white p-2'>
                    {formErrors.email}
                  </span>
                )}
              </div>
              <div className='w-full xl:w-1/2 flex flex-col justify-start items-start gap-2'>
                <label>Phone</label>
                <input
                  className='w-full h-[50px] bg-white border-2 px-2'
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='w-full flex flex-col xl:flex-row justify-start items-start gap-6'>
              <div className='w-full flex flex-col justify-start items-start'>
                <label>Message *</label>
                <textarea
                  className='w-full min-h-[100px] bg-white border-2 px-2'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {formErrors.message && (
                  <span className='w-full error bg-red-600 text-white p-2'>
                    {formErrors.message}
                  </span>
                )}
              </div>
            </div>
            <button type='submit' className='w-[100px] h-[50px] bg-[#f3bb44]'>
              <a>Submit</a>
            </button>
            {submitMessage && (
              <p className='success bg-green-600 text-white p-2 w-full '>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
});

export default V4Contact;
