import React from 'react'

const NewTaskBtn = ({ variant }) => {
    let buttonContent;
  
    if (variant === 'CloseBtn') {
      buttonContent = (
        <button className="flex w-8 h-8 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M10.6667 11.1666L21.3334 21.8333" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3334 11.1666L10.6667 21.8333" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      );
    } else if(variant === 'ContactsBtn') {
      buttonContent = (
        <button className="flex w-[34px] h-[34px] p-[4.25px] justify-center items-center gap-[10.625px] rounded-full border-[1.063px] border-dashed border-gray-300">
          <div className="flex w-5 h-5 justify-center items-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M12.5 4.83337C13.9167 6.25004 13.9167 8.50004 12.5 9.83337C11.0833 11.1667 8.83333 11.25 7.49999 9.83337C6.16666 8.41671 6.08333 6.16671 7.49999 4.83337C8.91666 3.50004 11.0833 3.50004 12.5 4.83337" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.33337 17.1667C3.33337 15.0834 5.00004 13.4167 7.08337 13.4167H9.25004" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5833 17.5834V13.4167" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 15.4999H16.6667" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      );
    } else if(variant === 'TagsBtn'){
      buttonContent = (
          <button className="flex w-[50px] h-[50px] p-[6.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-gray-300">
      <div className="flex w-[29.412px] h-[29.412px] justify-center items-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M11.5251 12.7273C11.7008 12.903 11.7008 13.1877 11.5251 13.3634C11.3495 13.539 11.0647 13.539 10.8891 13.3634C10.7134 13.1877 10.7134 12.903 10.8891 12.7273C11.0647 12.5517 11.3495 12.5517 11.5251 12.7273" stroke="#C1C1C1" strokeWidth="1.83824" strokeLinecap="round" strokeLinejoin="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M14.6445 8.00261L23.4803 16.8384C24.4264 17.7845 24.4264 19.3188 23.4803 20.2649L18.4264 25.3188C17.4803 26.2649 15.946 26.2649 14.9999 25.3188L6.16411 16.483C5.93739 16.2563 5.80872 15.9475 5.80872 15.6264V8.85923C5.80872 8.19011 6.35161 7.64722 7.02073 7.64722H13.7891C14.1102 7.64722 14.4178 7.77467 14.6445 8.00261V8.00261Z" stroke="#C1C1C1" strokeWidth="1.83824" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.1911 12.5491L16.2181 4.67781C15.7585 4.22438 15.1409 3.9707 14.4963 3.9707H9.48523" stroke="#C1C1C1" strokeWidth="1.83824" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
      );
    } else if(variant === 'CalendarBtn'){
      buttonContent = (
        <button className="flex w-[50px] h-[50px] p-[1.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-gray-300">
        <div className="flex w-[30px] h-[30px] justify-center items-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M20 2.5V7.5" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 2.5V7.5" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.75 11.25H26.25" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 5H6.25C4.86875 5 3.75 6.11875 3.75 7.5V23.75C3.75 25.1313 4.86875 26.25 6.25 26.25H23.75C25.1313 26.25 26.25 25.1313 26.25 23.75V7.5C26.25 6.11875 25.1313 5 23.75 5Z" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.76633 15.9111C8.59383 15.9111 8.45383 16.0511 8.45508 16.2236C8.45508 16.3961 8.59508 16.5361 8.76758 16.5361C8.94008 16.5361 9.08008 16.3961 9.08008 16.2236C9.08008 16.0511 8.94008 15.9111 8.76633 15.9111" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.0163 15.9111C14.8438 15.9111 14.7038 16.0511 14.7051 16.2236C14.7051 16.3961 14.8451 16.5361 15.0176 16.5361C15.1901 16.5361 15.3301 16.3961 15.3301 16.2236C15.3301 16.0511 15.1901 15.9111 15.0163 15.9111" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.2663 15.9111C21.0938 15.9111 20.9538 16.0511 20.9551 16.2236C20.9551 16.3961 21.0951 16.5361 21.2676 16.5361C21.4401 16.5361 21.5801 16.3961 21.5801 16.2236C21.5801 16.0511 21.4401 15.9111 21.2663 15.9111" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.76633 20.9111C8.59383 20.9111 8.45383 21.0511 8.45508 21.2236C8.45508 21.3961 8.59508 21.5361 8.76758 21.5361C8.94008 21.5361 9.08008 21.3961 9.08008 21.2236C9.08008 21.0511 8.94008 20.9111 8.76633 20.9111" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.0163 20.9111C14.8438 20.9111 14.7038 21.0511 14.7051 21.2236C14.7051 21.3961 14.8451 21.5361 15.0176 21.5361C15.1901 21.5361 15.3301 21.3961 15.3301 21.2236C15.3301 21.0511 15.1901 20.9111 15.0163 20.9111" stroke="#BDC0C6" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </button>
      );
    } else if(variant === 'PriorityBtn'){
      buttonContent = (
      <button className="flex w-[50px] h-[50px] p-[6.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-gray-300">
      <div className="flex w-[29.412px] h-[29.412px] justify-center items-center flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M6.42146 26.0294V5.11035" stroke="#C1C1C1" stroke-width="2.3897" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.5787 17.4754V5.19604" stroke="#C1C1C1" stroke-width="2.3897" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.42163 17.451C6.42163 17.451 7.49393 16.5601 10.7108 16.5601C13.9277 16.5601 16.0723 18.6765 19.2892 18.6765C22.5061 18.6765 23.5784 17.4792 23.5784 17.4792" stroke="#C1C1C1" stroke-width="2.3897" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.42163 5.11286C6.42163 5.11286 7.49393 3.9707 10.7108 3.9707C13.9277 3.9707 16.0723 6.08712 19.2892 6.08712C22.5061 6.08712 23.5784 5.19619 23.5784 5.19619" stroke="#C1C1C1" stroke-width="2.3897" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </button>
      );
    }
  
    return (
      <div>
        {buttonContent}
      </div>
    );
  };

export default NewTaskBtn