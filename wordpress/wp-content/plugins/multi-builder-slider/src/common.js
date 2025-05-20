import placeholderImage from '../images/placeholder-image.webp';
const { __ } = wp.i18n;

export const MainIcons = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="#000"
        viewBox="0 0 60 60"
    >
        <path
           
            d="M55.543 34.8c-.343 0-.6-.086-.857-.343a1.243 1.243 0 010-1.8l2.057-2.143L54.77 27.6c-.428-.6-.257-1.371.343-1.8.6-.429 1.372-.257 1.8.343L60 30.77l-3.514 3.686c-.257.172-.6.343-.943.343zM4.457 34.8c-.343 0-.686-.171-.943-.429L0 30.686l3.086-4.629c.428-.6 1.2-.771 1.8-.343.6.429.771 1.2.343 1.8L3.257 30.43 5.4 32.57a1.243 1.243 0 010 1.8c-.343.258-.6.429-.943.429zM45.429 55.886H14.657C11.571 55.886 9 53.314 9 50.229V9.77c0-3.085 2.571-5.657 5.657-5.657H45.43c3.085 0 5.657 2.572 5.657 5.657V50.23c0 3.085-2.572 5.657-5.657 5.657zm-30.772-49.2a3.073 3.073 0 00-3.086 3.085V50.23a3.073 3.073 0 003.086 3.085H45.43a3.073 3.073 0 003.085-3.085V9.77a3.073 3.073 0 00-3.085-3.085H14.657z"
        ></path>
        
        <path
            
            d="M28.457 46.114L19.714 35.4l-8.4 10.629L9.257 44.4l10.457-13.029 9 10.972 20.229-19.029 1.8 1.886-22.286 20.914zM37.971 22.371a4.207 4.207 0 01-4.2-4.2c0-2.314 1.886-4.2 4.2-4.2 2.315 0 4.2 1.886 4.2 4.2.086 2.315-1.885 4.2-4.2 4.2zm0-6c-1.028 0-1.8.858-1.8 1.8 0 1.029.858 1.8 1.8 1.8.943 0 1.8-.857 1.8-1.8.086-1.028-.771-1.8-1.8-1.8z"
        ></path>
    </svg>
     
     
    );
}

