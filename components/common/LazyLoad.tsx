import { useRef, useState, useEffect, ReactNode, Fragment } from 'react';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const LazyLoad = ({
  component,
  classes = ''
}: {
  component: ReactNode;
  classes?: string;
}) => {
  const componentRef = useRef();
  const componentRefValue = useIntersectionObserver(componentRef);
  const [shouldRender, setShouldRender] = useState(true);
  const [renderComp, setRenderComp] = useState(false);

  useEffect(() => {
    if (componentRefValue && shouldRender) {
      setShouldRender(false);
      setRenderComp(true);
    }
  }, [componentRefValue, shouldRender]);

  return (
    <div className={classes} ref={componentRef}>
      {renderComp && component}
    </div>
  );
};

export default LazyLoad;
