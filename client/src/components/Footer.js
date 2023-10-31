function Footer() {
  //creating new Date instance and getting current year from this
    const currentYear = new Date().getFullYear();
    return (
      <footer><p> Goals tracker {currentYear}</p></footer>
    );
  }
  
  export default Footer;