export const Icons = (color) => {
    return {
        'arrow1': {
            next: `
        <svg class="bdt-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
          <g fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
            <circle  cx="16" cy="16" r="15.12"></circle>
            <path class="bdt-arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
          </g>
        </svg>
      `,
      prev: `
      <svg class="bdt-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" transform="rotate(180)">
        <g fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
          <circle  cx="16" cy="16" r="15.12"></circle>
          <path class="bdt-arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
        </g>
      </svg>
    `
    },
        'arrow2': {
            next: `
    <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
                        <g>
                            <path d="M441.773,240.915L207.106,6.248C203.106,2.248,197.679,0,192.021,0H85.355C66.349,0,56.831,22.979,70.27,36.418
                                L289.852,256L70.27,475.582C56.831,489.021,66.349,512,85.355,512h106.667c5.658,0,11.084-2.248,15.085-6.248l234.667-234.667
                                C450.104,262.754,450.104,249.246,441.773,240.915z M183.185,469.333h-46.327l198.248-198.248c8.331-8.331,8.331-21.839,0-30.17
                                L136.858,42.667h46.327L396.518,256L183.185,469.333z"/>
                        </g>
                    </g>
</svg>
      `,
      prev: `
      <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512 512" xml:space="preserve" transform="rotate(180)">
  <g>
                          <g>
                              <path d="M441.773,240.915L207.106,6.248C203.106,2.248,197.679,0,192.021,0H85.355C66.349,0,56.831,22.979,70.27,36.418
                                  L289.852,256L70.27,475.582C56.831,489.021,66.349,512,85.355,512h106.667c5.658,0,11.084-2.248,15.085-6.248l234.667-234.667
                                  C450.104,262.754,450.104,249.246,441.773,240.915z M183.185,469.333h-46.327l198.248-198.248c8.331-8.331,8.331-21.839,0-30.17
                                  L136.858,42.667h46.327L396.518,256L183.185,469.333z"/>
                          </g>
                      </g>
  </svg>
        `
    },
        'arrow3': {
            next: `
      <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512 512" xml:space="preserve">
<g>
                            <g>
                                <path d="M256,0C114.51,0,0,114.496,0,256c0,141.49,114.496,256,256,256c141.49,0,256-114.496,256-256C512,114.51,397.504,0,256,0z
                                    M256,478.39c-122.626,0-222.39-99.764-222.39-222.39S133.374,33.61,256,33.61S478.39,133.374,478.39,256
                                    S378.626,478.39,256,478.39z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M359.974,218.832l-86.716-86.72c-20.542-20.543-53.794-20.545-74.339,0c-20.544,20.543-20.545,53.794,0,74.339
                                    L248.468,256l-49.549,49.549c-20.543,20.542-20.545,53.794,0,74.339c20.54,20.542,53.795,20.546,74.337,0l86.717-86.717
                                    c9.929-9.927,15.396-23.128,15.396-37.169S369.903,228.76,359.974,218.832z M336.209,269.403l-86.718,86.718
                                    c-7.407,7.407-19.398,7.408-26.806,0c-7.408-7.409-7.408-19.397,0-26.807l61.432-61.432c6.563-6.563,6.563-17.203,0-23.766
                                    l-61.432-61.432c-7.408-7.409-7.408-19.397,0-26.807c7.408-7.408,19.398-7.408,26.805,0l86.717,86.717
                                    C343.599,249.987,343.599,262.013,336.209,269.403z"/>
                            </g>
                        </g>
  </svg>
        `,
        prev: `
        <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 512 512" xml:space="preserve" transform="rotate(180)">
  <g>
                              <g>
                                  <path d="M256,0C114.51,0,0,114.496,0,256c0,141.49,114.496,256,256,256c141.49,0,256-114.496,256-256C512,114.51,397.504,0,256,0z
                                      M256,478.39c-122.626,0-222.39-99.764-222.39-222.39S133.374,33.61,256,33.61S478.39,133.374,478.39,256
                                      S378.626,478.39,256,478.39z"/>
                              </g>
                          </g>
                          <g>
                              <g>
                                  <path d="M359.974,218.832l-86.716-86.72c-20.542-20.543-53.794-20.545-74.339,0c-20.544,20.543-20.545,53.794,0,74.339
                                      L248.468,256l-49.549,49.549c-20.543,20.542-20.545,53.794,0,74.339c20.54,20.542,53.795,20.546,74.337,0l86.717-86.717
                                      c9.929-9.927,15.396-23.128,15.396-37.169S369.903,228.76,359.974,218.832z M336.209,269.403l-86.718,86.718
                                      c-7.407,7.407-19.398,7.408-26.806,0c-7.408-7.409-7.408-19.397,0-26.807l61.432-61.432c6.563-6.563,6.563-17.203,0-23.766
                                      l-61.432-61.432c-7.408-7.409-7.408-19.397,0-26.807c7.408-7.408,19.398-7.408,26.805,0l86.717,86.717
                                      C343.599,249.987,343.599,262.013,336.209,269.403z"/>
                              </g>
                          </g>
    </svg>
          `
    },
        'arrow4': {
            next: `
        <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 32 32" xml:space="preserve">
    <path d="M25.468,14.508l-20.967,-0.008c-0.828,-0 -1.501,0.672 -1.501,1.499c-0,0.828 0.672,1.501 1.499,1.501l21.125,0.009c-0.107,0.159 -0.234,0.306 -0.377,0.439c-3.787,3.502 -9.68,8.951 -9.68,8.951c-0.608,0.562 -0.645,1.511 -0.083,2.119c0.562,0.608 1.512,0.645 2.12,0.083c-0,0 5.892,-5.448 9.68,-8.95c1.112,-1.029 1.751,-2.47 1.766,-3.985c0.014,-1.515 -0.596,-2.968 -1.688,-4.018l-9.591,-9.221c-0.596,-0.574 -1.547,-0.556 -2.121,0.041c-0.573,0.597 -0.555,1.547 0.042,2.121l9.591,9.221c0.065,0.063 0.127,0.129 0.185,0.198Z"/><g id="Icon"/>
    </svg>
          `,
          prev: `
          <svg class="bdt-arrow-icon" fill="${color}" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
           viewBox="0 0 32 32" xml:space="preserve" transform="rotate(180)">
      <path d="M25.468,14.508l-20.967,-0.008c-0.828,-0 -1.501,0.672 -1.501,1.499c-0,0.828 0.672,1.501 1.499,1.501l21.125,0.009c-0.107,0.159 -0.234,0.306 -0.377,0.439c-3.787,3.502 -9.68,8.951 -9.68,8.951c-0.608,0.562 -0.645,1.511 -0.083,2.119c0.562,0.608 1.512,0.645 2.12,0.083c-0,0 5.892,-5.448 9.68,-8.95c1.112,-1.029 1.751,-2.47 1.766,-3.985c0.014,-1.515 -0.596,-2.968 -1.688,-4.018l-9.591,-9.221c-0.596,-0.574 -1.547,-0.556 -2.121,0.041c-0.573,0.597 -0.555,1.547 0.042,2.121l9.591,9.221c0.065,0.063 0.127,0.129 0.185,0.198Z"/><g id="Icon"/>
      </svg>
            `,
        
        },

    };
};


