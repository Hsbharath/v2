import Image from 'next/image';
import React from 'react';

const V4Bio = () => {
  return (
    <div
      className='w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl min-h-[800px] mx-auto px-6 py-12 flex justify-center items-center'
      data-aos='fade-up'
    >
      <div className='relative w-full h-full flex flex-col justify-start content-center gap-12'>
        <div className='w-full xl:w-[50%]'>
          <h1 className='text-6xl font-semibold text-[#f3bb44] mb-6'>Hello.</h1>
          <p className='text-2xl md:text-6xl font-medium'>
            Web developer with 7 years of expertise in front-end and back-end
            development<span className='text-[#f3bb44]'>.</span>
          </p>
          <div className='py-12 flex justify-start items-center'>
            <span className='material-symbols-outlined bounce'>south</span>
            <div className='flex flex-col justify-start items-center'>
              <a href='' className='p-4 text-2xl font-medium mb-[-10px]'>
                Get In Touch
              </a>
              <svg
                width='205'
                height='31'
                viewBox='0 0 205 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 21.1644C3.29875 20.6019 4.64381 20.0964 6.04731 19.5948C15.9965 16.0385 26.6582 13.0144 37.8045 10.5233C45.011 8.91266 52.4302 7.4895 60.2885 6.97314C61.5414 6.89082 66.3555 6.78666 67.9081 6.80695C68.1991 6.81075 70.5343 6.83633 70.9595 7.16704C72.2213 8.14825 69.563 10.7267 68.9587 11.405C66.4628 14.2071 63.0167 16.6564 59.4754 19.1331C55.1139 22.1835 50.1638 25.2739 46.9498 28.6986C46.868 28.7857 46.6842 28.8938 46.7853 28.9756C46.8652 29.0401 47.0966 28.9609 47.2239 28.9202C47.9021 28.703 48.5378 28.4534 49.179 28.2092C57.349 25.0973 65.1881 21.7709 73.3715 18.6668C81.0493 15.7546 88.9083 12.9435 96.9062 10.2601C99.9472 9.23979 104.713 7.68828 108.162 6.77925C109.564 6.40974 112.103 5.85683 113.771 5.69898C114.935 5.58893 117.224 5.53262 117.051 6.46071C116.833 7.63738 114.779 8.78784 113.662 9.78461C113.491 9.93662 112.699 10.5027 113.753 10.4078C117.196 10.0978 120.615 8.9099 123.712 8.17344C127.569 7.25605 131.478 6.36949 135.57 5.74976C138.13 5.36204 141.779 4.88049 143.72 6.18833C146.595 8.12541 142.269 10.8991 140.467 12.6238C140.3 12.784 139.264 13.5313 139.49 13.7456C139.787 14.0285 140.745 13.6116 141.308 13.464C143.129 12.9863 145.519 12.247 147.191 11.7374C153.014 9.96324 158.853 7.86345 165.427 6.84388C166.072 6.74394 167.57 6.44164 168.268 6.6823C168.785 6.86033 168.567 7.43496 168.497 7.68871C168.035 9.35549 175.386 7.37307 175.788 7.28707C181.285 6.11001 186.676 4.81053 192.159 3.61692C194.822 3.03728 197.541 2.4601 200.373 2.12116C200.883 2.06014 201.953 1.88463 202.447 2.11655C203.278 2.50664 202.913 3.56235 202.958 4.04626'
                  stroke='#F3BB44'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className='w-full xl:absolute xl:top-[-20px] xl:right-0 2xl:right-[-80px] md:w-[600px] h-full'
          data-aos='fade-left'
        >
          <Image
            className='w-full xl:mx-auto'
            src={'/Icons/bharath.jpeg'}
            alt='Bharath Image'
            width={300}
            height={300}
          />
        </div>
        <div className='w-full mt-[-200px] xl:w-[90%] min-h-[400px] xl:mt-[35px] flex flex-col md:flex-row justify-start content-center gap-8 bg-black z-50'>
          <div className='w-full lg:w-[25%] flex justify-center items-center'>
            <svg
              width='180'
              height='336'
              viewBox='0 0 180 336'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_f_101_37)'>
                <path
                  d='M35.7955 263V76.8182H100.886C113.856 76.8182 124.553 79.0606 132.977 83.5455C141.402 87.9697 147.674 93.9394 151.795 101.455C155.917 108.909 157.977 117.182 157.977 126.273C157.977 134.273 156.553 140.879 153.705 146.091C150.917 151.303 147.22 155.424 142.614 158.455C138.068 161.485 133.129 163.727 127.795 165.182V167C133.492 167.364 139.22 169.364 144.977 173C150.735 176.636 155.553 181.848 159.432 188.636C163.311 195.424 165.25 203.727 165.25 213.545C165.25 222.879 163.129 231.273 158.886 238.727C154.644 246.182 147.947 252.091 138.795 256.455C129.644 260.818 117.735 263 103.068 263H35.7955ZM58.3409 243H103.068C117.795 243 128.25 240.152 134.432 234.455C140.674 228.697 143.795 221.727 143.795 213.545C143.795 207.242 142.189 201.424 138.977 196.091C135.765 190.697 131.189 186.394 125.25 183.182C119.311 179.909 112.28 178.273 104.159 178.273H58.3409V243ZM58.3409 158.636H100.159C106.947 158.636 113.068 157.303 118.523 154.636C124.038 151.97 128.402 148.212 131.614 143.364C134.886 138.515 136.523 132.818 136.523 126.273C136.523 118.091 133.674 111.152 127.977 105.455C122.28 99.697 113.25 96.8182 100.886 96.8182H58.3409V158.636Z'
                  fill='#F3BB44'
                  fillOpacity='0.19'
                />
              </g>
              <g>
                <mask id='path-2-inside-1_101_37' fill='white'>
                  <path d='M22.7955 274V87.8182H87.8864C100.856 87.8182 111.553 90.0606 119.977 94.5455C128.402 98.9697 134.674 104.939 138.795 112.455C142.917 119.909 144.977 128.182 144.977 137.273C144.977 145.273 143.553 151.879 140.705 157.091C137.917 162.303 134.22 166.424 129.614 169.455C125.068 172.485 120.129 174.727 114.795 176.182V178C120.492 178.364 126.22 180.364 131.977 184C137.735 187.636 142.553 192.848 146.432 199.636C150.311 206.424 152.25 214.727 152.25 224.545C152.25 233.879 150.129 242.273 145.886 249.727C141.644 257.182 134.947 263.091 125.795 267.455C116.644 271.818 104.735 274 90.0682 274H22.7955ZM45.3409 254H90.0682C104.795 254 115.25 251.152 121.432 245.455C127.674 239.697 130.795 232.727 130.795 224.545C130.795 218.242 129.189 212.424 125.977 207.091C122.765 201.697 118.189 197.394 112.25 194.182C106.311 190.909 99.2803 189.273 91.1591 189.273H45.3409V254ZM45.3409 169.636H87.1591C93.947 169.636 100.068 168.303 105.523 165.636C111.038 162.97 115.402 159.212 118.614 154.364C121.886 149.515 123.523 143.818 123.523 137.273C123.523 129.091 120.674 122.152 114.977 116.455C109.28 110.697 100.25 107.818 87.8864 107.818H45.3409V169.636Z' />
                </mask>
                <g filter='url(#filter1_i_101_37)'>
                  <path
                    d='M22.7955 274V87.8182H87.8864C100.856 87.8182 111.553 90.0606 119.977 94.5455C128.402 98.9697 134.674 104.939 138.795 112.455C142.917 119.909 144.977 128.182 144.977 137.273C144.977 145.273 143.553 151.879 140.705 157.091C137.917 162.303 134.22 166.424 129.614 169.455C125.068 172.485 120.129 174.727 114.795 176.182V178C120.492 178.364 126.22 180.364 131.977 184C137.735 187.636 142.553 192.848 146.432 199.636C150.311 206.424 152.25 214.727 152.25 224.545C152.25 233.879 150.129 242.273 145.886 249.727C141.644 257.182 134.947 263.091 125.795 267.455C116.644 271.818 104.735 274 90.0682 274H22.7955ZM45.3409 254H90.0682C104.795 254 115.25 251.152 121.432 245.455C127.674 239.697 130.795 232.727 130.795 224.545C130.795 218.242 129.189 212.424 125.977 207.091C122.765 201.697 118.189 197.394 112.25 194.182C106.311 190.909 99.2803 189.273 91.1591 189.273H45.3409V254ZM45.3409 169.636H87.1591C93.947 169.636 100.068 168.303 105.523 165.636C111.038 162.97 115.402 159.212 118.614 154.364C121.886 149.515 123.523 143.818 123.523 137.273C123.523 129.091 120.674 122.152 114.977 116.455C109.28 110.697 100.25 107.818 87.8864 107.818H45.3409V169.636Z'
                    fill='#F3BB44'
                  />
                </g>
                <path
                  d='M22.7955 274H21.7955V275H22.7955V274ZM22.7955 87.8182V86.8182H21.7955V87.8182H22.7955ZM119.977 94.5455L119.507 95.4282L119.512 95.4308L119.977 94.5455ZM138.795 112.455L137.919 112.935L137.92 112.938L138.795 112.455ZM140.705 157.091L139.827 156.611L139.823 156.619L140.705 157.091ZM129.614 169.455L129.064 168.619L129.059 168.622L129.614 169.455ZM114.795 176.182L114.532 175.217L113.795 175.418V176.182H114.795ZM114.795 178H113.795V178.938L114.732 178.998L114.795 178ZM131.977 184L131.443 184.845L131.443 184.845L131.977 184ZM145.886 249.727L146.755 250.222L146.755 250.222L145.886 249.727ZM125.795 267.455L125.365 266.552L125.365 266.552L125.795 267.455ZM45.3409 254H44.3409V255H45.3409V254ZM121.432 245.455L122.11 246.19L122.11 246.19L121.432 245.455ZM125.977 207.091L125.118 207.603L125.121 207.607L125.977 207.091ZM112.25 194.182L111.767 195.058L111.774 195.061L112.25 194.182ZM45.3409 189.273V188.273H44.3409V189.273H45.3409ZM45.3409 169.636H44.3409V170.636H45.3409V169.636ZM105.523 165.636L105.087 164.736L105.084 164.738L105.523 165.636ZM118.614 154.364L117.785 153.804L117.78 153.811L118.614 154.364ZM114.977 116.455L114.266 117.158L114.27 117.162L114.977 116.455ZM45.3409 107.818V106.818H44.3409V107.818H45.3409ZM23.7955 274V87.8182H21.7955V274H23.7955ZM22.7955 88.8182H87.8864V86.8182H22.7955V88.8182ZM87.8864 88.8182C100.748 88.8182 111.27 91.043 119.507 95.4282L120.447 93.6628C111.836 89.0782 100.964 86.8182 87.8864 86.8182V88.8182ZM119.512 95.4308C127.782 99.7741 133.902 105.611 137.919 112.935L139.672 111.974C135.446 104.267 129.021 98.1653 120.442 93.6601L119.512 95.4308ZM137.92 112.938C141.954 120.235 143.977 128.339 143.977 137.273H145.977C145.977 128.024 143.879 119.583 139.671 111.971L137.92 112.938ZM143.977 137.273C143.977 145.161 142.572 151.588 139.827 156.611L141.582 157.57C144.534 152.169 145.977 145.385 145.977 137.273H143.977ZM139.823 156.619C137.108 161.695 133.521 165.687 129.064 168.619L130.163 170.29C134.919 167.161 138.726 162.911 141.586 157.563L139.823 156.619ZM129.059 168.622C124.604 171.592 119.763 173.79 114.532 175.217L115.059 177.147C120.494 175.664 125.532 173.377 130.168 170.287L129.059 168.622ZM113.795 176.182V178H115.795V176.182H113.795ZM114.732 178.998C120.232 179.349 125.8 181.281 131.443 184.845L132.511 183.155C126.639 179.446 120.753 177.378 114.859 177.002L114.732 178.998ZM131.443 184.845C137.043 188.382 141.754 193.465 145.564 200.132L147.3 199.14C143.352 192.231 138.426 186.89 132.511 183.155L131.443 184.845ZM145.564 200.132C149.337 206.735 151.25 214.857 151.25 224.545H153.25C153.25 214.597 151.285 206.113 147.3 199.14L145.564 200.132ZM151.25 224.545C151.25 233.721 149.166 241.942 145.017 249.233L146.755 250.222C151.091 242.604 153.25 234.036 153.25 224.545H151.25ZM145.017 249.233C140.893 256.479 134.366 262.26 125.365 266.552L126.226 268.357C135.527 263.922 142.395 257.885 146.755 250.222L145.017 249.233ZM125.365 266.552C116.394 270.829 104.647 273 90.0682 273V275C104.822 275 116.894 272.807 126.226 268.357L125.365 266.552ZM90.0682 273H22.7955V275H90.0682V273ZM45.3409 255H90.0682V253H45.3409V255ZM90.0682 255C104.874 255 115.647 252.146 122.11 246.19L120.754 244.719C114.853 250.157 104.717 253 90.0682 253V255ZM122.11 246.19C128.549 240.251 131.795 233.018 131.795 224.545H129.795C129.795 232.436 126.8 239.143 120.754 244.719L122.11 246.19ZM131.795 224.545C131.795 218.063 130.141 212.066 126.834 206.575L125.121 207.607C128.238 212.782 129.795 218.422 129.795 224.545H131.795ZM126.836 206.579C123.525 201.019 118.811 196.593 112.726 193.302L111.774 195.061C117.567 198.194 122.005 202.375 125.118 207.603L126.836 206.579ZM112.733 193.306C106.619 189.937 99.4158 188.273 91.1591 188.273V190.273C99.1448 190.273 106.002 191.881 111.767 195.058L112.733 193.306ZM91.1591 188.273H45.3409V190.273H91.1591V188.273ZM44.3409 189.273V254H46.3409V189.273H44.3409ZM45.3409 170.636H87.1591V168.636H45.3409V170.636ZM87.1591 170.636C94.0811 170.636 100.355 169.276 105.962 166.535L105.084 164.738C99.7811 167.33 93.8129 168.636 87.1591 168.636V170.636ZM105.958 166.537C111.626 163.796 116.131 159.922 119.447 154.916L117.78 153.811C114.672 158.502 110.45 162.143 105.087 164.736L105.958 166.537ZM119.442 154.923C122.84 149.89 124.523 143.993 124.523 137.273H122.523C122.523 143.643 120.933 149.14 117.785 153.804L119.442 154.923ZM124.523 137.273C124.523 128.83 121.572 121.635 115.684 115.747L114.27 117.162C119.776 122.668 122.523 129.352 122.523 137.273H124.523ZM115.688 115.751C109.724 109.724 100.379 106.818 87.8864 106.818V108.818C100.121 108.818 108.836 111.67 114.266 117.158L115.688 115.751ZM87.8864 106.818H45.3409V108.818H87.8864V106.818ZM44.3409 107.818V169.636H46.3409V107.818H44.3409Z'
                  fill='black'
                  mask='url(#path-2-inside-1_101_37)'
                />
              </g>
              <g filter='url(#filter2_i_101_37)'>
                <path
                  d='M16.191 243.104C12.607 243.104 11.071 241.312 11.583 237.728C12.607 231.243 14.399 224.757 16.959 218.272C18.3243 214.859 20.031 210.933 22.079 206.496C24.2977 202.059 26.8577 197.109 29.759 191.648C31.295 188.747 32.575 186.187 33.599 183.968C34.7937 181.749 35.7323 179.957 36.415 178.592C37.6097 176.203 38.8043 173.643 39.999 170.912C41.3643 168.181 42.7297 165.195 44.095 161.952C50.5803 147.787 56.127 136.693 60.735 128.672C65.5137 120.48 70.6337 114.677 76.095 111.264C76.4363 110.923 77.375 110.923 78.911 111.264C80.447 111.435 81.8977 111.776 83.263 112.288C84.799 112.8 85.7377 113.397 86.079 114.08C86.591 115.275 86.847 116.981 86.847 119.2C86.847 126.027 83.6897 134.219 77.375 143.776C73.9617 148.896 69.6097 154.528 64.319 160.672C59.199 166.645 53.1403 173.131 46.143 180.128L41.535 187.552C36.415 195.744 32.4043 202.741 29.503 208.544C26.7723 214.347 25.7483 219.467 26.431 223.904C26.7723 224.928 27.199 225.44 27.711 225.44C28.223 225.44 29.0763 225.013 30.271 224.16C31.4657 223.307 32.6603 222.283 33.855 221.088C35.2203 219.893 36.5003 218.443 37.695 216.736C38.5483 215.883 39.231 214.944 39.743 213.92C40.4257 212.896 41.1083 211.957 41.791 211.104C42.815 209.227 43.839 207.691 44.863 206.496C48.1057 201.035 50.8363 197.195 53.055 194.976C56.8097 191.221 60.1377 189.344 63.039 189.344C66.4523 189.344 69.439 191.221 71.999 194.976C74.7297 198.56 77.631 203.765 80.703 210.592C82.9217 215.712 84.9697 219.637 86.847 222.368C88.7243 224.928 90.5163 226.208 92.223 226.208C93.9297 226.208 95.8923 225.184 98.111 223.136C100.159 221.259 101.951 220.235 103.487 220.064C104.511 221.259 104.426 222.795 103.231 224.672C102.036 226.379 100.244 228 97.855 229.536C95.6363 231.243 93.4177 232.608 91.199 233.632C88.9803 234.656 87.2737 234.997 86.079 234.656C81.3003 233.291 77.5457 230.901 74.815 227.488C72.255 223.904 69.695 219.296 67.135 213.664C66.2817 211.787 65.5137 210.165 64.831 208.8C64.1483 207.264 63.4657 206.069 62.783 205.216C61.5883 203.509 59.967 202.656 57.919 202.656C56.383 202.656 54.591 203.424 52.543 204.96C50.495 206.667 48.447 208.715 46.399 211.104C44.351 213.323 42.3883 216.053 40.511 219.296C39.3163 221.003 38.3777 222.368 37.695 223.392C37.183 224.245 36.7563 224.843 36.415 225.184C35.5617 226.379 34.1963 228.085 32.319 230.304C30.6123 232.693 28.5643 235.595 26.175 239.008C25.3217 240.032 23.9563 240.971 22.079 241.824C20.3723 242.677 18.6657 243.104 16.959 243.104H16.191ZM47.423 169.632C47.935 169.973 49.215 169.205 51.263 167.328C53.311 165.28 55.615 162.72 58.175 159.648C60.9057 156.405 63.551 153.077 66.111 149.664C68.8417 146.08 70.975 142.923 72.511 140.192C77.8017 131.147 80.447 125.173 80.447 122.272C80.447 121.077 80.0203 120.224 79.167 119.712C77.4603 118.347 75.1563 119.115 72.255 122.016C69.3537 124.747 66.4523 128.416 63.551 133.024C60.6497 137.461 58.175 141.899 56.127 146.336C54.9323 149.067 53.6523 152.139 52.287 155.552C51.0923 158.965 50.0683 162.037 49.215 164.768C48.3617 167.328 47.7643 168.949 47.423 169.632ZM102.327 238.752C99.5963 238.752 97.207 238.496 95.159 237.984C93.2817 237.472 92.343 236.789 92.343 235.936C92.343 234.571 93.7083 233.803 96.439 233.632C98.999 233.461 100.706 233.205 101.559 232.864C103.095 232.523 104.887 232.267 106.935 232.096C108.812 231.755 110.348 231.499 111.543 231.328C119.735 228.939 123.831 225.269 123.831 220.32C123.831 216.907 122.039 212.555 118.455 207.264C116.236 204.021 115.127 200.437 115.127 196.512C115.127 191.733 116.578 187.04 119.479 182.432C122.551 177.824 126.306 173.813 130.743 170.4C135.351 166.816 139.959 164.427 144.567 163.232C146.615 162.72 148.748 162.464 150.967 162.464C154.551 162.464 157.111 163.317 158.647 165.024C159.671 166.048 160.183 168.267 160.183 171.68C160.183 174.24 159.756 176.885 158.903 179.616C158.05 182.176 156.855 184.309 155.319 186.016C154.466 186.869 153.783 187.296 153.271 187.296C152.418 187.296 151.991 186.101 151.991 183.712L152.247 178.592C152.418 177.227 152.503 176.032 152.503 175.008C152.674 173.984 152.759 173.131 152.759 172.448C152.759 169.547 152.162 167.84 150.967 167.328C149.602 166.987 148.663 166.816 148.151 166.816C144.567 166.816 140.727 168.437 136.631 171.68C132.535 174.923 129.207 178.677 126.647 182.944C125.623 184.48 125.111 186.357 125.111 188.576C125.111 191.307 125.794 194.549 127.159 198.304C128.695 201.888 129.804 204.533 130.487 206.24C132.194 209.995 133.474 213.237 134.327 215.968C135.351 218.699 135.863 221.088 135.863 223.136C135.863 224.16 135.778 224.928 135.607 225.44C136.46 225.099 138.508 224.587 141.751 223.904C144.652 223.221 147.127 222.88 149.175 222.88C150.37 222.88 150.967 223.136 150.967 223.648C150.967 223.819 150.455 224.416 149.431 225.44C148.919 225.952 147.298 226.805 144.567 228C142.007 229.024 138.935 230.133 135.351 231.328C131.938 232.523 128.524 233.632 125.111 234.656C121.698 235.68 118.796 236.448 116.407 236.96C112.311 238.155 107.618 238.752 102.327 238.752Z'
                  fill='#EF9714'
                />
              </g>
              <defs>
                <filter
                  id='filter0_f_101_37'
                  x='31.7955'
                  y='72.8182'
                  width='137.455'
                  height='194.182'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur
                    stdDeviation='2'
                    result='effect1_foregroundBlur_101_37'
                  />
                </filter>
                <filter
                  id='filter1_i_101_37'
                  x='22.7955'
                  y='87.8182'
                  width='129.455'
                  height='190.182'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='arithmetic'
                    k2='-1'
                    k3='1'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='shape'
                    result='effect1_innerShadow_101_37'
                  />
                </filter>
                <filter
                  id='filter2_i_101_37'
                  x='10.815'
                  y='110.752'
                  width='149.368'
                  height='136.352'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='arithmetic'
                    k2='-1'
                    k3='1'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='shape'
                    result='effect1_innerShadow_101_37'
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className='w-full lg:w-[75%] flex justify-center items-center lg:pr-[150px] p-4'>
            <p className='text-white text-2xl font-medium'>
              Working as a web developer for over 7 years. I have gained skills
              in building responsive websites and web applications, with a focus
              on usability. Strong problem-solving abilities and commitment to
              staying updated with industry trends. Passionate about creating
              user-friendly experiences and contributing to project success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V4Bio;
