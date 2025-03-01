const services = [
    {
      name: "AC Services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24" id="smart-ac">
  <path fill="#000" fill-rule="evenodd" d="M1.5 9.5C1.5 8.11929 2.61929 7 4 7H20C21.3807 7 22.5 8.11929 22.5 9.5V12.5C22.5 13.8807 21.3807 15 20 15H4C2.61929 15 1.5 13.8807 1.5 12.5V9.5ZM4 8C3.17157 8 2.5 8.67157 2.5 9.5V12.5C2.5 13.3284 3.17157 14 4 14H20C20.8284 14 21.5 13.3284 21.5 12.5V9.5C21.5 8.67157 20.8284 8 20 8H4Z" clip-rule="evenodd"></path>
  <path fill="#000" fill-rule="evenodd" d="M3.08597 14.2197C3.17898 14.0823 3.33409 14 3.5 14H20.5C20.6659 14 20.821 14.0823 20.914 14.2197 21.0071 14.3571 21.0259 14.5317 20.9642 14.6857L20.2157 16.5571C19.9879 17.1266 19.4363 17.5 18.823 17.5H5.17703C4.56368 17.5 4.01212 17.1266 3.78432 16.5571L3.03576 14.6857C2.97415 14.5317 2.99295 14.3571 3.08597 14.2197zM4.23852 15L4.7128 16.1857C4.78873 16.3755 4.97258 16.5 5.17703 16.5H18.823C19.0274 16.5 19.2113 16.3755 19.2872 16.1857L19.7615 15H4.23852zM6.5 11.5C6.5 11.2239 6.27614 11 6 11H5C4.72386 11 4.5 11.2239 4.5 11.5 4.5 11.7761 4.72386 12 5 12H6C6.27614 12 6.5 11.7761 6.5 11.5zM12 23C12.2761 23 12.5 22.7761 12.5 22.5V20.5C12.5 20.2239 12.2761 20 12 20 11.7239 20 11.5 20.2239 11.5 20.5V22.5C11.5 22.7761 11.7239 23 12 23zM17.2237 21.9472C17.4707 21.8237 17.5708 21.5234 17.4473 21.2764L16.4473 19.2764C16.3238 19.0294 16.0235 18.9293 15.7765 19.0528 15.5295 19.1763 15.4294 19.4766 15.5529 19.7236L16.5529 21.7236C16.6764 21.9706 16.9767 22.0707 17.2237 21.9472zM6.7765 21.9472C7.02349 22.0707 7.32383 21.9706 7.44732 21.7236L8.44732 19.7236C8.57082 19.4766 8.47071 19.1763 8.22372 19.0528 7.97673 18.9293 7.67639 19.0294 7.5529 19.2764L6.5529 21.2764C6.4294 21.5234 6.52951 21.8237 6.7765 21.9472zM19.651 5.415C18.9249 4.68621 17.7485 4.68621 17.0224 5.415 16.8275 5.61062 16.5109 5.61121 16.3153 5.41632 16.1197 5.22142 16.1191 4.90484 16.314 4.70921 17.4309 3.58814 19.2425 3.58814 20.3594 4.70921 20.5543 4.90484 20.5537 5.22142 20.3581 5.41632 20.1625 5.61121 19.8459 5.61062 19.651 5.415z" clip-rule="evenodd"></path>
  <path fill="#000" fill-rule="evenodd" d="M21.3197 3.74028C19.6722 2.08657 17.0018 2.08657 15.3542 3.74028C15.1593 3.93591 14.8427 3.9365 14.6471 3.7416C14.4515 3.5467 14.4509 3.23012 14.6458 3.0345C16.6842 0.988501 19.9898 0.988501 22.0282 3.0345C22.2231 3.23012 22.2225 3.5467 22.0268 3.7416C21.8312 3.9365 21.5146 3.93591 21.3197 3.74028Z" clip-rule="evenodd"></path>
</svg>
      ),
    },
    {
      name: "Home Appliances",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="smart-washing-machine">
        <g>
          <path d="M60,0v512h392V0H60z M422,120h-60V30h60V120z M180,120V30h152v90H180z M150,30v90H90V30H150z M90,482V150h332v332H90z"></path>
          <path d="M256,180c-74.991,0-136,61.01-136,136s61.009,136,136,136c74.99,0,136-61.01,136-136S330.99,180,256,180z M256,422   c-58.449,0-106-47.552-106-106s47.551-106,106-106c58.448,0,106,47.552,106,106S314.448,422,256,422z"></path>
          <path d="M256,240c-41.907,0-76,34.094-76,76s34.093,76,76,76c41.906,0,76-34.094,76-76S297.906,240,256,240z M256,362   c-25.364,0-46-20.636-46-46s20.636-46,46-46s46,20.636,46,46S281.364,362,256,362z"></path>
          <rect width="92" height="30" x="210" y="60"></rect>
        </g>
      </svg>
      ),
    },
    {
      name: "Gyser",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 104.202 159.446" id="timed-heater-machine">
  <polygon fill="#fff" points="16.705 157.907 12.524 155.228 13.57 150.664 20.279 146.929 99.811 147.732 102.96 152.84 100.441 158.792 16.705 157.907"></polygon>
  <polygon fill="#fff" points="42.024 2.673 42.024 10.673 26.534 10.673 13.569 39.209 13.569 136.823 102.96 136.59 102.344 35.179 93.088 10.333 75.556 10.673 76.577 1.992 42.024 2.673"></polygon>
  <path d="M102.7,138.09H13.569a1.5,1.5,0,0,1-1.5-1.5V37.71a1.489,1.489,0,0,1,.145-.643l13-27.39a1.5,1.5,0,0,1,1.355-.857H93.417a1.5,1.5,0,0,1,1.413,1l9.284,26a1.473,1.473,0,0,1,.088.5V136.59A1.5,1.5,0,0,1,102.7,138.09Zm-87.632-3H101.2V36.576L92.359,11.82H27.516L15.068,38.048V135.09Z"></path>
  <path d="M100.844 39.209H13.569a1.5 1.5 0 010-3h87.275a1.5 1.5 0 010 3zM95.274 25.746H23.317a1.5 1.5 0 010-3H95.274a1.5 1.5 0 010 3z"></path>
  <path fill="#fcc78e" d="M71.83,62.428A12.535,12.535,0,0,1,59.3,74.964h0A12.535,12.535,0,0,1,46.762,62.428h0A12.533,12.533,0,0,1,59.3,49.894h0A12.533,12.533,0,0,1,71.83,62.428Z"></path>
  <path d="M59.3 76.464A14.035 14.035 0 1173.33 62.428 14.051 14.051 0 0159.3 76.464zm0-25.07A11.035 11.035 0 1070.33 62.428 11.047 11.047 0 0059.3 51.394zM76.24 11.82a1.5 1.5 0 01-1.5-1.5V3H43.386v7.32a1.5 1.5 0 01-3 0V1.5a1.5 1.5 0 011.5-1.5H76.24a1.5 1.5 0 011.5 1.5v8.82A1.5 1.5 0 0176.24 11.82zM97.594 159.446H18.676a6.607 6.607 0 010-13.213H97.594a6.607 6.607 0 110 13.213zM18.675 149.232a3.607 3.607 0 000 7.213H97.593a3.607 3.607 0 100-7.213z"></path>
  <path fill="#fcc78e" d="M46.762,142.161a5.571,5.571,0,0,1-5.571,5.571H34.924a5.572,5.572,0,0,1-5.571-5.571h0a5.571,5.571,0,0,1,5.571-5.571h6.267a5.571,5.571,0,0,1,5.571,5.571Z"></path>
  <path d="M41.19,149.232H34.923a7.071,7.071,0,0,1,0-14.142H41.19a7.071,7.071,0,1,1,0,14.142ZM34.924,138.09a4.071,4.071,0,0,0,0,8.142h6.267a4.071,4.071,0,0,0,0-8.142Z"></path>
  <path fill="#fcc78e" d="M89.24,142.161a5.572,5.572,0,0,1-5.572,5.571H77.4a5.572,5.572,0,0,1-5.571-5.571h0A5.571,5.571,0,0,1,77.4,136.59h6.267a5.572,5.572,0,0,1,5.572,5.571Z"></path>
  <path d="M83.668,149.232H77.4a7.071,7.071,0,0,1,0-14.142h6.267a7.071,7.071,0,1,1,0,14.142ZM77.4,138.09a4.071,4.071,0,0,0,0,8.142h6.267a4.071,4.071,0,1,0,0-8.142Z"></path>
  <g>
    <rect width="12.069" height="11.605" x="1.499" y="44.209" fill="#fcc78e"></rect>
    <path d="M13.569,57.314H1.5a1.5,1.5,0,0,1-1.5-1.5v-11.6a1.5,1.5,0,0,1,1.5-1.5H13.569a1.5,1.5,0,0,1,1.5,1.5v11.6A1.5,1.5,0,0,1,13.569,57.314ZM3,54.314h9.069v-8.6H3Z"></path>
  </g>
  <g>
    <polyline fill="#fcc78e" points="59.296 54.636 59.296 62.43 65.222 67.815"></polyline>
    <path d="M65.222,69.315a1.5,1.5,0,0,1-1.009-.39l-5.926-5.386a1.5,1.5,0,0,1-.491-1.11V54.636a1.5,1.5,0,0,1,3,0v7.13l5.435,4.939a1.5,1.5,0,0,1-1.009,2.61Z"></path>
  </g>
</svg>
      ),
    },
    {
      name: "Electrician",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" overflow="inherit" version="1.2" id="plug">
  <path d="M41 14h-5V2.919C36 1.859 35.105 1 34 1s-2 .859-2 1.919V14H16V2.919C16 1.859 15.105 1 13.999 1 12.894 1 12 1.859 12 2.919V14H7c-.553 0-1 .869-1 1.399V20.2c0 5.759 10 12.446 10 21.696V45h4v4h8v-4h4v-3.104c0-9.25 10-15.938 10-21.696v-4.801c0-.53-.447-1.399-1-1.399M22.907 30.388c.065-.21-.067-.388-.296-.388h-3.885c-.23 0-.295-.13-.149-.299 0 0 8.005-10.159 8.161-10.355.118-.186.248-.121.207.093-.062.271-1.771 7.202-1.771 7.202-.083.204.037.359.264.359h3.887c.229 0 .302.154.162.328 0 0-8.017 10.402-8.161 10.576-.145.174-.279.121-.206-.175l1.787-7.341"></path>
</svg>
      ),
    },
    {
      name: "CCTV Camera",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 96 96" id="cctv-camera">
  <path stroke="#000" stroke-width="5" d="M79.3806 41.7064L78.7088 44.3547L76.602 52.2174C75.8873 54.8848 73.1456 56.4677 70.4783 55.7529L6.82963 38.6983C4.1623 37.9836 2.57939 35.2419 3.2941 32.5746L7.50773 16.8492C8.22243 14.1818 10.9641 12.5989 13.6314 13.3136L45.4558 21.8409"></path>
  <path stroke="#000" stroke-width="5" d="M9.99985 26.8658L70.3734 43.0429C72.0264 43.4858 73.7714 43.4483 75.4037 42.9347L91.3183 37.9279C93.2273 37.3274 93.1685 34.6057 91.2353 34.0882L13.6306 13.3115C10.9635 12.5975 8.22252 14.1804 7.50792 16.8474L6.46432 20.7421C5.74961 23.4095 7.33252 26.1511 9.99985 26.8658zM34 46V49C34 52.866 37.134 56 41 56V56C44.866 56 48 52.866 48 49V49M11 79.4L11 67.6C11 64.5072 8.49279 62 5.4 62 4.6268 62 4 62.6268 4 63.4L4 83.6C4 84.3732 4.6268 85 5.4 85 8.49279 85 11 82.4928 11 79.4z"></path>
  <path stroke="#000" stroke-width="5" d="M11 76L23.0771 76C27.3998 76 31.3885 73.6751 33.5188 69.9138L42 54.9388M11 70.1224H22.7155C25.2556 70.1224 27.5964 68.7464 28.8318 66.527L36.918 52"></path>
</svg>
      ),
    },
    {
      name: "Jio Air Fiber",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 96 96" id="modem">
  <rect width="68" height="20" x="14" y="60" stroke="#000" stroke-width="6" rx="10"></rect>
  <circle cx="41" cy="70" r="3" fill="#000"></circle>
  <circle cx="33" cy="70" r="3" fill="#000"></circle>
  <circle cx="25" cy="70" r="3" fill="#000"></circle>
  <path stroke="#000" stroke-linecap="round" stroke-width="6" d="M69 27C66.2422 24.1466 62.9683 21.8832 59.3651 20.339 55.7619 18.7948 51.9001 18 48 18 44.0999 18 40.2381 18.7948 36.6349 20.339 33.0317 21.8832 29.7578 24.1466 27 27M59 39C57.5555 37.4148 55.8405 36.1574 53.9532 35.2995 52.0658 34.4416 50.0429 34 48 34 45.9571 34 43.9342 34.4416 42.0468 35.2995 40.1595 36.1574 38.4445 37.4148 37 39"></path>
  <circle cx="48" cy="49" r="4" fill="#000"></circle>
  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M57 70L73 70"></path>
</svg>
      )
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-16 text-center">
        <h2 className="text-5xl font-bold ">Services</h2>
        <p className="text-gray-500 mt-2">Choose from our wide range of services</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.icon}
              <p className="mt-2 font-semibold text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  