import React, { Component } from 'react'
import LogoString from './LogoString'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import Link from 'gatsby-link'
import t from 'format-message'
import { Bars as MenuIcon } from 'styled-icons/fa-solid'
import { BREAKPOINT } from 'constants/responsive'

const StyledHeader = styled(Flex)`
  position: fixed;
  z-index: 200000;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: #013760;
`;

const StyledMenuIcon = MenuIcon.extend`
  color: white;
  position: absolute;
  padding: 10px;
  top: 10px;
  right: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  border: 1px all transparent;
  border-radius: 10px;

  &:hover {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(0,0,0,.);
  }

  &.active {
    background: rgba(0,0,0,.8);
    border: 1px solid #003d6e;
  }
`

const StyledMainLogo = styled('img') `
    width: auto;
    margin-left: 10px;
    height: 100%;
`

const StyledGatsbyLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const AnimatedDiv = styled(Flex) `
  width: 0px;
  background-color: rgba(0, 0, 0, 0.9);
  transition: width 0.3s ease-in-out;
  flex-direction: column;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  white-space: nowrap;
  overflow: hidden;

  a {
    cursor:pointer;
    width: 100%;
    display: block;
    color: #fff;
    padding: 20px 30px;
  }

  &.open {
    width: 100%;

    @media (min-width: ${BREAKPOINT}px) {
      width: 400px;
    }
  }
`

const Menu = ({open, close}) => (
  <AnimatedDiv className={open ? 'open' : ''}>
    <div onClick={close}><StyledGatsbyLink to="/">{ t('Hem') }</StyledGatsbyLink></div>
    <div onClick={close}><StyledGatsbyLink to="/jobb">{ t('Se alla jobb') }</StyledGatsbyLink></div>
    <div onClick={close}><StyledGatsbyLink to="/foretag">{ t('Hitta företag') }</StyledGatsbyLink></div>
    <div onClick={close}><StyledGatsbyLink to="/leva-och-bo-i-kalmar">{ t('Livet i Kalmar') }</StyledGatsbyLink></div>
    <div onClick={close}><StyledGatsbyLink to="/om-it-jobb-i-kalmar">{ t('Om sidan') }</StyledGatsbyLink></div>
  </AnimatedDiv>
)

class Header extends Component {
  state = {
    renderMenu: false
  }

  goToHome = () => {
    window.location.assign(window.location.origin)
  }

  toggleMenu = () => {
    this.setState({renderMenu: !this.state.renderMenu})
  }

  render() {
    const { renderMenu } = this.state

    return (
      <StyledHeader>
        <a href="/">
          <StyledMainLogo src={LogoString} />
        </a>

        <StyledMenuIcon
          size={50}
          onClick={this.toggleMenu}
          className={renderMenu ? 'active' : ''}
        />

        <Menu open={renderMenu} close={() => this.setState({renderMenu: false})} />
      </StyledHeader>
    )
  }
}

export default Header
