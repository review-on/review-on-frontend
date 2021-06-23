import React from 'react';
// import { Link } from 'react-router-dom';
import * as S from './style';

interface Props {
  isOpen: string;
}

const Sidebar: React.FC<Props> = (props) => {
    
  return (
      <S.Content isOpen={props.isOpen}>
          
      </S.Content>
  );
};

export default Sidebar;