export const attributesObject=()=>{

    return {
            slides: {
                type: 'array',
                default: [
                    {
                        "title": "Lorem Ipsum",
                        "buttonText": "Readmore",
                        "rating": {
                            "size": 2
                        },
                        "showDateLink":false,
                        "imageUrl": placeholderImage,
                        "isOpen": true,                   
                        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    
                    },
                    {
                        "title": "Lorem Ipsum",
                        "buttonText": "Readmore",
                        "rating": {
                            "size": 2
                        },
                        "showDateLink":false,
                        "imageUrl": placeholderImage,
                        "isOpen": true,                   
                        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    
                    },
                    {
                        "title": "Lorem Ipsum",
                        "buttonText": "Readmore",
                        "rating": {
                            "size": 2
                        },
                        "showDateLink":false,
                        "imageUrl": placeholderImage,
                        "isOpen": true,                   
                        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    
                    },
                    {
                        "title": "Lorem Ipsum",
                        "buttonText": "Readmore",
                        "rating": {
                            "size": 2
                        },
                        "showDateLink":false,
                        "imageUrl": placeholderImage,
                        "isOpen": true,                   
                        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    
                    }
                    
                         
                ],
            },
          
            nextPrevarrow: {
                type: 'string',           
                default: "arrow1",
            },
            paginationtype: {
                type: 'string',           
                default: "bullets",
            },
            arrowsEnable: {
                type: 'boolean',
                default: true,
            },
            dotsEnable: {
                type: 'boolean',
                default: true,
            },
            
            autoplay: {
                type: 'boolean',
                default: false,
            },
            autoplayDelay: {
                type: 'number',
                default: 3000,
            },
            slidegap: {
                type: 'number',
                default: 10,
            },
            slidesPerView: {
                type: 'number',
                default: 1,
            },
            sliderSpeed: {
                type: 'number',
                default: 500,
            },
            currentblockId: {
                type: 'string',
                default: 'djnfd783n3-fdb37-dsf'
             },
             color: {
                type: 'string',
                default: '#000'
             },
             arrowColor: {
                type: 'string',
                default: '#000'
             },
             fontSize:{
                type: 'string',            

             },
             textAlign: {
                type: "string",
                default: "center",
            },
            verticalAlign: {
                type: "string",
                default: "center",
            },
             
        };
}




export const VERTICAL_ALIGN = [
    { label: __("Top", "aios"), value: "flex-start" },
    { label: __("Middle", "aios"), value: "center" },
    { label: __("Bottom", "aios"), value: "flex-end" },
];
 
export const TEXT_ALIGN = [
    { label: __("Left", "aios"), value: "flex-start" },
    { label: __("Right", "aios"), value: "flex-end" },
    { label: __("Center", "aios"), value: "center" },
    { label: __("Justify", "aios"), value: "stretch" },
];
