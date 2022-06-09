import classNameAdder from 'utils/classNameAdder'
import styled from "@emotion/styled";

const styles = {
    rootPage: "bg-dblack text-dneon",
    exploreTheMetaverse: "flex justify-center items-center text-dneon",
    destoria: "pl-2",
    exploreTheMetaverseText: "text-dneon md:text-4xl md:font-bold md:pt-20 "
}

export default classNameAdder(styles);

export const PrimaryBtn = styled.button`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: sans-serif;
  position: relative;
  overflow: hidden;
  padding: 0 14px;
  transform: scale(1);
  
  &,
  &:before,
  &:after,
  .btn-text,
  .btn-text:before,
  .btn-text:after {
    transition: 
      border-color 0.6s ease, 
      color 0.1s ease, 
      transform 0.3s ease,
      width 0.3s ease, 
      height 0.3s ease, 
      top 0.3s ease, 
      left 0.3s ease, 
      bottom 0.3s ease, 
      right 0.3s ease;
  }
  
  &:before,
  &:after {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    transform: rotate(45deg);
    z-index: 3;
  }
  
  &:before {
    border-right: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    top: -8px;
    left: -4px;
  }
  
  &:after {
    border-left: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    bottom: -8px;
    right: -4px;
  }
  
  .btn-bg {
    background-color: ${({outline}) => outline ? '' : '#F83600'};
    position: absolute;
    display: block;
    height: 100%;
    width: calc(100% - 7px);
    top: 0;
    left: 4px;
    opacity: 1;
    transition: background-color 0.3s ease;
    z-index: -1;
    clip-path: polygon( 
      0 10px, 
      10px 0, 
      100% 0, 
      100% 10px, 
      100% calc(100% - 10px), 
      calc(100% - 10px) 100%, 
      10px 100%, 0% 100%, 
      0% 10px 
    );
  }
  
  .btn-text {
    font-family: "Chakra Petch", sans-serif;
    padding: 6px 10px;
    display: block;
    position: relative;
    border-top: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    border-bottom: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    z-index: 3;
  
    &:before,
    &:after {
      content: "";
      width: 20px;
      height: calc(100% - 9px);
      display: block;
      position: absolute;
      z-index: 3;
    }
    
    &:before {
      top: -1px;
      right: -11px;
      border-top: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
      border-right: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    }
    
    &:after {
      bottom: -1px;
      left: -11px;
      border-bottom: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
      border-left: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    }
  }
  
  &:hover {
    & {
      transform: scale(1.05);
    }
    
    &:before,
    &:after {
      border-color: transparent;
    }
    
    &:before {
      top: -7px;
      left: -6px;
    }
    
    &:after {
      bottom: -7px;
      right: -6px;
    }
    
    .btn-text {
      border-color: transparent;
      transform: scale(1.03);
      
      &:before, 
      &:after {
        border-color: transparent;
      }
    }
    
    .btn-text:before,
    .btn-text:after {
      
    }
  
    .btn-bg {
      transform: scale(1.05);
    }
  }
`