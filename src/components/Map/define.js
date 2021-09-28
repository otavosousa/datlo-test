import dynamic from 'next/dynamic';

const DefineMap = dynamic(() => import('./Map'), {
  ssr: false,
});

export default DefineMap;
