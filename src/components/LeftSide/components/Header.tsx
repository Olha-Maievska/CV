const Header = () => {
  return (
    <header className="block sm:hidden text-gray m-10">
      <div className="w-full font-oswald uppercase mb-4">
        <h5 className="font-medium text-3xl mb-4">Olha Maievska</h5>
        <span className="text-md tracking-wider">
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
