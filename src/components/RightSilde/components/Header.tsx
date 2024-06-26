const Header = () => {
  return (
    <header className="hidden sm:block lg:flex mt-2 md:mt-6 justify-between items-end mb-14 lg:mb-24 text-center md:text-left">
      <div className="w-full lg:w-80 font-oswald uppercase text-blue mb-4 lg:mb-0">
        <h5 className="font-medium text-3xl md:text-[55px] leading-8 md:leading-[60px] mb-2 md:mb-6 tracking-wider">
          Olha Maievska
        </h5>
        <span className="text-md md:text-xl tracking-wider">
          Junior Front End Developer
        </span>
      </div>

      <div className="flex items-center flex-col md:block">
        <a className="flex items-center mb-2" href="tel:420774806840">
          <img
            className="w-6 h-6 mr-2"
            src="/images/phone.svg"
            alt="phone number"
          />
          <span>+420-774-806-840</span>
        </a>
        <a className="flex items-center" href="mailto:olhamaievska91@gmail.com">
          <img className="w-6 h-6 mr-2" src="/images/email.svg" alt="email" />
          <span>olhamaievska91@gmail.com</span>
        </a>
      </div>
    </header>
  )
}

export default Header
