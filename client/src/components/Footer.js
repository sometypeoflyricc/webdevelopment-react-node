function Footer() {
  //creating new Date instance and getting current year from this
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
      <footer><p> Goals tracker {currentYear}</p></footer>
    );
  }
  
  export default Footer;