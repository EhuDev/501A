const Footer = ({ darkMode }) => {
  return (
    <div>
      <footer
        className={`footer footer-center bg-base-300 text-base-content p-4 ${
          darkMode ? "" : "bg-white text-skin"
        }`}
      >
        <aside>
          <p>Built by Jhonard Langcoyan</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
