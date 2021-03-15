import { useEffect } from 'react';

import Aos from 'aos';

export function aosInit(value) {
  useEffect(() => {
    Aos.init({ duration: value });
  }, []);
}
