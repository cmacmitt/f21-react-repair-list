const Footer = ({ clearCompleted }) => {
  return (
    <footer className="footer">
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
