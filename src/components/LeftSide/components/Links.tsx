import Title from '../../Title'

const Links = () => {
  return (
    <div className="w-96 mx-auto border-b border-gray pb-10 mb-20">
      <Title text="odkazy" color="gold" />
      <ul className="text-gray leading-8">
        <li className="hover:text-white transition-all">
          <a
            href="https://olha-maievska.github.io/gid-group-react/"
            target="_blank"
          >
            Portfolio Gid.group
          </a>
        </li>
        <li className="hover:text-white transition-all">
          <a href="https://dicantra.vercel.app/" target="_blank">
            Portfolio Dicantra
          </a>
        </li>
        <li className="hover:text-white transition-all focus:outline-transparent">
          <a href="https://github.com/Olha-Maievska" target="_blank">
            Github
          </a>
        </li>
        <li className="hover:text-white transition-all focus:outline-transparent">
          <a
            href="https://linkedin.com/in/olha-maievska-b884202aa"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links