import React, { useEffect, useRef, useState } from 'react';
import { PasturesContainer, PastureLeft, PastureCenterBg, PastureCenterFg, PastureRight, Cows } from './style';
import Cow from '../cow';

const Pastures = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    let n = Math.ceil(Math.random() * 3) + 3;
    setCows(new Array(n).fill(0));
  }, []);

  return (
    <PasturesContainer>
      <PastureLeft />
      <PastureRight />
      <PastureCenterBg />
      <PastureCenterFg />
      {cows && cows.map((_, index) => <Cow total={cows.length} index={index} />)}
    </PasturesContainer>
  );
};

export default Pastures;
