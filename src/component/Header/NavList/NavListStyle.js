import styled from "styled-components";
const NavListStyle = styled.div`
 display: none ;
 width: 100%;
 .nav-list{
  display: flex ;
  padding: 0;
 }
  /*RWD mobile first*/
  /* NavList* 大於1000px才出現*/
 @media (min-width: 1000px) {
  width: 100%;
  display: flex ;
  .nav-item {
  margin-right: 16px;
}
  .nav-link {
    display: flex ;
    font-size: 1.4rem ;
    color: black;
    text-decoration: none ;
    white-space: nowrap;
  }
}
  /*大於1440px字體和間距放大*/
 @media (min-width: 1440px) {
  .nav-item {
  margin-right: 32px;
}
  .nav-link {
    font-size: 1.6rem ;
  }
 }
`
export default NavListStyle